import React, { useState } from "react";
import Button from "../components/Button";
import "./StreamingServiceModal.css";

// Map of services for dropdown
const SERVICES = [
  {
    value: "netflix",
    label: "Netflix",
    logo: (
      <svg width="28" height="28"><rect width="28" height="28" rx="7" fill="#BC0A17" /><text x="6" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#fff" opacity="0.78">Netflix</text></svg>
    )
  },
  {
    value: "hulu",
    label: "Hulu",
    logo: (
      <svg width="28" height="28"><rect width="28" height="28" rx="7" fill="#1CE783" /><text x="8" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#052524" opacity="1">Hulu</text></svg>
    )
  },
  {
    value: "max",
    label: "Max",
    logo: (
      <svg width="28" height="28"><rect width="28" height="28" rx="7" fill="#3519C7" /><text x="5" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#fff" opacity="0.90">Max</text></svg>
    )
  },
  {
    value: "disney",
    label: "Disney+",
    logo: (
      <svg width="28" height="28"><rect width="28" height="28" rx="7" fill="#1C3AA9" /><text x="1" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#fff" opacity="0.82">Disney+</text></svg>
    )
  },
  {
    value: "prime",
    label: "Prime Video",
    logo: (
      <svg width="28" height="28"><rect width="28" height="28" rx="7" fill="#00A8E1" /><text x="1" y="20" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="#fff" opacity="0.82">Prime Video</text></svg>
    )
  }
];

// PUBLIC_INTERFACE
/**
 * StreamingServiceModal – lets user pick a streaming service with full design fidelity.
 * Props:
 *   open: boolean (whether modal is visible)
 *   onClose: function
 *   onSubmit: function(serviceName)
 */
export default function StreamingServiceModal({ open, onClose, onSubmit }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(SERVICES[0].value);

  function handleSelect(val) {
    setSelected(val);
    setDropdownOpen(false);
  }
  function handleAdd() {
    if (onSubmit) onSubmit(selected);
  }
  if (!open) return null;
  const current = SERVICES.find(s => s.value === selected);

  return (
    <div className="streaming-modal-overlay" role="dialog" aria-modal="true">
      <div className="streaming-modal-card" tabIndex={-1}>
        <button className="streaming-modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="streaming-modal-title">Which streaming service?</h2>
        <div className="streaming-modal-dropdown-label">Streaming on:</div>
        <div
          className="streaming-modal-dropdown"
          tabIndex={0}
          onClick={() => setDropdownOpen(b => !b)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 140)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
        >
          <div className="dropdown-selected">
            <span className="dropdown-logo">{current.logo}</span>
            <span>{current.label}</span>
            <span className="dropdown-chevron" aria-hidden>
              <svg width="16" height="16"><path d="M4.1 6.5l3.8 3.4 3.8-3.4" stroke="#fff" strokeWidth="2" fill="none" opacity="0.7"/></svg>
            </span>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu" role="listbox" tabIndex={-1}>
              {SERVICES.map((svc, idx) => (
                <div
                  key={svc.value}
                  className={"dropdown-item" + (svc.value === selected ? " selected" : "")}
                  onClick={e => { e.stopPropagation(); handleSelect(svc.value); }}
                  role="option"
                  aria-selected={svc.value === selected}
                  tabIndex={0}
                >
                  <span className="dropdown-logo">{svc.logo}</span>
                  <span>{svc.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button
          variant="cta"
          className="streaming-add-btn"
          style={{ width: "100%", marginTop: 26 }}
          onClick={handleAdd}
        >
          Add to schedule
        </Button>
        <button
          className="streaming-cancel-link"
          onClick={onClose}
          tabIndex={0}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
