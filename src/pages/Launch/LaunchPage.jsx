import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LaunchPage.css";

const interiorImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90";

export default function LaunchPage() {
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const updateHero = () => {
      const progress = Math.min(window.scrollY / 900, 1);
      document.documentElement.style.setProperty("--launch-scroll", progress);
    };
    updateHero();
    window.addEventListener("scroll", updateHero, { passive: true });
    return () => window.removeEventListener("scroll", updateHero);
  }, []);

  return (
    <main className="launch-page">
      <section className="launch-hero">
        <div className="launch-hero__image" style={{ backgroundImage: `url(${interiorImage})` }} />
        <div className="launch-hero__veil" />
        <nav className="launch-nav" aria-label="Launch navigation">
          <Link className="launch-brand" to="/launch">estatery<span>.</span></Link>
          <a href="#waitlist" className="launch-nav__link">Early access</a>
        </nav>
        <div className="launch-hero__content">
          <p className="launch-eyebrow">A better way to find your place</p>
          <h1>Every space has<br /><em>a feeling.</em></h1>
          <p className="launch-hero__copy">Discover homes that look right, feel right, and fit the life you are building.</p>
          <a className="launch-button" href="#waitlist">Get early access <span>→</span></a>
        </div>
        <p className="launch-scroll-note">Scroll to enter <span>↓</span></p>
      </section>

      <section className="launch-intro">
        <p className="launch-eyebrow launch-eyebrow--dark">Not another property portal</p>
        <h2>Home hunting, made<br />more human.</h2>
        <p>Estatery is building a calmer, more considered way to discover spaces—one where beautiful homes, useful details, and trusted people come together naturally.</p>
      </section>

      <section className="launch-features" aria-label="What Estatery offers">
        <article><span>01</span><h3>Curated, not crowded</h3><p>Fewer distractions. More homes you will genuinely want to see.</p></article>
        <article><span>02</span><h3>Details that matter</h3><p>Clear information, helpful context, and no surprises hidden in the fine print.</p></article>
        <article><span>03</span><h3>People you can trust</h3><p>Connect with verified agents and owners when you are ready to take the next step.</p></article>
      </section>

      <section className="launch-preview">
        <div className="launch-preview__copy"><p className="launch-eyebrow launch-eyebrow--dark">Designed around real life</p><h2>Less searching.<br />More belonging.</h2></div>
        <div className="launch-preview__card">
          <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85" alt="Bright, contemporary living room" />
          <div><p>Featured home</p><h3>Quiet confidence, in every corner.</h3><span>Explore the collection →</span></div>
        </div>
      </section>

      <section className="launch-waitlist" id="waitlist">
        <p className="launch-eyebrow">Launching soon</p>
        <h2>Find your next<br /><em>good feeling.</em></h2>
        <p>Be among the first to experience Estatery.</p>
        <form onSubmit={(event) => { event.preventDefault(); setJoined(true); }}>
          <label className="sr-only" htmlFor="launch-email">Email address</label>
          <input id="launch-email" type="email" required placeholder="Your email address" />
          <button type="submit">Join the waitlist <span>→</span></button>
        </form>
        {joined && <p className="launch-success" role="status">You’re on the list. We’ll be in touch.</p>}
      </section>

      <footer className="launch-footer"><span>© {new Date().getFullYear()} Estatery</span><span>Made for the feeling of home.</span></footer>
    </main>
  );
}
