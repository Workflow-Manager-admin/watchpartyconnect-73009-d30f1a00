import React, { useState } from "react";
import "./design-tokens.css";
import "./utilities.css";
import Button from "./components/Button";
import Modal from "./components/Modal";

// PUBLIC_INTERFACE
export default function Layout({ children }) {
  // Simple modal state for entry points
  const [loginOpen, setLoginOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div>
      {children}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} width={480}>
        <h2 style={{ color: "var(--modal-text)", marginBottom: 20, fontSize: 32 }}>Log In</h2>
        {/* TODO: Insert form markup */}
        <Button variant="cta" style={{ marginTop: 14 }}>Log In</Button>
        <div style={{ marginTop: 20 }}>
          No account?{" "}
          <Button as="span" variant="secondary" style={{ color: "var(--modal-accent)" }}
            onClick={() => { setLoginOpen(false); setCreateOpen(true); }}>
            Sign Up for free
          </Button>
        </div>
      </Modal>
      <Modal open={createOpen} onClose={() => setCreateOpen(false)}>
        <h2 style={{
          color: "var(--modal-title,#fff)",
          marginBottom: 22, textAlign: "center"
        }}>
          Create Account
        </h2>
        {/* TODO: Insert create form markup */}
        <Button variant="cta" style={{ width: "100%", marginTop: 16 }}>Sign up</Button>
        <div style={{ marginTop: 16 }}>
          Have an account?{" "}
          <Button as="span"
            variant="secondary"
            style={{ color: "var(--account-link)", textDecoration: "underline" }}
            onClick={() => { setCreateOpen(false); setLoginOpen(true); }}>
            Log in
          </Button>
        </div>
      </Modal>
    </div>
  );
}
