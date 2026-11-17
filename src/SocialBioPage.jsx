import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  OFFICIAL_LOGO,
  OFFICIAL_INSTAGRAM,
  OFFICIAL_MAPS,
  OFFICIAL_WEBSITE,
  OFFICIAL_PHONE
} from './data/petsData.js';
import PetReviewGenerator, { OFFICIAL_GOOGLE_REVIEW_URL } from './PetReviewGenerator.jsx';

export default function SocialBioPage() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [showReviewModal, setShowReviewModal] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        return params.get('review') === 'true' || window.location.hash === '#review';
      }
    } catch {}
    return false;
  });

  // Check if URL specifies review generator
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHashOrPop = () => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('review') === 'true' || window.location.hash === '#review') {
          setShowReviewModal(true);
        }
      };
      window.addEventListener('popstate', handleHashOrPop);
      return () => window.removeEventListener('popstate', handleHashOrPop);
    }
  }, []);

  const socialLinks = [
    {
      id: 'google-review',
      isReviewTrigger: true,
      title: 'Google Review',
      action: 'SHARE YOUR EXPERIENCE',
      subtitle: 'Create your Google review with AI',
      accent: '#36e8ff',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-card-svg" aria-hidden="true">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      title: 'Instagram',
      action: 'Follow Us',
      subtitle: 'Daily updates, exotic breeds & new arrivals',
      url: OFFICIAL_INSTAGRAM,
      accent: '#e1306c',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-card-svg" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      action: 'Contact Us',
      subtitle: `Direct chat with us (${OFFICIAL_PHONE})`,
      url: 'https://wa.me/918878002071?text=Hi%20Pet%27s%20Heaven%20Indore%2C%20I%27d%20like%20to%20connect%20with%20you.',
      accent: '#25d366',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-card-svg" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
    {
      id: 'maps',
      title: 'Google Maps',
      action: 'Find Our Store',
      subtitle: 'Store location & navigation in Indore',
      url: OFFICIAL_MAPS,
      accent: '#00e5ff',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-card-svg" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
    },
    {
      id: 'website',
      title: 'Website',
      action: 'Visit Our Website',
      subtitle: 'Browse complete catalog: dogs, birds, small pets & fish',
      url: OFFICIAL_WEBSITE,
      accent: '#38bdf8',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-card-svg" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
    },
  ];

  return (
    <main className="social-page-wrapper">
      {/* Subtle HD pet background image with dark cinematic overlay */}
      <div className="social-bg-layer" aria-hidden="true">
        <img
          src="/assets/pets/cinematic_hero_banner.jpg"
          alt=""
          className="social-bg-image"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <div className="social-bg-overlay" />
      </div>

      <div className="social-center-shell">
        <AnimatePresence mode="wait">
          {showReviewModal ? (
            <motion.div
              key="review-generator"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%' }}
            >
              <PetReviewGenerator onBack={() => setShowReviewModal(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="social-card"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="social-premium-glass-card"
            >
              {/* 1. Official Logo inside clean WHITE background container */}
              <div className="social-logo-white-frame">
                <picture>
                  <source srcSet="/assets/logo/Vibrant Pets Heaven Logo.webp" type="image/webp" />
                  <img
                    src={OFFICIAL_LOGO}
                    alt="Pet's Heaven Indore Logo"
                    className="social-logo-white-img"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              </div>

              {/* 2. Business Heading & Subtitle */}
              <div className="social-hero-header">
                <div className="social-status-pill">
                  <span className="social-status-indicator" />
                  Verified Store · Indore, MP
                </div>
                <h1 className="social-hero-title">PET'S HEAVEN INDORE</h1>
                <p className="social-hero-subtitle">Your Trusted Pet Destination in Indore</p>
              </div>

              {/* 3. Exactly 5 Individual Link Cards (Google Review #1) */}
              <div className="social-link-stack" role="list">
                {socialLinks.map((item) => {
                  if (item.isReviewTrigger) {
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="social-item-card social-review-highlight-card"
                        onClick={() => setShowReviewModal(true)}
                        style={{ '--accent-color': item.accent }}
                      >
                        <div className="social-item-icon-box" style={{ borderColor: item.accent }}>
                          {item.icon}
                        </div>

                        <div className="social-item-text-box">
                          <div className="social-item-top-row">
                            <strong className="social-item-name">{item.title}</strong>
                            <span className="social-item-badge review-sparkle-badge">
                              {item.action}
                            </span>
                          </div>
                          <span className="social-item-desc">{item.subtitle}</span>
                        </div>

                        <div className="social-item-arrow" aria-hidden="true">
                          ✨
                        </div>
                      </button>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      className="social-item-card"
                      href={item.url}
                      target={item.url?.startsWith('http') ? '_blank' : undefined}
                      rel={item.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ '--accent-color': item.accent }}
                    >
                      <div className="social-item-icon-box" style={{ borderColor: item.accent }}>
                        {item.icon}
                      </div>

                      <div className="social-item-text-box">
                        <div className="social-item-top-row">
                          <strong className="social-item-name">{item.title}</strong>
                          <span className="social-item-badge">{item.action}</span>
                        </div>
                        <span className="social-item-desc">{item.subtitle}</span>
                      </div>

                      <div className="social-item-arrow" aria-hidden="true">
                        →
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* 4. Clean Footer */}
              <footer className="social-card-footer">
                <div className="social-footer-meta">
                  <span>Indore, Madhya Pradesh</span>
                  <span>•</span>
                  <a href={OFFICIAL_MAPS} target="_blank" rel="noopener noreferrer">Store Map</a>
                  <span>•</span>
                  <a href="/">Website Home</a>
                </div>
                <p className="social-footer-copy">
                  © {currentYear} Pet's Heaven Indore. All rights reserved.
                </p>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
