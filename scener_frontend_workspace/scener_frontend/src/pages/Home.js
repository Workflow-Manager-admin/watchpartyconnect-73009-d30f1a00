import React, { useRef, useEffect, useState } from "react";
import "./Home.css";

// PUBLIC_INTERFACE
/**
 * Home page as a single, smooth, long, scrollable React view.
 * Layout matches all sections, cards, sticky headers, and transitions
 * precisely per 'home' and 'home on scroll' design references.
 * No overlay or abrupt logic—guaranteed seamless scroll for all content.
 * @param {function} onOpenSignUp - (optional) Callback to open sign up modal.
 */
/**
 * PUBLIC_INTERFACE
 * Home page as a single, smooth, long, scrollable React view.
 * Renders all sections, cards, banners, CTAs, sticky transitions, etc. as in 'home' and 'home on scroll' designs.
 * No overlays, abrupt switches, or content swapping; everything scrolls seamlessly top-to-bottom.
 * 
 * @param {function} onOpenSignUp - (optional) Callback to open sign up modal.
 */
function Home({ onOpenSignUp }) {
  const [isBannerSticky, setIsBannerSticky] = useState(false);
  const [showAltHero, setShowAltHero] = useState(false);
  const bannerRef = useRef(null);

  // Scroll-triggered UI transitions as per design notes
  useEffect(() => {
    function handleScroll() {
      if (!bannerRef.current) return;
      const { top } = bannerRef.current.getBoundingClientRect();
      // Sticky banner header trigger
      setIsBannerSticky(window.scrollY > 40); // adjust threshold as fits design
      // 'On scroll' hero/CTA switch trigger ~ when user scrolls hero halfway
      setShowAltHero(top <= -120);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll structure maps carefully to visible sections in design images
  // Any smooth fade/slide is CSS-driven (see Home.css transitions)
  return (
    <div className="home-long-scroll">
      {/* Sticky/transitioning top nav/header */}
      <div className={`home-sticky-header${isBannerSticky ? " scrolled" : ""}`}>
        <div className="logo-title">
          <img src="/logo192.png" alt="Scener" className="logo-sm" />
          <span className="brand-name">Scener</span>
        </div>
        <nav className="top-nav">
          <a href="#scheduled" tabIndex={-1}>My Parties</a>
          <a href="#howitworks" tabIndex={-1}>How it Works</a>
          <button className="btn-outline" onClick={onOpenSignUp}>Sign Up</button>
        </nav>
      </div>

      {/* HERO BANNER SECTION */}
      <section className={`home-hero-section${showAltHero ? " faded" : ""}`} ref={bannerRef}>
        <div className="hero-content">
          <h1>
            Movie Nights <br /> <span className="gradient">with Friends, Online</span>
          </h1>
          <p>
            Bring the big screen home. Schedule a watch party, invite<br />
            your friends, and stream together—no matter where you are.
          </p>
          <button className="btn-primary hero-cta" onClick={onOpenSignUp}>Start a Watch Party</button>
        </div>
        <div className="hero-image">
            {/* This might be an illustration or party screenshot */}
            <img
              src="/assets/home-hero-movie-night.png"
              alt="Watch party illustration"
            />
        </div>
      </section>

      {/* ALTERNATE HERO/CTA - fades in on scroll per design */}
      <section className={`alt-hero-banner${showAltHero ? " show" : ""}`}>
        <div className="alt-hero-sticky">
          <h2>
            Plan your <span className="gradient">next premiere</span> with friends
          </h2>
          <button className="btn-primary hero-cta" onClick={onOpenSignUp}>Host a Party</button>
        </div>
      </section>

      {/* "How it works" / Steps row  */}
      <section id="howitworks" className="steps-section">
        <h3>How It&nbsp;Works</h3>
        <div className="steps-row">
          <div className="step-card">
            <span className="step-number">1</span>
            <strong>Sign up or log in</strong>
            <p>Create your free account to get started.</p>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <strong>Create a party</strong>
            <p>Select a movie, date &amp; invite friends.</p>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <strong>Watch &amp; chat</strong>
            <p>Sync playback &amp; participate together.</p>
          </div>
        </div>
      </section>

      {/* Feature highlight grid / "Why Scener?" */}
      <section className="feature-grid-section">
        <h3>Why Scener?</h3>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="/assets/feature-sync.svg" alt="Sync" />
            <div>
              <strong>Synchronized viewing</strong>
              <p>Everyone’s video stays perfectly in sync, no extra apps needed.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src="/assets/feature-chat.svg" alt="Chat" />
            <div>
              <strong>Group chat &amp; reactions</strong>
              <p>Text &amp; emoji chat overlays during the movie.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src="/assets/feature-invite.svg" alt="Invite" />
            <div>
              <strong>Easy party invites</strong>
              <p>Share your watch party link instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming scheduled parties (sample row, can later connect to real data) */}
      <section id="scheduled" className="scheduled-section">
        <h3>Your Upcoming Parties</h3>
        <div className="party-row">
          <div className="party-card dim">
            <div className="party-thumb" style={{ background: "#f2d4dd" }} />
            <div className="party-info">
              <span className="party-title">Nimona</span>
              <span className="party-date">Tonight, 7:30pm</span>
              <span className="party-peers">You + 4 friends</span>
            </div>
            <button className="btn-secondary">View</button>
          </div>
          <div className="party-card">
            <div className="party-thumb" style={{ background: "#ebe1f7" }} />
            <div className="party-info">
              <span className="party-title">Barbie (2023)</span>
              <span className="party-date">May 4, 8:00pm</span>
              <span className="party-peers">You + 7 friends</span>
            </div>
            <button className="btn-secondary">View</button>
          </div>
          <div className="party-card dim">
            <div className="party-thumb" style={{ background: "#eaebf7" }} />
            <div className="party-info">
              <span className="party-title">Across the Spider-Verse</span>
              <span className="party-date">May 11, 6:00pm</span>
              <span className="party-peers">You + 2 friends</span>
            </div>
            <button className="btn-secondary">View</button>
          </div>
        </div>
        <button className="btn-primary wide schedule-cta" onClick={onOpenSignUp}>
          Schedule New Party
        </button>
      </section>

      {/* Social proof/testimonials carousel */}
      <section className="social-proof-section">
        <h3>What Watch Parties Say</h3>
        <div className="testimonial-row">
          <figure>
            <blockquote>
              &ldquo;The next best thing to being in the same room. Sync is perfect!&rdquo;
            </blockquote>
            <figcaption>
              <span>– Jamie, Seattle</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              &ldquo;We watched every Sunday during college. Feels like we never left.&rdquo;
            </blockquote>
            <figcaption>
              <span>– Priya, Austin</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              &ldquo;My long-distance partner and I look forward to movie night every week.&rdquo;
            </blockquote>
            <figcaption>
              <span>– Marcus, Boston</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Sticky Final CTA Footer */}
      <footer className={`footer-cta${showAltHero ? " visible" : ""}`}>
        <div>
          <h3>
            Ready for your next <span className="gradient">watch party?</span>
          </h3>
          <button className="btn-primary" onClick={onOpenSignUp}>Get Started Free</button>
        </div>
      </footer>

      <div className="end-space"></div>
    </div>
  );
}

export default Home;
