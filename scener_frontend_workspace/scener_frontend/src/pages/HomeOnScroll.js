import React from "react";
import "./HomeOnScroll.css";

// PUBLIC_INTERFACE
export default function HomeOnScroll({ onOpenSignUp }) {
  // Header (fixed, dark navy, matches on-scroll design)
  return (
    <div className="onScroll-bg">
      <nav className="onScroll-header">
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
        <button className="oss-signup-btn" onClick={onOpenSignUp}>Sign Up</button>
      </nav>
      {/* Banner */}
      <section className="onScroll-banner">
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
        {/* Geometric/yellow accent shapes */}
        <div className="oss-accent-shape"></div>
      </section>
      <main className="onScroll-main-content">
        <div className="oss-card-row">
          <div className="oss-card oss-card-left">
            {/* Black/dark card with image or video mockup */}
            <div className="oss-card-img-dark">
              <span style={{
                color: "#ffd542", fontWeight: "bold", fontSize: 19
              }}>Video Preview</span>
            </div>
          </div>
          <div className="oss-card oss-card-right">
            {/* Blue/white grid card */}
            <div className="oss-card-img-light">
              <span style={{
                color: "#171437", fontWeight: "bold", fontSize: 19
              }}>Scener Widget</span>
            </div>
            <button className="oss-card-btn">Try Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}
