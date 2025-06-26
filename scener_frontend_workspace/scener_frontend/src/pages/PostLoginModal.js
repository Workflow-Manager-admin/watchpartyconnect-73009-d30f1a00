import React, { useState } from "react";
import "./PostLoginModal.css";
import Button from "../components/Button";

// PUBLIC_INTERFACE
export default function PostLoginModal({ open, onClose, onSwitchSignUp }) {
  // State for user/pass fields and validation
  const [user, setUser] = useState("");
  const [pw, setPW] = useState("");
  const [pwFocus, setPWFocus] = useState(false);

  return !open ? null : (
    <div className="modal-bg-blur" role="dialog" aria-modal="true">
      <div className="post-login-modal-card" tabIndex={-1}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="post-login-title">Log In</h2>
        <form
          className="post-login-form"
          autoComplete="off"
          onSubmit={(e) => { e.preventDefault(); /* handle login */ }}
        >
          <label className="sr-only" htmlFor="login-email-input">User/email</label>
          <input
            className="post-login-input"
            id="login-email-input"
            placeholder="username or email"
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            autoFocus
          />
          <label className="sr-only" htmlFor="login-password-input">Password</label>
          <input
            className="post-login-input"
            id="login-password-input"
            placeholder="password"
            type="password"
            value={pw}
            onFocus={() => setPWFocus(true)}
            onBlur={() => setPWFocus(false)}
            onChange={e => setPW(e.target.value)}
          />
          <div className="post-login-forgot-row">
            <a className="post-login-forgot" href="#" tabIndex={0}>Forgot password?</a>
          </div>
          <Button
            variant="cta"
            style={{ width: "100%", marginTop: 10, borderRadius: 16, height: 48, fontSize: "1.12rem", fontWeight: 700 }}
            disabled={!user || !pw}
            type="submit"
          >
            Log In
          </Button>
        </form>
        <div className="post-login-secondary">
          No account?{" "}
          <a
            className="accent-link"
            href="#"
            tabIndex={0}
            onClick={e => { e.preventDefault(); onSwitchSignUp(); }}
          >
            Sign Up for free
          </a>
        </div>
      </div>
    </div>
  );
}
