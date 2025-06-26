import React, { useState } from "react";
import "./CreateAccountModal.css";
import Button from "../components/Button";

// PUBLIC_INTERFACE
export default function CreateAccountModal({ open, onClose, onSwitchLogin }) {
  // Form state
  const [fields, setFields] = useState({
    email: "",
    password: "",
    confirm: "",
    invite: "",
    agreed: false,
  });

  // Validate
  const canSubmit =
    fields.email &&
    fields.password &&
    fields.confirm &&
    fields.password === fields.confirm &&
    fields.agreed;

  return !open ? null : (
    <div className="createacct-bg-blur" role="dialog" aria-modal="true">
      <div className="createacct-modal-card" tabIndex={-1}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="createacct-title">Create Account</h2>
        <form
          className="createacct-form"
          autoComplete="off"
          onSubmit={e => { e.preventDefault(); }}
        >
          <input
            className="createacct-input"
            type="email"
            placeholder="Email"
            value={fields.email}
            onChange={e =>
              setFields(f => ({ ...f, email: e.target.value }))
            }
            autoComplete="email"
          />
          <input
            className="createacct-input"
            type="password"
            placeholder="Password"
            value={fields.password}
            onChange={e =>
              setFields(f => ({ ...f, password: e.target.value }))
            }
            autoComplete="new-password"
          />
          <input
            className="createacct-input"
            type="password"
            placeholder="Confirm"
            value={fields.confirm}
            onChange={e =>
              setFields(f => ({ ...f, confirm: e.target.value }))
            }
            autoComplete="new-password"
          />
          <input
            className="createacct-input"
            type="text"
            placeholder="Invite code (optional)"
            value={fields.invite}
            onChange={e =>
              setFields(f => ({ ...f, invite: e.target.value }))
            }
          />
          <div className="createacct-terms-row">
            <input
              className="createacct-checkbox"
              type="checkbox"
              id="tos-checkbox"
              checked={fields.agreed}
              onChange={e =>
                setFields(f => ({ ...f, agreed: e.target.checked }))
              }
            />
            <label htmlFor="tos-checkbox" className="createacct-tos-label">
              By continuing, you agree to Scener’s{" "}
              <a href="#" tabIndex={0}>Terms of Service</a> and{" "}
              <a href="#" tabIndex={0}>Privacy Policy</a>.
            </label>
          </div>
          <Button
            variant="cta"
            style={{ width: "100%", marginTop: 24, opacity: canSubmit ? 1 : 0.6 }}
            disabled={!canSubmit}
            type="submit"
          >
            Sign up
          </Button>
        </form>
        <div className="createacct-secondary">
          Have an account?{" "}
          <a
            className="createacct-login-link"
            href="#"
            tabIndex={0}
            onClick={e => { e.preventDefault(); onSwitchLogin(); }}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
