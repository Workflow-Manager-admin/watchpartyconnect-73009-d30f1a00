import React, { useState, useEffect } from "react";
import "./App.css";

// Inline SVG logo (scener brand icon); replace with image if available.
const ScenerLogo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 40 40"
    fill="none"
    aria-label="Scener logo"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 10 }}
  >
    <circle cx="20" cy="20" r="20" fill="#e636ea" />
    <ellipse
      cx="20"
      cy="20"
      rx="13"
      ry="13"
      fill="#865fff"
      opacity="0.6"
    />
    <ellipse
      cx="20"
      cy="20"
      rx="8"
      ry="8"
      fill="white"
      opacity="0.7"
    />
  </svg>
);

// PUBLIC_INTERFACE
function App() {
  // Theme toggle (OPTIONAL, not visible in final design but kept for dev/demo)
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "dark");
  }, [theme]);

  // Logos for footer; normally these would be actual SVG or PNG images
  const logoData = [
    { name: "Netflix", svg: (<svg height="30" width="77" viewBox="0 0 77 30" aria-label="Netflix logo"><rect width="77" height="30" fill="none"/><text x="0" y="24" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="28">Netflix</text></svg>) },
    { name: "Disney+", svg: (<svg height="30" width="70" viewBox="0 0 70 30" aria-label="Disney+ logo"><rect width="70" height="30" fill="none"/><text x="0" y="25" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="22">Disney+</text></svg>) },
    { name: "Hulu", svg: (<svg height="30" width="55" viewBox="0 0 55 30" aria-label="Hulu logo"><rect width="55" height="30" fill="none"/><text x="0" y="24" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="28">Hulu</text></svg>) },
    { name: "Prime", svg: (<svg height="30" width="63" viewBox="0 0 63 30" aria-label="Prime Video logo"><rect width="63" height="30" fill="none"/><text x="0" y="24" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="20">Prime</text></svg>) },
    { name: "HBO Max", svg: (<svg height="30" width="78" viewBox="0 0 78 30" aria-label="HBO Max logo"><rect width="78" height="30" fill="none"/><text x="0" y="24" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="19">HBO Max</text></svg>) },
    { name: "Apple TV", svg: (<svg height="30" width="82" viewBox="0 0 82 30" aria-label="Apple TV logo"><rect width="82" height="30" fill="none"/><text x="0" y="24" fill="#8c8ca0" fontFamily="Arial,Helvetica,sans-serif" fontWeight="bold" fontSize="20">Apple TV</text></svg>) }
  ];

  // PUBLIC_INTERFACE
  const handleNavClick = (e, target) => {
    e.preventDefault();
    // Add scroll or routing logic here
    alert(`Navigate to ${target}`);
  };

  return (
    <div className="home-bg">
      {/* NAVIGATION HEADER */}
      <nav className="scener-navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-left">
          <ScenerLogo />
          <span className="nav-brand">scener</span>
        </div>
        <div className="nav-links">
          <a href="#premium" onClick={(e) => handleNavClick(e, "premium")}>Premium</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "faq")}>FAQ</a>
        </div>
        <div className="nav-right">
          <button className="cta-btn nav-cta" tabIndex={0}>Get Started</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="main-hero-section">
        <section className="hero-left">
          <div className="laptop-mockup">
            <div className="laptop-frame">
              {/* Screen */}
              <div className="screen-area">
                {/* Simulated scene media */}
                <div className="media-topbar" />
                <div className="video-content">
                  <div className="video-thumbnail">
                    <span className="play-icon">&#9654;</span>
                  </div>
                  <div className="media-controls">
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "45%" }} />
                    </div>
                    <div className="control-buttons">
                      <span className="ctrl">&#9208;</span>
                      <span className="ctrl">&#128266;</span>
                      <span className="ctrl">&#x1F50D;</span>
                    </div>
                  </div>
                </div>
                <div className="chat-sidebar">
                  <div className="chat-title">Chat</div>
                  <div className="chat-bubble me">"This scene's wild!"</div>
                  <div className="chat-bubble">"Who's bringing snacks?"</div>
                  <div className="chat-users">
                    <span className="avatar" title="Alice">A</span>
                    <span className="avatar" title="Bob">B</span>
                    <span className="avatar" title="You">Y</span>
                  </div>
                </div>
              </div>
              {/* Bottom/pad */}
              <div className="laptop-base" />
            </div>
          </div>
        </section>
        <section className="hero-right">
          <h1 className="hero-headline">Watch movies & shows together—wherever you are</h1>
          <div className="hero-subheadline">
            Host a virtual watch party for your friends. Sync, chat, and stream together—just like in person.
          </div>
          <div className="hero-description">
            Scener brings everyone into your living room, no matter the distance. Start a party, invite your crew, and enjoy your favorite streaming services—together.
          </div>
          <div className="hero-button-row">
            <button className="cta-btn">Get Started</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </section>
      </main>

      {/* LOGO FOOTER STRIP */}
      <footer className="logo-footer" aria-label="Supported Services">
        <div className="logo-footer-inner">
          {logoData.map((item) => (
            <div className="footer-logo-item" key={item.name}>
              {item.svg}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
