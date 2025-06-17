// src/components/Article/index.jsx
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

export default function Article({
  title,
  subtitle,
  date,
  images = [],
  content,
  tags = [],
  imagePosition = "left", // 'left' ou 'right'
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded((prev) => !prev);

  const articleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (articleRef.current) {
      observer.observe(articleRef.current);
    }

    return () => {
      if (articleRef.current) observer.unobserve(articleRef.current);
    };
  }, []);

  return (
    <article
      ref={articleRef}
      className={`article layout-${imagePosition} ${isVisible ? "show" : "hidden"}`}
    >
      <div className="article-image-wrapper">
        {images.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="article-carousel"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Imagem ${index + 1}`} className="article-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="article-content-wrapper">
        <header className="article-header">
          <h1 className="article-title">{title || "Título indisponível"}</h1>
          {subtitle && <p className="article-subtitle">{subtitle}</p>}
          <div className="article-meta">{date || "Data não informada"}</div>
        </header>

        <section className={`article-content ${!isExpanded ? "collapsed" : ""}`}>
          {content}
        </section>

        <button
          className="article-read-more"
          onClick={toggleContent}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "ver menos" : "ver mais"}
        </button>

        {tags.length > 0 && (
          <footer className="article-tags">
            {tags.map((tag) => (
              <span key={tag} className="article-tag">
                #{tag}
              </span>
            ))}
          </footer>
        )}
      </div>
    </article>
  );
}
