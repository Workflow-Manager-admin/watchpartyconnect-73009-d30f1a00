import React from "react";
import "./Home.css";

// PUBLIC_INTERFACE
export default function Home({ onOpenSignUp }) {
  // The main Home page as described in home_screen_design_notes.md

  return (
    <div className="home-bg">
      {/* NAV: Scener brand + nav links + CTA */}
      <nav className="scener-navbar">
        <div className="nav-left">
          {/* Logo SVG or fallback text */}
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
          <button
            className="cta-btn"
            onClick={onOpenSignUp}
            aria-label="Get Started"
            tabIndex={0}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* MAIN/HERO SECTION */}
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
        {/* Hero right: Headline, description, CTAs */}
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
            <button className="cta-btn" onClick={onOpenSignUp}>Get Started</button>
            <button className="cta-btn secondary" style={{ marginLeft: 0 }}>Learn More</button>
          </div>
        </div>
      </main>
      {/* LOGO/BRAND FOOTER STRIP */}
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
        </div>
      </footer>
    </div>
  );
}
