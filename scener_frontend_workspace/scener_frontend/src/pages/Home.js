import React, { useState, useEffect } from "react";
import "./Home.css";
import Button from "../components/Button";
import AccountProfile from "./AccountProfile";
import ProfileAfterScheduling from "./ProfileAfterScheduling";
import PostLoginModal from "./PostLoginModal";
import CreateAccountModal from "./CreateAccountModal";
import ScheduleWatchPartyModal from "./ScheduleWatchPartyModal";
import StreamingServiceModal from "./StreamingServiceModal";
import AfterSchedulingModal from "./AfterSchedulingModal";

// Pixel-perfect homepage: switches header/banner/conent based on scroll position
// Matches design for both default Home and "on scroll" premium state

// PUBLIC_INTERFACE
/**
 * Home page: pixel-perfect, scroll-animated. Header, banner, cards adjust per design notes.
 */
export default function Home({ onOpenSignUp }) {
  // Modal/modal-state flows from previous logic
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileScheduled, setShowProfileScheduled] = useState(false);

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

  // Track scroll state for header/banner swap (true = scrolled for "on scroll" style)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Decide scroll threshold for triggering premium header - ~64px nav + 20px buffer
    const onScroll = () => {
      const offset = window.scrollY || window.pageYOffset || 0;
      setScrolled(offset > 110); // banner becomes sticky 100px+ per design rhythm
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Entrypoint controls
  const openSignUpModal = () => setShowCreate(true);
  const openLoginModal = () => setShowLogin(true);
  const openProfilePage = () => setShowProfile(true);
  const openProfileAfterSchedulingPage = () => setShowProfileScheduled(true);

  // Overlay flows/modal displays
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

  // ----- MAIN PAGE RENDER -----
  // Switching header/banner/cards based on scroll

  // HEADER & NAV: both designs unified here
  function renderHeader() {
    if (scrolled) {
      // On scroll ("premium" header per onScroll design)
      return (
        <nav className="onScroll-header" style={{ boxShadow: "0 2px 20px #19132818"}}>
          <div className="oss-logo-row">
            <span className="oss-logo-icon">●</span>
            <span className="oss-logo-text">scener</span>
          </div>
          <div className="oss-nav-links">
            <a href="#premium">Premium</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#host">Go to Host</a>
          </div>
          <button className="oss-signup-btn" onClick={onOpenSignUp || openSignUpModal}>Sign Up</button>
        </nav>
      );
    }
    // Default home top nav
    return (
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
        </div>
        <div className="nav-right">
          <Button
            className="cta-btn"
            variant="cta"
            aria-label="Get Started"
            tabIndex={0}
            style={{ marginRight: 18 }}
            onClick={beginScheduleFlow}
          >
            Get Started
          </Button>
        </div>
      </nav>
    );
  }

  // BANNER/HERO: conditional based on design state
  function renderBannerOrHero() {
    if (scrolled) {
      // "Premium"/onScroll banner (sticky below nav)
      return (
        <section className="onScroll-banner" style={{ marginTop: 70 }}>
          <div className="oss-banner-left">
            <span className="oss-banner-premium-main">
              scener <span className="oss-premium-gold">PREMIUM</span>
            </span>
          </div>
          <div className="oss-banner-right">
            <div className="oss-feature-list">
              <div className="oss-feature">
                <span className="oss-feature-icon" aria-label="Video chat">🎥</span>
                <span>Video Chat</span>
              </div>
              <div className="oss-feature">
                <span className="oss-feature-icon" aria-label="Audio chat">🎤</span>
                <span>Audio Chat</span>
              </div>
              <div className="oss-feature">
                <span className="oss-feature-icon" aria-label="No ads">🚫</span>
                <span>No Ads</span>
              </div>
            </div>
            <button className="oss-learnmore-btn">Learn More</button>
          </div>
          <div className="oss-accent-shape"></div>
        </section>
      );
    }
    // Default hero section from home_screen_design_notes.md
    return (
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
        {/* HERO right section */}
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
              onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
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
    );
  }

  // CARDS/GRID: onScroll state only (premium promo tiles)
  function renderPremiumCardsRow() {
    return (
      <div className="onScroll-main-content">
        <div className="oss-card-row">
          <div className="oss-card oss-card-left">
            <div className="oss-card-img-dark">
              <span style={{
                color: "#ffd542", fontWeight: "bold", fontSize: 19
              }}>Video Preview</span>
            </div>
          </div>
          <div className="oss-card oss-card-right">
            <div className="oss-card-img-light">
              <span style={{
                color: "#171437", fontWeight: "bold", fontSize: 19
              }}>Scener Widget</span>
            </div>
            <button className="oss-card-btn">Try Now</button>
          </div>
        </div>
      </div>
    );
  }

  // LOGO FOOTER - visual for both states
  function renderLogoFooter() {
    return (
      <footer className={scrolled ? "logo-footer onScroll" : "logo-footer"} aria-label="Supported streaming services">
        <div className="logo-footer-inner">
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
    );
  }

  // Top-level page structure: header is sticky/fixed, rest flows accordingly
  return (
    <div className={scrolled ? "onScroll-bg home-bg" : "home-bg"}>
      {renderHeader()}
      {/* The main home hero or, if scrolled, the premium section/banner */}
      {renderBannerOrHero()}
      {/* If scrolled, show the "onScroll" card grid row below banner */}
      {scrolled && renderPremiumCardsRow()}
      {renderLogoFooter()}
    </div>
  );
}
