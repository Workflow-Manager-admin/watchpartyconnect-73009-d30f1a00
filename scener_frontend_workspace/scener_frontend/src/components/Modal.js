import React from "react";
import "./Modal.css";

// PUBLIC_INTERFACE
export default function Modal({ open, onClose, width = 420, children, ...props }) {
  if (!open) return null;
  return (
    <div className="body-overlay-bg" role="dialog" aria-modal="true">
      <div
        className="scener-modal"
        tabIndex={-1}
        style={{ width: width, maxWidth: "90vw" }}
        {...props}
      >
        <button
          className="modal-close-btn"
          aria-label="Close modal"
          onClick={onClose}
          tabIndex={0}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
