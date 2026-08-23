import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Breadcrumb */}
      <div className="aboutus-breadcrumb">
        <span>Home</span> <span className="aboutus-breadcrumb-sep">›</span>{" "}
        <span className="aboutus-breadcrumb-active">About Us</span>
      </div>

      {/* Hero */}
      <div className="aboutus-hero">
        <h1>About Us</h1>
        <p>We provide smart real estate solutions, connecting clients with their dream homes</p>
      </div>

      <img
  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
  alt="Team meeting"
  className="aboutus-hero-image"
/>

      {/* Our Vision */}
      <section className="aboutus-vision">
        <h2>Our Vision</h2>
        <div className="aboutus-vision-grid">
          <div className="aboutus-vision-card">
            <div className="aboutus-vision-icon">🤝</div>
            <h3>Creating Lifelong Partnerships</h3>
            <p>Fostering trust and strong relationships for long-term success in real estate.</p>
          </div>
          <div className="aboutus-vision-card">
            <div className="aboutus-vision-icon">🏠</div>
            <h3>Empowering Real Estate Decisions</h3>
            <p>Providing expert insights to help you make confident, informed property choices.</p>
          </div>
          <div className="aboutus-vision-card">
            <div className="aboutus-vision-icon">🚀</div>
            <h3>Innovating For A Better Tomorrow</h3>
            <p>Driving change and sustainable solutions for a brighter, more accessible real estate future.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="aboutus-story">
        <img
  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
  alt="Team handshake"
  className="aboutus-story-image"
/>
        <div className="aboutus-story-text">
          <h2>Our Story</h2>
          <p>
            RealPro is proud to be a trusted leader in real estate, offering
            comprehensive solutions and professional services in the property
            industry. With over 10 years of experience, we continue to grow
            and innovate, upholding a tradition of quality and reliability.
          </p>
          <p>
            At RealPro, we are committed to putting clients first, dedicated
            to helping them find their dream homes or valuable investment
            opportunities. Our team of seasoned experts is always ready to
            share deep market insights and knowledge to provide clients with
            the best options available.
          </p>
          <p>
            RealPro is more than just a real estate company — we are a
            reliable partner, walking with you every step of the way in
            building your home and growing your investments with confidence.
          </p>
          <button className="aboutus-btn">Explore Now</button>
        </div>
      </section>

      {/* Our Mission */}
      <section className="aboutus-mission">
        <div className="aboutus-mission-text">
          <h2>Our Mission</h2>
          <p>
            At RealPro, our mission is to be a trusted partner in every real
            estate journey. We are committed to providing expert guidance
            and optimal solutions to help clients realize their dreams of an
            ideal home or a rewarding investment opportunity.
          </p>
          <p>
            We prioritize our clients at every step and strive to create
            sustainable value for both the community and the real estate
            market. RealPro is not just about building properties — we build
            trust, peace of mind, and a prosperous future for all our
            clients.
          </p>
          <button className="aboutus-btn">Explore Now</button>
        </div>
        <img
  src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg"
  alt="City skyscrapers"
  className="aboutus-mission-image"
/>
      </section>

      {/* Meet The Team */}
      <section className="aboutus-team">
        <h2>Meet The Team</h2>
        <p className="aboutus-team-subtitle">
          Get to know the dedicated professionals behind RealPro — a team of
          experienced experts passionate about guiding you through every step
          of your real estate journey.
        </p>
        <div className="aboutus-team-grid">
          <TeamCard
  img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
  name="Rachel Dan"
  role="CFO - Chief Financial Officer"
  social={["in"]}
/>
<TeamCard
  img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  name="Rachel Dan"
  role="CEO - Chief Executive Officer"
  social={["x", "in"]}
/>
<TeamCard
  img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  name="Rachel Dan"
  role="Sales Director"
  social={["x", "in"]}
/>
        </div>
      </section>
    </div>
  );
}

function TeamCard({ img, name, role, social }) {
  return (
    <div className="aboutus-team-card">
      <img src={img} alt={name} />
      <div className="aboutus-team-info">
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
        <div className="aboutus-team-social">
          {social.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;