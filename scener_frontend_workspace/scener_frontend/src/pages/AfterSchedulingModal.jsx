import React from "react";
import Button from "../components/Button";
import "./AfterSchedulingModal.css";

// PUBLIC_INTERFACE
/**
 * AfterSchedulingModal - appears after successful scheduling of a watch party.
 * Props:
 *   open: boolean, controls visibility
 *   onClose: function
 *   onEdit: function
 *   party: { title, date, time, image } (object containing details)
 */
export default function AfterSchedulingModal({ open, onClose, onEdit, party = {} }) {
  // party = { title, date, time, image }
  if (!open) return null;
  return (
    <div className="after-modal-overlay" aria-modal="true" role="dialog">
      <div className="after-modal-card" tabIndex={-1}>
        <button className="after-modal-close-btn" aria-label="Close" onClick={onClose}>&times;</button>
        <div className="after-modal-heading">Watch party added to schedule</div>
        <div className="after-modal-party-card">
          <div className="after-party-image">
            {/* Fallback icon if no party.image */}
            {party.image ? (
              <img src={party.image} alt="Party Banner" style={{ width: "100%", borderRadius: 12 }} />
            ) : (
              <span role="img" aria-label="Show Banner" style={{ fontSize: 37 }}>🍿</span>
            )}
          </div>
          <div className="after-party-details">
            <span className="after-party-title">
              {party.title || "Watch Party"}
              <Button
                as="button"
                variant="outlined"
                className="after-edit-btn"
                style={{ marginLeft: 10, minHeight: 27, padding: "3px 15px", fontSize: 15, borderRadius: 15 }}
                onClick={onEdit}
              >Edit</Button>
            </span>
            <span className="after-party-meta">
              {party.date || "May 4, 2024"} at {party.time || "8:00pm"}
            </span>
          </div>
        </div>
        <div className="after-modal-divider" />
        <div className="after-invite-section">
          <div className="after-invite-label">Invite to this party</div>
          <div className="after-invite-actions">
            <Button
              as="button"
              variant="outlined"
              className="after-invite-btn"
              style={{ marginRight: 15 }}
              onClick={() => window.navigator.clipboard?.writeText("https://scener.app/join-party")}
            >Copy link</Button>
            <Button
              as="button"
              variant="outlined"
              className="after-invite-btn"
              onClick={() => alert("Share dialog coming soon!")}
            >Share</Button>
          </div>
        </div>
        <div className="after-modal-actions">
          <Button
            as="button"
            variant="cta"
            className="after-modal-done-btn"
            style={{ width: "100%", borderRadius: 30, fontWeight: 700, fontSize: "1.04rem" }}
            onClick={onClose}
          >Done</Button>
        </div>
        <div className="after-ghost-edit">
          <button
            className="after-edit-link"
            onClick={onEdit}
            tabIndex={0}
          >Edit event</button>
        </div>
      </div>
    </div>
  );
}
