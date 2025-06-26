import React, { useState, useRef } from "react";
import "./ScheduleWatchPartyModal.css";
import Button from "../components/Button";

// PUBLIC_INTERFACE
/**
 * ScheduleWatchPartyModal - A fully designed step modal for scheduling a new watch party.
 *
 * Props:
 *  - open: Boolean, whether the modal is visible
 *  - onClose: function, callback when modal closes
 *  - onComplete: function, callback when scheduling completes (optional)
 */
export default function ScheduleWatchPartyModal({
  open,
  onClose,
  onComplete
}) {
  // Modal step state: 0=content, 1=date/time, 2=privacy
  const [step, setStep] = useState(0);
  // Step 1 (content)
  const [searchTitle, setSearchTitle] = useState("");
  const [manualUrl, setManualUrl] = useState("");
  const [manualDetails, setManualDetails] = useState("");
  // Step 2 (date/time)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showTimeErr, setShowTimeErr] = useState(false);
  // Step 3 (privacy)
  const [title, setTitle] = useState("User's watch party");
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [privacy, setPrivacy] = useState("private"); // or "public"

  const titleInputRef = useRef(null);

  // Validation & transitions
  const isStep1Valid = !!(searchTitle || manualUrl || manualDetails);
  const isStep2Valid = !!date && !!time && timeValid(time);

  function handleSkipShowDetails(e) {
    e.preventDefault();
    setStep(1);
  }
  function handleNextStep(e) {
    e && e.preventDefault && e.preventDefault();
    if (step === 1 && (!date || !time || !timeValid(time))) {
      setShowTimeErr(true);
      return;
    }
    setShowTimeErr(false);
    setStep(s => s + 1);
  }
  function handleBackStep(e) {
    e && e.preventDefault && e.preventDefault();
    if (step === 0) return;
    setShowTimeErr(false);
    setStep(s => s - 1);
  }
  function beginEditTitle() {
    setTitleInput(title);
    setEditingTitle(true);
    setTimeout(() => {
      if (titleInputRef.current) titleInputRef.current.focus();
    }, 80);
  }
  function saveTitleEdit(e) {
    e && e.preventDefault && e.preventDefault();
    setEditingTitle(false);
    setTitle(titleInput ? titleInput : title);
  }
  function cancelTitleEdit(e) {
    e && e.preventDefault && e.preventDefault();
    setEditingTitle(false);
    setTitleInput(title);
  }
  function handleClose() {
    setStep(0);
    setSearchTitle("");
    setManualUrl("");
    setManualDetails("");
    setDate("");
    setTime("");
    setTitle("User's watch party");
    setPrivacy("private");
    setEditingTitle(false);
    setShowTimeErr(false);
    if (onClose) onClose();
  }
  function handleFinish() {
    if (onComplete)
      onComplete({
        title,
        privacy,
        date,
        time,
        searchTitle,
        manualUrl,
        manualDetails
      });
    handleClose();
  }

  // Helpers
  function timeValid(t) {
    // Only allow scheduling between 17:00-22:00 (5pm-10pm)
    if (!t) return false;
    const [h, m] = t.split(":").map(Number);
    if (isNaN(h) || h < 17 || h > 21) return false;
    return true;
  }
  // Render input fields per design spec
  function renderFieldsStep1() {
    return (
      <>
        <div className="swp-modal-fields">
          <InputWithChevron
            placeholder="Search for show or movie"
            value={searchTitle}
            onChange={setSearchTitle}
            icon="chevron"
            ariaLabel="Search for show or movie"
            autoFocus
          />
          <InputWithChevron
            placeholder="OR enter URL (YouTube, Vimeo)"
            value={manualUrl}
            onChange={setManualUrl}
            icon="chevron"
            ariaLabel="Enter URL"
            type="url"
          />
          <InputWithChevron
            placeholder="OR manually enter details"
            value={manualDetails}
            onChange={setManualDetails}
            icon="chevron"
            ariaLabel="Manual details"
          />
        </div>
        <div style={{ marginTop: 32 }}>
          <Button
            variant="cta"
            style={{ width: 220, height: 40, fontSize: "1.07rem" }}
            onClick={handleSkipShowDetails}
            tabIndex={0}
          >
            I don't know yet
          </Button>
          <div>
            <a className="swp-link" tabIndex={0} href="#" onClick={handleClose} style={{ marginTop: 10 }}>
              Go back
            </a>
          </div>
        </div>
      </>
    );
  }
  function renderFieldsStep2() {
    return (
      <>
        <div className="swp-modal-fields">
          <InputWithIcon
            placeholder="Date (required)"
            value={date}
            onChange={setDate}
            icon="calendar"
            type="date"
            ariaLabel="Select party date"
            min={today()}
            max="2099-12-31"
            required
          />
          <InputWithIcon
            placeholder="Time (required)"
            value={time}
            onChange={setTime}
            icon="clock"
            type="time"
            ariaLabel="Select party time"
            min="17:00"
            max="21:59"
            required
            error={showTimeErr && !timeValid(time)}
          />
        </div>
        <div style={{ color: "var(--secondary-text)", fontSize: 14, marginTop: 5, minHeight: 20 }}>
          You can only schedule between 5pm-10pm
        </div>
        {showTimeErr && (
          <div
            className="swp-field-error"
            style={{ color: "#ff80ff", fontSize: 14, marginTop: 3, marginBottom: 3 }}
          >
            Please pick a time between 5pm and 10pm
          </div>
        )}
        <div style={{ marginTop: 32 }}>
          <Button
            variant="cta"
            onClick={handleNextStep}
            tabIndex={0}
            style={{ width: 220, height: 40, fontSize: "1.07rem", opacity: isStep2Valid ? 1 : 0.5 }}
            disabled={!isStep2Valid}
          >
            Next
          </Button>
          <div>
            <a className="swp-link" href="#" onClick={handleBackStep} tabIndex={0} style={{ marginTop: 10 }}>
              Go back
            </a>
          </div>
        </div>
      </>
    );
  }
  function renderFieldsStep3() {
    return (
      <>
        <div className="swp-header-row" style={{ justifyContent: "center", gap: 12 }}>
          {!editingTitle ? (
            <>
              <span className="swp-modal-header" style={{ marginBottom: 0 }}>
                {title}
              </span>
              <button
                className="swp-edit-title-btn"
                onClick={beginEditTitle}
                tabIndex={0}
                aria-label="Change title"
                type="button"
              >
                <PencilIcon />
              </button>
            </>
          ) : (
            <form
              onSubmit={saveTitleEdit}
              style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 0 }}
            >
              <input
                className="swp-title-edit-input"
                ref={titleInputRef}
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                style={{ fontWeight: 600, fontSize: 22, color: "#fff", background: "var(--input-bg)" }}
                maxLength={40}
                aria-label="Edit title"
              />
              <button
                className="swp-save-title-btn"
                type="submit"
                tabIndex={0}
                aria-label="Save title"
              >
                ✓
              </button>
              <button
                className="swp-cancel-title-btn"
                tabIndex={0}
                aria-label="Cancel title edit"
                type="button"
                onClick={cancelTitleEdit}
              >
                ✕
              </button>
            </form>
          )}
        </div>
        <div style={{ marginTop: 14, alignSelf: "flex-start", width: "100%" }}>
          <div className="swp-privacy-label">Privacy</div>
          <div className="swp-privacy-tiles">
            <PrivacyTile
              label="Private party"
              desc="People I invite only"
              active={privacy === "private"}
              onClick={() => setPrivacy("private")}
              iconType="private"
            />
            <PrivacyTile
              label="Public party"
              desc="Anyone can join"
              active={privacy === "public"}
              onClick={() => setPrivacy("public")}
              iconType="public"
            />
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <Button
            variant="cta"
            onClick={handleFinish}
            tabIndex={0}
            style={{ width: 220, height: 40, fontSize: "1.07rem", marginBottom: 7 }}
          >
            Next
          </Button>
          <div>
            <a className="swp-link" href="#" tabIndex={0} onClick={handleBackStep} style={{ marginTop: 10 }}>
              Go back
            </a>
          </div>
        </div>
      </>
    );
  }

  if (!open) return null;
  return (
    <div className="swp-bg-blur" data-modal-root role="dialog" aria-modal="true">
      <div className="swp-modal-card" tabIndex={-1}>
        <button className="swp-modal-close-btn" aria-label="Close" onClick={handleClose}>
          &times;
        </button>
        {/* Avatar placeholder (left/top per design) */}
        <div className="swp-avatar">
          <span className="swp-avatar-circle" aria-label="Party avatar">
            <span role="img" aria-label="Avatar initial" style={{ fontWeight: 700, fontSize: 37 }}>
              🥳
            </span>
          </span>
        </div>
        {/* Modal header by step */}
        <div className="swp-header-row">
          {step === 0 && <span className="swp-modal-header">What will you be watching?</span>}
          {step === 1 && <span className="swp-modal-header">When is your watch party?</span>}
        </div>
        {/* Fields by step */}
        <div className="swp-content-area" style={{ width: "100%", marginTop: 0 }}>
          {step === 0
            ? renderFieldsStep1()
            : step === 1
            ? renderFieldsStep2()
            : renderFieldsStep3()}
        </div>
      </div>
    </div>
  );
}

// ------- Subcomponents/helpers used above -------

function InputWithChevron({
  value,
  onChange,
  placeholder,
  icon,
  ariaLabel,
  type = "text",
  autoFocus = false
}) {
  return (
    <div className="swp-input-outer">
      <input
        type={type}
        className="swp-modal-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoFocus={autoFocus}
      />
      {icon === "chevron" && (
        <span className="swp-input-icon" aria-hidden>
          <ChevronDownIcon />
        </span>
      )}
    </div>
  );
}
function InputWithIcon({
  value,
  onChange,
  placeholder,
  icon,
  ariaLabel,
  type = "text",
  min,
  max,
  required = false,
  error = false,
  autoFocus = false
}) {
  return (
    <div className={"swp-input-outer" + (error ? " swp-modal-input-error" : "")}>
      <input
        type={type}
        className="swp-modal-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        min={min}
        max={max}
        placeholder={placeholder}
        aria-label={ariaLabel}
        required={required}
        autoFocus={autoFocus}
        style={error ? { borderColor: "#ff80ff", boxShadow: "0 0 0 2.5px #e55aff" } : {}}
      />
      {icon === "calendar" && (
        <span className="swp-input-icon" aria-hidden>
          <CalendarIcon />
        </span>
      )}
      {icon === "clock" && (
        <span className="swp-input-icon" aria-hidden>
          <ClockIcon />
        </span>
      )}
    </div>
  );
}

// Privacy option tile per design
function PrivacyTile({ label, desc, active, onClick, iconType }) {
  return (
    <button
      className={"swp-privacy-tile" + (active ? " swp-privacy-tile-active" : "")}
      aria-pressed={active}
      tabIndex={0}
      type="button"
      onClick={onClick}
    >
      <span className="swp-privacy-tile-radio">
        {active ? <RadioCheckedIcon /> : <RadioEmptyIcon />}
      </span>
      <div>
        <span className="swp-privacy-tile-label">{label}</span>
        <div className="swp-privacy-tile-desc">{desc}</div>
      </div>
    </button>
  );
}

// ---- SVG/Icon helpers ----
function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden focusable="false">
      <path
        d="M4.7 7.8l4.3 4 4.3-4"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.8}
      />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" aria-hidden focusable="false">
      <rect x="2" y="4" width="15" height="13" rx="4" fill="#30205E"/>
      <rect x="4" y="8" width="3" height="3" rx="1" fill="#8d4ded" />
      <rect x="8" y="8" width="3" height="3" rx="1" fill="#e55aff" />
      <rect x="12" y="8" width="3" height="3" rx="1" fill="#8d4ded" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" aria-hidden focusable="false">
      <circle cx="8.5" cy="8.5" r="7.2" stroke="#e55aff" strokeWidth="2.1" fill="#30205e" />
      <path d="M8.5 4.8v4.2h3.2" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden focusable="false" style={{ opacity: 0.74 }}>
      <path
        d="M13.9 2.86a2.1 2.1 0 0 1 3.03 2.9l-1.14 1.22-3.04-2.86 1.15-1.26zm-2.09 2.13l-8.13 8.87c-.12.13-.22.29-.25.46l-.74 3.49c-.07.33.23.63.57.56l3.48-.74c.17-.03.32-.13.45-.26l8.14-8.86-3.52-3.52z"
        fill="#fff"
      />
    </svg>
  );
}
function RadioCheckedIcon() {
  return (
    <svg width="26" height="26" aria-hidden focusable="false" style={{ marginRight: 5 }}>
      <circle cx="13" cy="13" r="11" fill="#8d4ded" stroke="#e55aff" strokeWidth="2.2" />
      <circle cx="13" cy="13" r="6" fill="#e55aff" />
    </svg>
  );
}
function RadioEmptyIcon() {
  return (
    <svg width="26" height="26" aria-hidden focusable="false" style={{ marginRight: 5 }}>
      <circle cx="13" cy="13" r="11" fill="#30205e" stroke="#8d4ded" strokeWidth="2.2" />
    </svg>
  );
}

// Utility: today as yyyy-mm-dd string
function today() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}
