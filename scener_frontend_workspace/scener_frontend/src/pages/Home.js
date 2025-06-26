import React, { useEffect, useRef } from "react";
import "./Home.css";

/**
 * Home Page - Fully scrollable, merged premium and hero design.
 * Renders ALL sections in place with sticky header, banner, card grid, and footer.
 *
 * @param {function} onOpenSignUp - callback to open the sign up modal
 */
function Home({ onOpenSignUp }) {
  // Sticky effect for header (if style needed on scroll)
  const headerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      if (window.scrollY > 18) {
        header.classList.add("sc-sticky");
      } else {
        header.classList.remove("sc-sticky");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-root unified-homepage-bg">
      {/* Sticky Premium Header */}
      <nav className="scener-navbar" ref={headerRef}>
        <div className="sc-nav-logo-row">
          <span className="sc-nav-logo-icon">●</span>
          <span className="sc-nav-logo-text">scener</span>
        </div>
        <div className="sc-nav-links">
          <a href="#premium" className="sc-nav-link">Premium</a>
          <a href="#about" className="sc-nav-link">About</a>
          <a href="#faq" className="sc-nav-link">FAQ</a>
          <a href="#host" className="sc-nav-link">Go to Host</a>
          <button className="sc-nav-signup-btn" onClick={onOpenSignUp}>Sign Up</button>
        </div>
      </nav>

      {/* Banner/Promo (sticky header pushes it down) */}
      <section className="scener-banner" id="premium">
        <div className="scener-banner-left">
          <span className="scener-banner-premium-main">
            scener <span className="scener-premium-gold">PREMIUM</span>
          </span>
        </div>
        <div className="scener-banner-right">
          <div className="scener-banner-feature-list">
            <div className="scener-banner-feature">
              <span className="scener-banner-icon" aria-label="Video chat">🎥</span>
              <span>Video Chat</span>
            </div>
            <div className="scener-banner-feature">
              <span className="scener-banner-icon" aria-label="Audio chat">🎤</span>
              <span>Audio Chat</span>
            </div>
            <div className="scener-banner-feature">
              <span className="scener-banner-icon" aria-label="No ads">🚫</span>
              <span>No Ads</span>
            </div>
          </div>
          <button className="scener-banner-learnmore-btn">Learn More</button>
        </div>
        <div className="scener-banner-accent-shape"></div>
      </section>

      {/* HERO section (merged from original Home) */}
      <section className="scener-hero-section">
        <div className="container scener-hero-content">
          <div className="scener-hero-text">
            <h1>Host Watch Parties, Together</h1>
            <p>
              Schedule and host virtual movie nights. Invite friends, chat, and stream in perfect sync—Scener makes it easy and fun.
            </p>
            <button className="scener-hero-cta" onClick={onOpenSignUp}>Get Started</button>
          </div>
          <div className="scener-hero-img">
            {/* Placeholder for laptop/video illustration */}
            <div className="scener-hero-image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Main card/tile grid (premium, modern cards as in scroll design) */}
      <main className="scener-main-content">
        <div className="scener-card-row">
          {/* Dark video preview card */}
          <div className="scener-card scener-card-left">
            <div className="scener-card-img-dark">
              <span style={{
                color: "#ffd542", fontWeight: "bold", fontSize: 19
              }}>Video Preview</span>
            </div>
          </div>
          {/* Blue/light widget card */}
          <div className="scener-card scener-card-right">
            <div className="scener-card-img-light">
              <span style={{
                color: "#171437", fontWeight: "bold", fontSize: 19
              }}>Scener Widget</span>
            </div>
            <button className="scener-card-btn">Try Now</button>
          </div>
        </div>
      </main>

      {/* Feature three column (from Home original) */}
      <section className="scener-row scener-features-row">
        <div className="container scener-features-row-inner">
          <div className="scener-feature-card scener-movie">
            <div className="scener-feature-icon"></div>
            <div className="scener-feature-title">Sync Movies</div>
            <div className="scener-feature-desc">Watch blockbusters and series in perfect sync.</div>
          </div>
          <div className="scener-feature-card scener-party">
            <div className="scener-feature-icon"></div>
            <div className="scener-feature-title">Party Chat</div>
            <div className="scener-feature-desc">Text and video chat while you watch together.</div>
          </div>
          <div className="scener-feature-card scener-calendar">
            <div className="scener-feature-icon"></div>
            <div className="scener-feature-title">Easy Scheduling</div>
            <div className="scener-feature-desc">Set a time, invite friends, and start the party.</div>
          </div>
        </div>
      </section>

      {/* Discover/trending parties */}
      <section className="scener-row" id="discover">
        <div className="container">
          <h2 className="scener-section-title">Discover Parties</h2>
          <div className="scener-party-list">
            <div className="scener-party-card">
              <div className="scener-party-img scener-img-barbie"></div>
              <div className="scener-party-info">
                <div className="scener-party-title">Barbie Watch Party</div>
                <div className="scener-party-meta">Tonight - 8:00pm</div>
                <div className="scener-party-action">
                  <button className="scener-party-join-btn">Join</button>
                </div>
              </div>
            </div>
            <div className="scener-party-card">
              <div className="scener-party-img scener-img-starwars"></div>
              <div className="scener-party-info">
                <div className="scener-party-title">Star Wars Marathon</div>
                <div className="scener-party-meta">May 8, 6:30pm</div>
                <div className="scener-party-action">
                  <button className="scener-party-join-btn">Join</button>
                </div>
              </div>
            </div>
            <div className="scener-party-card">
              <div className="scener-party-img scener-img-friends"></div>
              <div className="scener-party-info">
                <div className="scener-party-title">Friends - Classic Comedy Night</div>
                <div className="scener-party-meta">Every Friday, 7:00pm</div>
                <div className="scener-party-action">
                  <button className="scener-party-join-btn">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="scener-row scener-how-row" id="how">
        <div className="container">
          <h2 className="scener-section-title">How Scener Works</h2>
          <div className="scener-how-cards">
            <div className="scener-how-card">
              <div className="scener-how-icon scener-account"></div>
              <div className="scener-how-title">Create Account</div>
              <div className="scener-how-desc">Sign up and connect your streaming service.</div>
            </div>
            <div className="scener-how-card">
              <div className="scener-how-icon scener-schedule"></div>
              <div className="scener-how-title">Schedule</div>
              <div className="scener-how-desc">Plan your watch party and invite friends.</div>
            </div>
            <div className="scener-how-card">
              <div className="scener-how-icon scener-enjoy"></div>
              <div className="scener-how-title">Enjoy Together</div>
              <div className="scener-how-desc">Chat and watch in sync from anywhere.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="scener-row scener-cta-row">
        <div className="container scener-cta-inner">
          <div className="scener-cta-text">
            <h2>Ready to host a watch party?</h2>
            <p>Sign up now and bring your crew together for movie night.</p>
          </div>
          <button className="scener-cta-btn" onClick={onOpenSignUp}>Create Your Account</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="scener-row scener-faq-row" id="faq">
        <div className="container">
          <h2 className="scener-section-title">FAQ</h2>
          <div className="scener-faq-list">
            <details className="scener-faq-item">
              <summary>Do I need a subscription?</summary>
              <div className="scener-faq-answer">
                Each viewer needs their own streaming service subscription.
              </div>
            </details>
            <details className="scener-faq-item">
              <summary>Can I use Scener on any device?</summary>
              <div className="scener-faq-answer">
                Yes! Scener works on most browsers, laptops, and tablets.
              </div>
            </details>
            <details className="scener-faq-item">
              <summary>Is my sync perfect?</summary>
              <div className="scener-faq-answer">
                Parties are synced so everyone watches together; a small delay is possible on slower connections.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer/Logo strip */}
      <footer className="scener-footer">
        <div className="container scener-footer-inner">
          <span>© 2024 Scener – Virtual watch parties with friends, everywhere.</span>
          <div className="scener-logo-row">
            {/* Example service logos for visual style */}
            <span className="scener-service-logo" aria-label="Netflix logo">Netflix</span>
            <span className="scener-service-logo" aria-label="Disney+ logo">Disney+</span>
            <span className="scener-service-logo" aria-label="Hulu logo">Hulu</span>
            <span className="scener-service-logo" aria-label="HBO Max logo">HBO Max</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

