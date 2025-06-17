// src/components/Article/index.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import "./styles.css";

export default function Article({
  title,
  subtitle,
  date,
  images = [],
  content,
  tags = [],
  imagePosition = "left",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const { t } = useTranslation();

  const articleRef = useRef(null);

  const toggleContent = () => setIsExpanded((prev) => !prev);

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

  const handleImageClick = (index) => {
    setStartIndex(index);
    setModalOpen(true);
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, handleKeyDown]);

  return (
    <>
      <article
        ref={articleRef}
        className={`article layout-${imagePosition} ${
          isVisible ? "show" : "hidden"
        }`}
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
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="article-image"
                    onClick={() => handleImageClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="article-content-wrapper">
          <header className="article-header">
            <h1 className="article-title">{title || t("Article.Title")}</h1>
            {subtitle && <p className="article-subtitle">{subtitle}</p>}
            <div className="article-meta">{date || t("Article.Date")}</div>
          </header>

          <section
            className={`article-content ${!isExpanded ? "collapsed" : ""}`}
          >
            {content}
          </section>

          <button
            className="article-read-more"
            onClick={toggleContent}
            aria-expanded={isExpanded}
          >
            {isExpanded ? t("Article.SeeLess") : t("Article.SeeMore")}
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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-carousel" onClick={(e) => e.stopPropagation()}>
            <Swiper
              initialSlide={startIndex}
              modules={[Navigation, Pagination, Keyboard]}
              pagination={{ clickable: true }}
              navigation
              keyboard={{ enabled: true }}
              loop
              className="swiper-fullscreen"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="modal-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
