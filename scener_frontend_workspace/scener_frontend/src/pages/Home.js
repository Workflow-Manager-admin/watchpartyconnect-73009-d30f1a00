import React, { useState } from "react";
import "./Home.css";
import Button from "../components/Button";
import AccountProfile from "./AccountProfile";
import ProfileAfterScheduling from "./ProfileAfterScheduling";
import PostLoginModal from "./PostLoginModal";
import CreateAccountModal from "./CreateAccountModal";
import ScheduleWatchPartyModal from "./ScheduleWatchPartyModal";
import StreamingServiceModal from "./StreamingServiceModal";
import AfterSchedulingModal from "./AfterSchedulingModal";
import HomeOnScroll from "./HomeOnScroll";

// PUBLIC_INTERFACE
// Full integration Home page exposing all entry-points (profile states, modals, dashboard, flows)
export default function Home({ onOpenSignUp }) {
  // State for all modal/screen entry-points according to all requirement markdowns
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileScheduled, setShowProfileScheduled] = useState(false);
  const [showHomeOnScroll, setShowHomeOnScroll] = useState(false);

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showStreamingModal, setShowStreamingModal] = useState(false);
  const [showAfterScheduling, setShowAfterScheduling] = useState(false);

  // Party details for after scheduling/profile after scheduling
  const [partyDetails, setPartyDetails] = useState({
    title: "Barbie (2023)",
    date: "May 4, 2024",
    time: "8:00pm",
    image: null,
    service: undefined
  });

  // Modal/modal-stack flows
  const beginScheduleFlow = () => setShowScheduleModal(true);

  const handleScheduleComplete = (partyInfo) => {
    setShowScheduleModal(false);
    setTimeout(() => setShowStreamingModal(true), 180);
    setPartyDetails(p => ({ ...p, ...partyInfo }));
  };
  const handleStreamingServiceSubmit = (service) => {
    setShowStreamingModal(false);
    setTimeout(() => setShowAfterScheduling(true), 180);
    setPartyDetails(p => ({ ...p, service }));
  };
  const handleAfterSchedulingDone = () => {
    setShowAfterScheduling(false);
    setTimeout(() => setShowProfileScheduled(true), 180);
  };

  // Entrypoint controls for Auth
  const openSignUpModal = () => setShowCreate(true);
  const openLoginModal = () => setShowLogin(true);

  // Entrypoint flows for dashboard/profile/scheduled state (per design)
  const openProfilePage = () => setShowProfile(true);
  const openProfileAfterSchedulingPage = () => setShowProfileScheduled(true);

  // Entry to alternate Home page with scrolled-header (per design notes)
  const openHomeOnScroll = () => setShowHomeOnScroll(true);

  // Stack modals/screens: each is overlaid, modal stacking respected, and all flows surfaced
  if (showLogin)
    return (
      <>
        <Home onOpenSignUp={openSignUpModal} />
        <PostLoginModal
          open={showLogin}
          onClose={() => setShowLogin(false)}
          onSwitchSignUp={openSignUpModal}
        />
      </>
    );

  if (showCreate)
    return (
      <>
        <Home onOpenSignUp={openSignUpModal} />
        <CreateAccountModal
          open={showCreate}
          onClose={() => setShowCreate(false)}
          onSwitchLogin={openLoginModal}
        />
      </>
    );

  // Scheduling + streaming service + after scheduling modal/stacked
  if (showScheduleModal)
    return (
      <>
        <AccountProfile onScheduleWatchParty={beginScheduleFlow} />
        <ScheduleWatchPartyModal
          open={showScheduleModal}
          onClose={() => setShowScheduleModal(false)}
          onComplete={handleScheduleComplete}
        />
      </>
    );

  if (showStreamingModal)
    return (
      <>
        <AccountProfile onScheduleWatchParty={beginScheduleFlow} />
        <StreamingServiceModal
          open={showStreamingModal}
          onClose={() => setShowStreamingModal(false)}
          onSubmit={handleStreamingServiceSubmit}
        />
      </>
    );

  if (showAfterScheduling)
    return (
      <>
        <AccountProfile onScheduleWatchParty={beginScheduleFlow} />
        <AfterSchedulingModal
          open={showAfterScheduling}
          onClose={handleAfterSchedulingDone}
          onEdit={() => {
            setShowAfterScheduling(false);
            setTimeout(() => setShowScheduleModal(true), 180);
          }}
          party={partyDetails}
        />
      </>
    );

  if (showProfileScheduled)
    return (
      <ProfileAfterScheduling
        party={partyDetails}
        onEditParty={beginScheduleFlow}
        onShowSchedule={beginScheduleFlow}
      />
    );

  if (showProfile)
    return (
      <AccountProfile onScheduleWatchParty={beginScheduleFlow} />
    );

  // Show the "on scroll" Home/Promo as separate route/modal overlay, per design
  if (showHomeOnScroll)
    return (
      <HomeOnScroll onOpenSignUp={openSignUpModal} />
    );

  // Default: Surface all flows and navigation links, per design audit
  return (
    <>
      {/* 1. Modal stack – make ALL flows available to open, NO missing modal/route */}
      {/* Main Home page shell */}
      <div className="home-bg">
        {/* NAVIGATION BAR (left logo, all required nav links, CTA, states as per all design specs) */}
        <nav className="scener-navbar">
          <div className="nav-left">
            <span aria-label="Scener logo" className="nav-brand" tabIndex={0}>
              <span style={{ fontWeight: 900, letterSpacing: "1px", marginRight: 7, fontSize: "1.7rem" }}>●</span>
              scener
            </span>
          </div>
          <div className="nav-links">
            <a href="#premium">Premium</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            {/* Design-specified/journey links */}
            <a href="#profile"
              onClick={e => { e.preventDefault(); openProfilePage(); }}>
              Profile
            </a>
            <a href="#dashboard"
              onClick={e => { e.preventDefault(); openProfileAfterSchedulingPage(); }}>
              Dashboard
            </a>
            {/* On-scroll Alt Home */}
            <a href="#premium-banner"
              onClick={e => { e.preventDefault(); openHomeOnScroll(); }}>
              Premium Banner
            </a>
          </div>
          <div className="nav-right">
            {/* CTA: Schedule, Sign In, Sign Up */}
            <Button
              className="cta-btn"
              variant="cta"
              aria-label="Schedule a Watch Party"
              tabIndex={0}
              style={{ marginRight: 18 }}
              onClick={beginScheduleFlow}
            >
              Schedule a Watch Party
            </Button>
            <Button
              className="cta-btn"
              variant="secondary"
              style={{ marginRight: 16 }}
              onClick={openLoginModal}
            >
              Sign In
            </Button>
            <Button
              className="cta-btn"
              variant="cta"
              onClick={onOpenSignUp || openSignUpModal}
            >
              Sign Up
            </Button>
          </div>
        </nav>

        {/* HERO/Main Section - Center UI */}
        <main className="main-hero-section">
          <div className="hero-left">
            <div className="laptop-mockup" aria-label="Laptop mockup - Scener watch party UI">
              <div className="laptop-frame">
                <div className="media-topbar" />
                <div className="screen-area">
                  {/* Video scene area */}
                  <section className="video-content">
                    <div className="video-thumbnail">
                      <span className="play-icon" aria-label="Play">&#9658;</span>
                    </div>
                    <div className="media-controls">
                      <div className="progress-bar">
                        <div className="progress" style={{ width: "62%" }} />
                      </div>
                      <div className="control-buttons">
                        <span className="ctrl" aria-label="Play">&#9658;</span>
                        <span className="ctrl" aria-label="Pause">&#9208;</span>
                        <span className="ctrl" aria-label="Volume">&#128266;</span>
                      </div>
                    </div>
                  </section>
                  {/* Chat sidebar */}
                  <aside className="chat-sidebar">
                    <span className="chat-title">Chat</span>
                    <div className="chat-bubble me">Let’s watch something together!</div>
                    <div className="chat-bubble">Me too!</div>
                    <div className="chat-users">
                      <span className="avatar" title="Anna">A</span>
                      <span className="avatar" title="Kai">K</span>
                      <span className="avatar" title="You">U</span>
                    </div>
                  </aside>
                </div>
                <div className="laptop-base"></div>
              </div>
            </div>
          </div>
          {/* HERO right section with all primary CTAs + routes */}
          <div className="hero-right">
            <div className="hero-headline">
              Virtual watch parties, made <span style={{ color: "var(--button-cta)" }}>easy</span>
            </div>
            <div className="hero-subheadline">
              Sync your favorite shows with friends near and far!
            </div>
            <div className="hero-description">
              Scener lets you host, join, and chat in perfectly synced streaming parties.<br />
              Enjoy TV, movies, and more—together, with no hassle.
            </div>
            {/* CTA row - all core flows per audit */}
            <div className="hero-button-row">
              <Button
                className="cta-btn"
                variant="cta"
                style={{ minWidth: 142 }}
                onClick={beginScheduleFlow}
              >
                Schedule a Watch Party
              </Button>
              <Button
                className="cta-btn secondary"
                variant="secondary"
                style={{ marginLeft: 0, minWidth: 137 }}
                onClick={openProfilePage}
              >
                My Profile
              </Button>
              <Button
                className="cta-btn"
                variant="cta"
                style={{ minWidth: 137 }}
                onClick={openProfileAfterSchedulingPage}
              >
                Dashboard
              </Button>
              <Button
                className="cta-btn"
                variant="secondary"
                style={{ minWidth: 152, marginLeft: 10 }}
                onClick={openHomeOnScroll}
              >
                Premium Benefits
              </Button>
            </div>
            <div style={{ marginTop: 12 }}>
              <Button
                variant="secondary"
                style={{ marginRight: 10 }}
                onClick={openLoginModal}
              >
                Sign In
              </Button>
              <Button
                variant="cta"
                onClick={onOpenSignUp || openSignUpModal}
              >
                Sign Up
              </Button>
              <Button
                variant="secondary"
                style={{ marginLeft: 10 }}
                onClick={beginScheduleFlow}
              >
                Watch Party Workflow
              </Button>
            </div>
          </div>
        </main>

        {/* Footer logo bar */}
        <footer className="logo-footer" aria-label="Supported streaming services">
          <div className="logo-footer-inner">
            {/* SVG or img for actual brand logos; fallback text for demo */}
            <div className="footer-logo-item" aria-label="Netflix logo">
              <svg width="68" height="27"><rect width="68" height="27" fill="var(--logo-gray)" rx="7" /><text x="15" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#fff" opacity="0.78">Netflix</text></svg>
            </div>
            <div className="footer-logo-item" aria-label="Disney+ logo">
              <svg width="68" height="27"><rect width="68" height="27" fill="var(--logo-gray)" rx="7" /><text x="11" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#fff" opacity="0.78">Disney+</text></svg>
            </div>
            <div className="footer-logo-item" aria-label="Hulu logo">
              <svg width="59" height="27"><rect width="59" height="27" fill="var(--logo-gray)" rx="7" /><text x="9" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#fff" opacity="0.78">Hulu</text></svg>
            </div>
            <div className="footer-logo-item" aria-label="HBO logo">
              <svg width="49" height="27"><rect width="49" height="27" fill="var(--logo-gray)" rx="7" /><text x="6" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="#fff" opacity="0.78">HBO</text></svg>
            </div>
            <div className="footer-logo-item" aria-label="Prime Video logo">
              <svg width="74" height="27"><rect width="74" height="27" fill="var(--logo-gray)" rx="7" /><text x="7" y="19" fontFamily="sans-serif" fontWeight="bold" fontSize="13" fill="#fff" opacity="0.78">Prime Video</text></svg>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
