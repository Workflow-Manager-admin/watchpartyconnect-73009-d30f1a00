import React from "react";
import "./Home.css";

// PUBLIC_INTERFACE
function Home({ onOpenSignUp }) {
  // Static navigation bar always on top
  return (
    <div className="home-root">
      {/* Navigation Bar (fixed at the top, minimal shadow) */}
      <nav className="home-navbar">
        <div className="navbar-content container">
          <span className="navbar-logo">Scener</span>
          <div className="navbar-links">
            <a href="#discover" className="nav-link">Discover</a>
            <a href="#how" className="nav-link">How it works</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <button className="navbar-btn" onClick={onOpenSignUp}>Sign Up</button>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <main className="home-main">
        {/* Hero/Banner section */}
        <section className="home-hero">
          <div className="container home-hero-content">
            <div className="home-hero-text">
              <h1>Host Watch Parties, Together</h1>
              <p>
                Schedule and host virtual movie nights. Invite friends, chat, and sync streaming—Scener makes it easy and fun.
              </p>
              <button className="hero-cta" onClick={onOpenSignUp}>Get Started</button>
            </div>
            <div className="home-hero-img">
              {/* Image is decorative; replace with real asset or illustration */}
              <div className="hero-image-placeholder"></div>
            </div>
          </div>
        </section>
        {/* Card row: What you can do */}
        <section className="home-row features-row">
          <div className="container features-row-inner">
            <div className="feature-card">
              <div className="feature-icon icon-movie"></div>
              <div className="feature-title">Sync Movies</div>
              <div className="feature-desc">Watch blockbusters and series in perfect sync.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-party"></div>
              <div className="feature-title">Party Chat</div>
              <div className="feature-desc">Text and video chat while you watch together.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon icon-calendar"></div>
              <div className="feature-title">Easy Scheduling</div>
              <div className="feature-desc">Set a time, invite friends, and start the party.</div>
            </div>
          </div>
        </section>
        {/* Discover events & trending */}
        <section className="home-row" id="discover">
          <div className="container">
            <h2 className="section-title">Discover Parties</h2>
            <div className="party-list">
              <div className="party-card">
                <div className="party-img img-barbie"></div>
                <div className="party-info">
                  <div className="party-title">Barbie Watch Party</div>
                  <div className="party-meta">Tonight - 8:00pm</div>
                  <div className="party-action">
                    <button className="party-join-btn">Join</button>
                  </div>
                </div>
              </div>
              <div className="party-card">
                <div className="party-img img-starwars"></div>
                <div className="party-info">
                  <div className="party-title">Star Wars Marathon</div>
                  <div className="party-meta">May 8, 6:30pm</div>
                  <div className="party-action">
                    <button className="party-join-btn">Join</button>
                  </div>
                </div>
              </div>
              <div className="party-card">
                <div className="party-img img-friends"></div>
                <div className="party-info">
                  <div className="party-title">Friends - Classic Comedy Night</div>
                  <div className="party-meta">Every Friday, 7:00pm</div>
                  <div className="party-action">
                    <button className="party-join-btn">Join</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How it works - Step cards */}
        <section className="home-row how-row" id="how">
          <div className="container">
            <h2 className="section-title">How Scener Works</h2>
            <div className="how-cards">
              <div className="how-card">
                <div className="how-icon icon-account"></div>
                <div className="how-title">Create Account</div>
                <div className="how-desc">Sign up and connect your streaming service.</div>
              </div>
              <div className="how-card">
                <div className="how-icon icon-schedule"></div>
                <div className="how-title">Schedule</div>
                <div className="how-desc">Plan your watch party and invite friends.</div>
              </div>
              <div className="how-card">
                <div className="how-icon icon-enjoy"></div>
                <div className="how-title">Enjoy Together</div>
                <div className="how-desc">Chat and watch in sync from anywhere.</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA block */}
        <section className="home-row home-cta-row">
          <div className="container home-cta-inner">
            <div className="home-cta-text">
              <h2>Ready to host a watch party?</h2>
              <p>Sign up now and bring your crew together for movie night.</p>
            </div>
            <button className="home-cta-btn" onClick={onOpenSignUp}>Create Your Account</button>
          </div>
        </section>
        {/* FAQ / Footer */}
        <section className="home-row home-faq-row" id="faq">
          <div className="container">
            <h2 className="section-title">FAQ</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Do I need a subscription?</summary>
                <div className="faq-answer">
                  Each viewer needs their own streaming service subscription.
                </div>
              </details>
              <details className="faq-item">
                <summary>Can I use Scener on any device?</summary>
                <div className="faq-answer">
                  Yes! Scener works on most browsers, laptops, and tablets.
                </div>
              </details>
              <details className="faq-item">
                <summary>Is my sync perfect?</summary>
                <div className="faq-answer">
                  Parties are synced so everyone watches together; a small delay is possible on slower connections.
                </div>
              </details>
            </div>
          </div>
        </section>
        {/* Simple footer */}
        <footer className="home-footer">
          <div className="container footer-inner">
            <span>© 2024 Scener – Virtual watch parties with friends, everywhere.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;

