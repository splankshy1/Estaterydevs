import React from "react";
import "./OurBlog.css";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog-terrace.png",
    title: "Want To Succeed In Real Estate? Focus On These Habits",
    date: "November 10, 2026",
    category: "Technology",
    description:
      "A fairy tale (alternative names include fairytale, fairy story, magic tale, or wonder tale) is a short story that belongs to the folklore genre..",
    link: "/blog/real-estate-habits",
  },
  {
    id: 2,
    image: "/images/blog-terrace.png",
    title: "Want To Succeed In Real Estate? Focus On These Habits",
    date: "November 10, 2026",
    category: "Technology",
    description:
      "A fairy tale (alternative names include fairytale, fairy story, magic tale, or wonder tale) is a short story that belongs to the folklore genre..",
    link: "/blog/real-estate-habits",
  },
  {
    id: 3,
    image: "/images/blog-terrace.png",
    title: "Want To Succeed In Real Estate? Focus On These Habits",
    date: "November 10, 2026",
    category: "Technology",
    description:
      "A fairy tale (alternative names include fairytale, fairy story, magic tale, or wonder tale) is a short story that belongs to the folklore genre..",
    link: "/blog/real-estate-habits",
  },
];

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18M8 14h2M14 14h2M8 17h2" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 6h7l2 2h9v11H3z" />
      <path d="M3 8h18" />
    </svg>
  );
}

export default function OurBlog() {
  return (
    <section className="our-blog-section">
      <div className="our-blog-container">
        {/* Section Heading */}
        <div className="our-blog-heading">
          <span className="our-blog-subtitle">DISCOVER OUR STORY</span>

          <h2 className="our-blog-title">Our Blog</h2>
        </div>

        {/* Blog Cards */}
        <div className="our-blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              {/* Blog Image */}
              <a
                href={post.link}
                className="blog-image-link"
                aria-label={`Read ${post.title}`}
              >
                <img
                  src={post.image}
                  alt="Luxury outdoor terrace of a modern property"
                  className="blog-card-image"
                  loading="lazy"
                />
              </a>

              {/* Blog Content */}
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  <a href={post.link}>{post.title}</a>
                </h3>

                {/* Post Information */}
                <div className="blog-card-meta">
                  <span className="blog-meta-item">
                    <CalendarIcon />
                    {post.date}
                  </span>

                  <span className="blog-meta-item">
                    <FolderIcon />
                    {post.category}
                  </span>
                </div>

                {/* Description */}
                <p className="blog-card-description">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="our-blog-footer">
          <a href="/blog" className="our-blog-view-btn">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
