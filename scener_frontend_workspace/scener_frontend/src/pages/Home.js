import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

/**
 * PUBLIC_INTERFACE
 * Home page:
 * - Renders the homepage as a single long, scrollable view.
 * - Every design section (header, hero/banner, cards, features, details, etc.) is rendered in the correct top-to-bottom order.
 * - Handles any sticky header/banner and modulates their appearance on scroll (transparency/shadow/collapse/logo swap).
 * - Avoids abrupt scroll jumps, glitches, or two-stage scroll (i.e., everything part of one scrollable column).
 * - Transitions for banners/cards are handled with CSS (fade/sticky transitions), not removing/re-adding DOM elements.
 * - No legacy "scroll-to-section" logic; seamless scroll as you move down the page.
 * - Components can be extracted if needed for code clarity.
 * 
 * Props:
 * onOpenSignUp: function to trigger sign up modal (from parent e.g., App.js)
 */

function Home({ onOpenSignUp }) {
  // For sticky header visual changes
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll to trigger header/banner effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Section: Sticky header ---
  // Updates with subtle shadow/fade/shrink based on scroll

  return (
    <div className="home-root">
      <header className={`home-header${scrolled ? " home-header--scrolled" : ""}`}>
        <div className="home-header__content">
          <div className="logo">
            <span role="img" aria-label="logo">🎬</span> Scener
          </div>
          <button className="btn btn-primary" onClick={onOpenSignUp}>Sign Up</button>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="home-hero">
        <div className="home-hero__main">
          <h1 className="home-hero__title">Watch Together,<br />Wherever You Are</h1>
          <p className="home-hero__subtitle">
            Host virtual viewing parties, chat live, and share the experience in real-time. Scener brings the magic of movie night online.
          </p>
          <button className="btn btn-large btn-primary" onClick={onOpenSignUp}>Get Started</button>
        </div>
      </section>

      {/* Feature Cards - 3 in a row */}
      <section className="home-features">
        <div className="home-features__row">
          <div className="feature-card">
            <div className="feature-card__icon">🗓️</div>
            <div className="feature-card__title">Schedule Parties</div>
            <div className="feature-card__desc">Create, schedule, and invite friends to your virtual movie night.</div>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">💬</div>
            <div className="feature-card__title">Live Chat</div>
            <div className="feature-card__desc">Message, react, and share your thoughts with friends as you watch.</div>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🎥</div>
            <div className="feature-card__title">Stream Anywhere</div>
            <div className="feature-card__desc">Supports popular streaming services. Watch together from anywhere!</div>
          </div>
        </div>
      </section>

      {/* Visual Banner/Divider */}
      <section className="home-divider">
        <div className="home-divider__graphic">
          {/* Decorative divider graphic or themed visual */}
        </div>
      </section>

      {/* How it Works - step cards (vertical on mobile, horizontal on desktop) */}
      <section className="home-howitworks">
        <h2 className="howitworks-title">How It Works</h2>
        <div className="howitworks-row">
          <div className="howit-card">
            <div className="howit-card__num">1</div>
            <div className="howit-card__label">Sign Up or Log In</div>
            <div className="howit-card__desc">Create your profile to join or host watch parties.</div>
          </div>
          <div className="howit-card">
            <div className="howit-card__num">2</div>
            <div className="howit-card__label">Schedule a Party</div>
            <div className="howit-card__desc">Pick a showtime, invite friends, choose your streaming service.</div>
          </div>
          <div className="howit-card">
            <div className="howit-card__num">3</div>
            <div className="howit-card__label">Watch & Chat</div>
            <div className="howit-card__desc">Start the party, watch together, chat, and have fun!</div>
          </div>
        </div>
      </section>

      {/* Big banner for engagement */}
      <section className="home-actionbanner">
        <div className="actionbanner-content">
          <h3>Ready to Host Your First Watch Party?</h3>
          <button className="btn btn-large btn-accent" onClick={onOpenSignUp}>Create Free Account</button>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="home-testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-row">
          <div className="testimonial-card">
            <div className="testimonial-card__quote">“Scener keeps my friends connected movie after movie. So much fun.”</div>
            <div className="testimonial-card__user">— Jamie S.</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-card__quote">“My go-to for online parties. Chat, laugh, and cheer together!”</div>
            <div className="testimonial-card__user">— Alex D.</div>
          </div>
        </div>
      </section>

      {/* Supported Services */}
      <section className="home-services">
        <div className="home-services__header">Supported Streaming Services</div>
        <div className="home-services__icons">
          <span className="service-icon">🟦 Netflix</span>
          <span className="service-icon">🟦 Hulu</span>
          <span className="service-icon">🟦 Prime</span>
          <span className="service-icon">🟦 Disney+</span>
        </div>
      </section>

      {/* Final CTA / Footer */}
      <section className="home-footercta">
        <h4>Don’t Miss Out. Host a Watch Party Today!</h4>
        <button className="btn btn-primary" onClick={onOpenSignUp}>Start Now</button>
      </section>
      <footer className="home-footer">
        <div className="home-footer__copyright">
          © {new Date().getFullYear()} Scener – Built for movie nights everywhere.
        </div>
      </footer>
    </div>
  );
}

export default Home;
