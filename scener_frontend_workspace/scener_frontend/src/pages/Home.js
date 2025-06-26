import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

// PUBLIC_INTERFACE
/**
 * Home page as a single, seamless, vertically scrollable page matching
 * 'home' and 'home on scroll' designs. All cards/sections appear in order,
 * transitions and sticky effects map to both design states. No overlays,
 * jumps or abrupt swaps; all content scrolls naturally.
 *
 * @param {function} onOpenSignUp - (optional) Callback to open sign up modal.
 */
function Home({ onOpenSignUp }) {
  // Sticky scroll state for nav, hero, and transitions
  const [stickyNav, setStickyNav] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [stickyAltHero, setStickyAltHero] = useState(false);
  const bannerRef = useRef();
  const altBannerRef = useRef();
  // For accessibility: allow focusing to nav links/buttons if needed

  useEffect(() => {
    function handleScroll() {
      // Nav becomes sticky for scroll, HERO fades, sticky alt-hero appears
      if (bannerRef.current && altBannerRef.current) {
        const bannerRect = bannerRef.current.getBoundingClientRect();
        const altBannerRect = altBannerRef.current.getBoundingClientRect();
        setStickyNav(window.scrollY > 38);
        setShowBanner(bannerRect.bottom > 130);
        setStickyAltHero(altBannerRect.top < 80); // Adjust per design
      } else {
        // Fallback for minimal broken ref logic
        setStickyNav(window.scrollY > 38);
        setShowBanner(window.scrollY < 320);
        setStickyAltHero(window.scrollY > 280);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-long-scroll">
      {/* --- Sticky NAV HEADER (remains visible at top) --- */}
      <header className={`home-sticky-header${stickyNav ? " scrolled" : ""}`}>
        <div className="logo-title">
          <img src="/logo192.png" alt="Scener" className="logo-sm" />
          <span className="brand-name">scener</span>
        </div>
        <nav className="top-nav">
          <a href="#premium">Premium</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#host" tabIndex={0}>Go to Host</a>
          <button className="btn-outline" onClick={onOpenSignUp}>Sign Up</button>
        </nav>
      </header>
      {/* --- SCROLL HERO BANNER (with gradients, shapes, sticky alt) --- */}
      <section
        className={`home-hero-section${!showBanner ? " faded" : ""}`}
        ref={bannerRef}
        aria-label="Hero Banner"
      >
        <div className="hero-content">
          <h1>
            <span style={{ color: "#fff" }}>scener</span>{" "}
            <span style={{ color: "#ffd542", fontWeight: 900 }}>PREMIUM</span>
          </h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 20, gap: 76 }}>
            <ul style={{
              listStyle: "none", margin: 0, padding: 0,
              display: "flex", flexDirection: "column", gap: "19px"
            }}>
              <li style={{ display: "flex", alignItems: "center", color: "#ffd542", fontWeight: 600 }}>
                <span style={{ marginRight: 14 }}>{videoChatIcon()}</span> Video Chat
              </li>
              <li style={{ display: "flex", alignItems: "center", color: "#ffd542", fontWeight: 600 }}>
                <span style={{ marginRight: 14 }}>{audioChatIcon()}</span> Audio Chat
              </li>
              <li style={{ display: "flex", alignItems: "center", color: "#ffd542", fontWeight: 600 }}>
                <span style={{ marginRight: 14 }}>{noAdsIcon()}</span> No Ads
              </li>
            </ul>
            <button
              className="btn-primary hero-cta"
              style={{
                background: "#ffd542",
                color: "#202053",
                fontWeight: 800,
                borderRadius: 8,
                padding: "13px 38px",
                marginLeft: 44,
                boxShadow: "0 3.5px 13px #ffd54244"
              }}
              onClick={onOpenSignUp}
            >
              LEARN MORE
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              right: "30px",
              top: "16px",
              zIndex: 2,
              width: 95,
              height: 95,
              transform: "rotate(-19deg)",
              pointerEvents: "none"
            }}
            aria-hidden
          >
            {bannerAccentShape()}
          </div>
        </div>
        <div className="hero-image">
          <div
            style={{
              width: 260, height: 142, background: "#22203a",
              borderRadius: 18, boxShadow: "0 5px 20px rgba(67,63,92,0.13)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginRight: -25
            }}
          >
            {leftCardMockup()}
          </div>
          <div
            style={{
              width: 260, height: 142, background: "#fff",
              borderRadius: 18, boxShadow: "0 5px 20px rgba(67,63,92,0.16)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginLeft: 27
            }}
          >
            {rightCardMockup()}
          </div>
        </div>
      </section>
      {/* ---- ALT STICKY HERO/CTA (gold/pink accent, prominent, sticky) ---- */}
      <section
        ref={altBannerRef}
        className={`alt-hero-banner${stickyAltHero ? " show" : ""}`}
        aria-label="Sticky Hero CTA"
      >
        <div className="alt-hero-sticky">
          <h2>
            <span style={{ color: "#fff" }}>Unlock </span>
            <span style={{ color: "#ffd542" }}>exclusive features</span>{" "}
            <span style={{ color: "#fff", fontWeight: 700 }}>with</span>
            <span className="gradient" style={{ fontWeight: 900 }}> Scener PREMIUM</span>
          </h2>
          <button
            className="btn-primary hero-cta"
            style={{
              background: "#e100ff",
              color: "#fff",
              fontWeight: 800,
              padding: "13px 42px",
              borderRadius: 28,
              boxShadow: "0 2px 16px #e100ff55"
            }}
            onClick={onOpenSignUp}
          >
            Sign Up
          </button>
        </div>
      </section>
      {/* --- HOW IT WORKS --- */}
      <section id="howitworks" className="steps-section">
        <h3 style={{ color: "#ffd542" }}>How It&nbsp;Works</h3>
        <div className="steps-row">
          <div className="step-card">
            <span className="step-number" style={{ background: "#e100ff" }}>1</span>
            <strong>Sign up or log in</strong>
            <p>Create your free account to get started.</p>
          </div>
          <div className="step-card">
            <span className="step-number" style={{ background: "#ffd542", color: "#181537" }}>2</span>
            <strong>Create a party</strong>
            <p>Select a movie, pick a date and invite friends.</p>
          </div>
          <div className="step-card">
            <span className="step-number" style={{ background: "#6d42c7" }}>3</span>
            <strong>Watch &amp; chat</strong>
            <p>Sync playback and participate together live.</p>
          </div>
        </div>
      </section>
      {/* --- KEY FEATURES GRID --- */}
      <section className="feature-grid-section">
        <h3 style={{ color: "#ffd542" }}>Why Scener?</h3>
        <div className="feature-grid">
          <div className="feature-card" style={{ background: "#22203a", color: "#fff" }}>
            <span style={{ fontSize: 38, marginRight: 19, color: "#ffd542" }}>{syncIcon()}</span>
            <div>
              <strong>Synchronized viewing</strong>
              <p>Everyone’s video stays perfectly in sync, no extra apps needed.</p>
            </div>
          </div>
          <div className="feature-card" style={{ background: "#22203a", color: "#fff" }}>
            <span style={{ fontSize: 38, marginRight: 19, color: "#ffd542" }}>{emojiIcon()}</span>
            <div>
              <strong>Group chat &amp; reactions</strong>
              <p>Text &amp; emoji chat overlays appear live during the movie.</p>
            </div>
          </div>
          <div className="feature-card" style={{ background: "#22203a", color: "#fff" }}>
            <span style={{ fontSize: 38, marginRight: 19, color: "#ffd542" }}>{inviteIcon()}</span>
            <div>
              <strong>Easy party invites</strong>
              <p>Share your watch party link with one click, instantly.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --- UPCOMING PARTIES --- */}
      <section id="scheduled" className="scheduled-section">
        <h3 style={{ color: "#ffd542" }}>Your Upcoming Parties</h3>
        <div className="party-row">
          <div className="party-card" style={{ background: "#22203a", color: "#fff" }}>
            <div className="party-thumb" style={{ background: "#16134A" }}>{movieCardThumb()}</div>
            <div className="party-info">
              <span className="party-title" style={{ color: "#ffd542" }}>Barbie (2023)</span>
              <span className="party-date" style={{ color: "#e0e7fd" }}>Sat, May 4–8:00pm</span>
              <span className="party-peers">You + 5 friends</span>
            </div>
            <button className="btn-secondary" style={{
              border: "2.2px solid #ffd542",
              color: "#ffd542",
              background: "#18153a"
            }}>View</button>
          </div>
          <div className="party-card" style={{ background: "#22203a", color: "#fff" }}>
            <div className="party-thumb" style={{ background: "#fffdf3" }}>{movieCardThumbAlt()}</div>
            <div className="party-info">
              <span className="party-title" style={{ color: "#ffd542" }}>Nimona</span>
              <span className="party-date" style={{ color: "#e0e7fd" }}>Tonight, 7:30pm</span>
              <span className="party-peers">You + 4 friends</span>
            </div>
            <button className="btn-secondary" style={{
              border: "2.2px solid #ffde86",
              color: "#ffd542",
              background: "#18153a"
            }}>View</button>
          </div>
        </div>
        <button
          className="btn-primary wide schedule-cta"
          style={{
            background: "#e100ff",
            color: "#fff",
            borderRadius: 26,
            fontWeight: 700,
            marginTop: 29
          }}
          onClick={onOpenSignUp}
        >
          Schedule New Party
        </button>
      </section>
      {/* --- SOCIAL PROOF --- */}
      <section className="social-proof-section" style={{ marginTop: 88 }}>
        <h3 style={{ color: "#ffd542" }}>What Watch Parties Say</h3>
        <div className="testimonial-row">
          <figure>
            <blockquote>
              &ldquo;The next best thing to being in the same room. Sync is perfect!&rdquo;
            </blockquote>
            <figcaption>
              <span style={{ color: "#ffd542" }}>– Jamie, Seattle</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              &ldquo;We watched every Sunday during college. Feels like we never left.&rdquo;
            </blockquote>
            <figcaption>
              <span style={{ color: "#ffd542" }}>– Priya, Austin</span>
            </figcaption>
          </figure>
          <figure>
            <blockquote>
              &ldquo;My long-distance partner and I look forward to movie night every week.&rdquo;
            </blockquote>
            <figcaption>
              <span style={{ color: "#ffd542" }}>– Marcus, Boston</span>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* --- FINAL CTA FOOTER --- */}
      <footer className={`footer-cta${stickyAltHero ? " visible" : ""}`}>
        <div>
          <h3>
            Ready for your <span className="gradient" style={{ color: "#ffd542" }}>next watch party?</span>
          </h3>
          <button
            className="btn-primary"
            style={{
              background: "#e100ff",
              color: "#fff",
              borderRadius: 21,
              marginLeft: 22,
              fontWeight: 800,
              boxShadow: "0 2px 9px #e100ff44",
              padding: "14px 43px"
            }}
            onClick={onOpenSignUp}
          >
            Get Started Free
          </button>
        </div>
      </footer>
      <div className="end-space" />
    </div>
  );
}

export default Home;

// -------- ICON/SHAPE MOCKUPS --------
function videoChatIcon() {
  // Simple chat bubble+video glyph
  return (
    <svg width="26" height="26" aria-hidden>
      <ellipse cx="13" cy="13" rx="12" ry="11" fill="#ffd542" opacity="0.17"/>
      <rect x="8" y="9" width="10" height="6" rx="2.2" fill="#ffd542" />
      <polygon points="18,12 22,14 18,16" fill="#ffd542" />
    </svg>
  );
}
function audioChatIcon() {
  return (
    <svg width="26" height="26" aria-hidden>
      <ellipse cx="13" cy="13" rx="12" ry="11" fill="#ffd542" opacity="0.17"/>
      <rect x="11" y="8" width="4" height="8" rx="2" fill="#ffd542" />
      <rect x="9.5" y="16" width="7" height="1.6" rx="0.8" fill="#ffd542"/>
      <path d="M13 20 v-1.2" stroke="#ffd542" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function noAdsIcon() {
  return (
    <svg width="26" height="26" aria-hidden>
      <ellipse cx="13" cy="13" rx="12" ry="11" fill="#ffd542" opacity="0.17"/>
      <rect x="7" y="10" width="12" height="5.2" rx="2.3" fill="#ffd542" />
      <rect x="12" y="10.5" width="2" height="4" fill="#fff" opacity="0.7"/>
      <path d="M12,14 l2,2" stroke="#f00" strokeWidth="2"/>
    </svg>
  );
}
function bannerAccentShape() {
  // Angled geometric/yellow overlay
  return (
    <svg width="95" height="95" viewBox="0 0 95 95" style={{ display: "block" }}>
      <polygon points="14,80 99,-6 107,82" fill="#ffd542" opacity="0.88" />
      <polygon points="6,70 59,-10 60,55" fill="#fff" opacity="0.10" />
    </svg>
  );
}
function leftCardMockup() {
  // Dark video thumb card
  return (
    <svg width="92" height="70" viewBox="0 0 92 70" fill="none">
      <rect width="92" height="70" rx="10" fill="#22203a" />
      <rect x="9" y="13" width="74" height="38" rx="7" fill="#322a56"/>
      <rect x="14" y="18" width="58" height="10" rx="5" fill="#ffd542" opacity="0.14"/>
      <circle cx="22" cy="44" r="5" fill="#ffd542" opacity="0.38"/>
      <circle cx="35" cy="50" r="3" fill="#ffd542" opacity="0.17"/>
    </svg>
  );
}
function rightCardMockup() {
  // White with blue accent/graphic and CTA
  return (
    <div style={{
      width: 80, height: 58, display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <svg width="58" height="32" viewBox="0 0 58 32">
        <rect width="58" height="32" rx="9" fill="#6d42c7" opacity="0.14"/>
        <circle cx="18" cy="16" r="9" fill="#6d42c7" opacity="0.23"/>
        <rect x="35" y="6" width="16" height="8" rx="4" fill="#ffd542" opacity="0.44"/>
        <circle cx="42" cy="16" r="4" fill="#6d42c7" opacity="0.24"/>
      </svg>
      <button
        style={{
          background: "#ffd542",
          color: "#22203a",
          border: "none",
          borderRadius: 14,
          marginTop: 11,
          fontWeight: 600,
          padding: "7px 17px",
          fontSize: 13,
          cursor: "pointer",
          boxShadow: "0 1px 7px #ffd54244"
        }}
        tabIndex={-1}
      >
        Try Premium
      </button>
    </div>
  );
}
// Feature icons for grid
function syncIcon() {
  return (
    <svg width="34" height="34" aria-hidden>
      <circle cx="17" cy="17" r="16" fill="#ffd542" opacity="0.13" />
      <path d="M15 13 l7 -2 v8" stroke="#ffd542" strokeWidth="2" fill="none"/>
      <path d="M9 21 Q12 12 20 21" stroke="#ffd542" strokeWidth="2" fill="none"/>
      <circle cx="17" cy="17" r="7" fill="none" stroke="#ffd542" strokeWidth="3" opacity="0.7"/>
    </svg>
  );
}
function emojiIcon() {
  return (
    <svg width="34" height="34" aria-hidden>
      <circle cx="17" cy="17" r="16" fill="#ffd542" opacity="0.13" />
      <circle cx="17" cy="19" r="8" fill="#ffd542" opacity="0.22"/>
      <ellipse cx="14" cy="18.5" rx="1.3" ry="1.6" fill="#ffd542" />
      <ellipse cx="20" cy="18.5" rx="1.3" ry="1.6" fill="#ffd542" />
      <path d="M14 22 Q17 26 20 22" stroke="#ffd542" strokeWidth="1.4" fill="none"/>
    </svg>
  );
}
function inviteIcon() {
  return (
    <svg width="34" height="34" aria-hidden>
      <circle cx="17" cy="17" r="16" fill="#ffd542" opacity="0.13" />
      <rect x="7" y="13" width="18" height="8" rx="3" fill="#ffd542" />
      <polygon points="28,16 19,20 19,12" fill="#ffd542" />
      <circle cx="17" cy="17" r="6" fill="#fff" opacity="0.08"/>
    </svg>
  );
}
function movieCardThumb() {
  return (
    <svg width="48" height="48" aria-hidden>
      <rect width="48" height="48" rx="11" fill="#ffd542" opacity="0.29"/>
      <rect x="8" y="14" width="32" height="15" rx="5" fill="#fff" opacity="0.12"/>
      <ellipse cx="26" cy="28" rx="7" ry="4" fill="#ffd542" opacity="0.13"/>
    </svg>
  );
}
function movieCardThumbAlt() {
  return (
    <svg width="48" height="48" aria-hidden>
      <rect width="48" height="48" rx="11" fill="#ffd542" opacity="0.19"/>
      <rect x="8" y="13" width="32" height="15" rx="5" fill="#fff" opacity="0.13"/>
      <ellipse cx="19" cy="30" rx="7" ry="4" fill="#ffd542" opacity="0.15"/>
    </svg>
  );
}
