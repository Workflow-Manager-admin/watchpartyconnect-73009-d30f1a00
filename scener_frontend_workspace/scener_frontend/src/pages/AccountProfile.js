import React, { useState } from "react";
import "./AccountProfile.css";
import Button from "../components/Button";

// PUBLIC_INTERFACE
export default function AccountProfile() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="profile-bg">
      <nav className="profile-header">
        <div className="profile-logo">scener</div>
        <div className="profile-nav-links">
          <a href="#premium">Premium</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <a href="#gift">Buy a Gift</a>
        </div>
        <Button variant="cta" className="profile-header-cta">Get Scener</Button>
      </nav>
      <div className="profile-content-outer">
        <div className="profile-content-wrapper">
          {/* Main card */}
          <section className="profile-main-card">
            {/* Banner */}
            <div className="profile-banner-bg" />
            {/* Avatar */}
            <div className="profile-avatar-outer">
              <span className="profile-avatar">U</span>
            </div>
            {/* Username + handle */}
            <div className="profile-name-block">
              <span className="profile-display">User Name</span>
              <span className="profile-handle">@username</span>
            </div>
            <Button variant="secondary" className="profile-details-btn">Account Details</Button>
            {/* Tabs */}
            <div className="profile-tabs">
              <span
                className={"profile-tab" + (tab === "profile" ? " active" : "")}
                onClick={() => setTab("profile")}
                role="tab"
                tabIndex={0}
              >Profile</span>
              <span
                className={"profile-tab" + (tab === "watch" ? " active" : "")}
                onClick={() => setTab("watch")}
                role="tab"
                tabIndex={0}
              >Watch Parties</span>
              <span
                className={"profile-tab" + (tab === "following" ? " active" : "")}
                onClick={() => setTab("following")}
                role="tab"
                tabIndex={0}
              >Following</span>
            </div>
            {/* Body: Use placeholder content, empty state */}
            <div className="profile-body">
              <span className="profile-empty-msg">
                You have no scheduled watch parties
              </span>
              <div className="profile-body-actions">
                <Button variant="primary" style={{ marginRight: 8, marginBottom: 6 }}>Schedule a watch party</Button>
                <Button variant="outlined">Get Scener</Button>
              </div>
            </div>
          </section>
          {/* Secondary right card/placeholder */}
          <aside className="profile-right-panel">
            <div className="profile-right-minicard">
              {/* Thin content, copyright */}
              <span style={{ color: "var(--profile-text-secondary)", fontSize: 13 }}>
                &copy; 2024 Scener, Inc.
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
