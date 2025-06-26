import React, { useState } from "react";
import Button from "../components/Button";
import "./ProfileAfterScheduling.css";

// Demo party data
const DEMO_PARTY = {
  title: "Barbie (2023)",
  date: "May 4, 2024",
  time: "8:00pm",
  image: null
};

// PUBLIC_INTERFACE
/**
 * ProfileAfterScheduling Page: shown after a user has scheduled watch parties (dashboard, left profile column, right event sidebar)
 */
export default function ProfileAfterScheduling({
  onEditParty,
  onShowSchedule,
  party = DEMO_PARTY
}) {
  const [tab, setTab] = useState("profile");
  return (
    <div className="profile-after-bg">
      {/* HEADER/NAVBAR */}
      <nav className="profileafter-header">
        <div className="profileafter-logo">scener</div>
        <div className="profileafter-navlinks">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
        </div>
        <div className="profileafter-userarea">
          <div className="profileafter-usericon">
            <span role="img" aria-label="User">😎</span>
          </div>
          <span className="profileafter-greeting">Hi, User</span>
          <Button variant="cta" className="profileafter-cta">Get Scener</Button>
        </div>
      </nav>
      <div className="profileafter-content-outer">
        <div className="profileafter-content-wrapper">
          {/* LEFT: Profile + Schedule */}
          <section className="profileafter-main">
            <div className="profileafter-avatar-row">
              <div className="profileafter-avatar">U</div>
              <div className="profileafter-user-info">
                <span className="profileafter-username">User Name</span>
                <span className="profileafter-userhandle">@username</span>
                <Button variant="secondary" className="profileafter-details-btn">Account details</Button>
              </div>
            </div>
            <div className="profileafter-tabs">
              <span className={"profileafter-tab" + (tab === "profile" ? " active" : "")}
                onClick={() => setTab("profile")}>Profile</span>
              <span className={"profileafter-tab" + (tab === "watch" ? " active" : "")}
                onClick={() => setTab("watch")}>Watch Parties</span>
              <span className={"profileafter-tab" + (tab === "followers" ? " active" : "")}
                onClick={() => setTab("followers")}>Following</span>
            </div>
            {/* Hosting Area */}
            <div className="profileafter-hosting-block">
              <div className="profileafter-hosting-title">Parties I’m hosting:</div>
              <div className="profileafter-party-schedule-row">
                {/* PARTY CARD */}
                <div className="profileafter-party-card">
                  <div className="profileafter-party-img">
                    <span role="img" style={{ fontSize: 34 }} aria-label="Party Banner">🍿</span>
                  </div>
                  <div className="profileafter-party-meta">
                    <div className="profileafter-party-title">{party.title}</div>
                    <div className="profileafter-party-details">{party.date} at {party.time}</div>
                  </div>
                  <Button
                    variant="outlined"
                    className="profileafter-edit-party-btn"
                    style={{ fontSize: 13, marginLeft: 8 }}
                    onClick={onEditParty}
                  >Edit</Button>
                </div>
                <Button
                  variant="primary"
                  className="profileafter-schedule-btn"
                  style={{ marginLeft: 25 }}
                  onClick={onShowSchedule}
                >Schedule a watch party</Button>
              </div>
            </div>
          </section>
          {/* RIGHT: Upcoming Event Sidebar */}
          <aside className="profileafter-sidebar">
            <div className="profileafter-sidebar-card">
              <span style={{
                color: "#B6B0CB", fontSize: 13, alignSelf: "flex-end"
              }}>
                &copy; Scener Inc. 2024
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
