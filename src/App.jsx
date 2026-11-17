import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SocialBioPage from './SocialBioPage.jsx';
import {
  CATEGORIES,
  PET_PRODUCTS,
  OFFICIAL_LOGO,
  OFFICIAL_PHONE,
  OFFICIAL_WHATSAPP_NUMBER,
  OFFICIAL_INSTAGRAM,
  OFFICIAL_MAPS,
  OFFICIAL_WEBSITE,
  getWhatsAppUrl
} from './data/petsData.js';

function BubbleField() {
  return (
    <div className="bubbles" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}

function Nav() {
  const navLinks = [
    { label: 'Dogs', href: '#dogs' },
    { label: 'Cats', href: '#cats' },
    { label: 'Birds', href: '#birds' },
    { label: 'Hamsters', href: '#hamsters' },
    { label: 'Mice', href: '#mice' },
    { label: 'Fish', href: '#fish' },
    { label: 'Store Location', href: '#store-info' },
  ];

  return (
    <header className="nav-shell">
      <a className="pets-nav-brand" href="#home" aria-label="Pet's Heaven Indore Home">
        <div className="pets-logo-white-card pets-logo-nav-frame">
          <picture>
            <source srcSet="/assets/logo/Vibrant Pets Heaven Logo.webp" type="image/webp" />
            <img
              src={OFFICIAL_LOGO}
              alt="Pet's Heaven Indore Logo"
              className="pets-nav-logo-thumb"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
      </a>

      <nav aria-label="Primary navigation" className="pets-nav-links">
        {navLinks.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-connect-box">
        <a className="social-btn" href="/social">
          Connect With Us
        </a>
      </div>
    </header>
  );
}

function HeroPanel({ onSelectCategory, selectedCategory }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Progressive non-blocking video start after initial frame paint
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(playVideo);
    } else {
      setTimeout(playVideo, 150);
    }
  }, []);

  return (
    <section className="hero-panel" id="home">
      {/* Cinematic Pet-Themed Hero Background */}
      <div className="hero-cinematic-bg" aria-hidden="true">
        <img
          src="/assets/pets/cinematic_hero_banner.jpg"
          alt=""
          className="hero-cinematic-poster"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
        <video
          ref={videoRef}
          className="hero-cinematic-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/assets/pets/cinematic_hero_banner.jpg"
        >
          <source src="/assets/video/pets_cinematic_hero.webm" type="video/webm" />
          <source src="/assets/video/Feeding Time Closeup.mp4" type="video/mp4" />
          <source src="/assets/video/Maintenance Routine.mp4" type="video/mp4" />
        </video>
        <div className="hero-cinematic-overlay" />
        <div className="hero-cinematic-vignette" />
      </div>

      <Nav />
      <BubbleField />

      <div className="hero-copy">
        <div className="pets-hero-logo-box">
          <div className="pets-logo-white-card pets-logo-hero-frame">
            <picture>
              <source srcSet="/assets/logo/Vibrant Pets Heaven Logo.webp" type="image/webp" />
              <img
                src={OFFICIAL_LOGO}
                alt="Pet's Heaven Indore Logo"
                className="pets-hero-logo-img"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>

        <p className="hero-eyebrow">
          Premier Pet Store & Exotic Companions · Indore
        </p>

        <h1 className="hero-main-title">
          PET'S HEAVEN <br className="hero-title-break" /> INDORE
        </h1>

        <span className="hero-subtext">
          Discover verified dog breeds, graceful cat breeds, exotic pet birds, active hamsters, pet mice, and ornamental aquarium fish.
          Browse our complete catalog and connect directly on WhatsApp for live batch availability and expert care advice.
        </span>

        <div className="hero-actions">
          <a href="#catalog" className="hero-btn-primary">
            <span>🐾</span> Explore Pet Catalog
          </a>
          <a
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Pet's Heaven Indore, I'm interested in knowing about available pets and breeds.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-whatsapp"
          >
            <span>💬</span> Enquire on WhatsApp
          </a>
          <a href={OFFICIAL_MAPS} target="_blank" rel="noopener noreferrer" className="hero-btn-maps">
            <span>📍</span> Store Location (Maps)
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: '🐾', title: 'Healthy Companions', subtitle: 'Ethical & active pets' },
    { icon: '💬', title: 'WhatsApp Enquiries', subtitle: '+91 88780 02071' },
    { icon: '📍', title: 'Indore Store', subtitle: 'Visit us in person' },
    { icon: '🩺', title: 'Care Guidance', subtitle: 'Diet & habitat support' },
  ];

  return (
    <section className="trust-strip" aria-label="Pet Store benefits">
      {items.map((item) => (
        <article key={item.title}>
          <span style={{ fontSize: '18px' }}>{item.icon}</span>
          <div>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </div>
        </article>
      ))}
    </section>
  );
}

function CatalogNotice() {
  return (
    <div className="catalog-notice-banner" role="status">
      <span className="catalog-notice-icon">ℹ️</span>
      <div>
        <strong>Catalog Listing Notice:</strong> The pets, birds, and fish shown below represent our general catalog and breed varieties. Stock varies across seasonal batches. Please <strong>Enquire on WhatsApp</strong> for confirmed real-time availability, photos, and adoption details.
      </div>
    </div>
  );
}

function ProductCard({ product, onOpenModal, index = 0 }) {
  const whatsappUrl = getWhatsAppUrl(product.name);
  const isAboveFold = index < 4;

  return (
    <article className="pets-product-card" id={`pet-${product.id}`}>
      <div
        className="pet-card-image-wrap"
        onClick={() => onOpenModal(product)}
        title={`View details for ${product.name}`}
      >
        <span className="pet-cat-tag">{product.categoryLabel}</span>
        <img
          src={product.image}
          alt={product.name}
          loading={isAboveFold ? "eager" : "lazy"}
          decoding={isAboveFold ? "sync" : "async"}
          fetchPriority={isAboveFold ? "high" : "low"}
          onError={(e) => {
            if (product.fallbackImage && e.target.src !== product.fallbackImage) {
              e.target.src = product.fallbackImage;
            }
          }}
        />
      </div>

      <div className="pet-info-content">
        <h4 className="pet-title" onClick={() => onOpenModal(product)}>
          {product.name}
        </h4>

        <p className="pet-tagline">{product.tagline}</p>

        <div className="pet-status-pill">
          <span className="pet-status-dot" />
          <span>Inquire for live batch</span>
        </div>

        <div className="pet-card-actions">
          <a
            className="pet-enquire-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            ENQUIRE ON WHATSAPP
          </a>

          <button
            type="button"
            className="pet-details-btn"
            onClick={() => onOpenModal(product)}
            aria-label={`View ${product.name} details`}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductDetailModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppUrl(product.name);

  return createPortal(
    <div
      className="pets-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="pets-modal-card">
        <button
          type="button"
          className="pets-modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="pets-modal-image-wrap">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              if (product.fallbackImage && e.target.src !== product.fallbackImage) {
                e.target.src = product.fallbackImage;
              }
            }}
          />
        </div>

        <div className="modal-header-meta">
          <span className="modal-cat-badge">{product.categoryLabel}</span>
          <span style={{ fontSize: '12px', color: '#36e8ff' }}>Pet's Heaven Indore</span>
        </div>

        <h3 id="modal-product-title" className="modal-title">
          {product.name}
        </h3>

        <p className="modal-tagline">{product.tagline}</p>

        <p className="modal-desc">{product.description}</p>

        {product.traits && product.traits.length > 0 && (
          <div className="modal-traits-wrap">
            {product.traits.map((trait) => (
              <span key={trait} className="modal-trait-pill">
                ✓ {trait}
              </span>
            ))}
          </div>
        )}

        {product.care && (
          <div className="modal-care-box">
            <strong>Care & Routine Guidance:</strong>
            {product.care}
          </div>
        )}

        <div className="modal-status-callout">
          <span>📦</span>
          <span>{product.status || 'Catalog Listing · Inquire for live batch availability'}</span>
        </div>

        <a
          className="modal-whatsapp-full-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          ENQUIRE ON WHATSAPP (+91 88780 02071)
        </a>
      </div>
    </div>,
    document.body
  );
}

function MainCatalogSection({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('cat') || params.get('category');
      if (cat && CATEGORIES.some((c) => c.id === cat)) return cat;
    } catch {}
    return 'all';
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PET_PRODUCTS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="collection-card" id="catalog" style={{ padding: '24px 20px' }}>
      <div className="section-title" style={{ marginBottom: '14px' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', color: '#fff', margin: 0 }}>
            Pet Store Catalog
          </h2>
          <p style={{ margin: '4px 0 0', color: '#a5c7db', fontSize: '13px' }}>
            Explore verified dog breeds, pet birds, hamsters, mice and aquarium fish
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: '#36e8ff' }}>
            Showing {filteredProducts.length} items
          </span>
        </div>
      </div>

      <CatalogNotice />

      {/* Search Input */}
      <div className="catalog-search-wrap">
        <span className="catalog-search-icon">🔍</span>
        <input
          type="text"
          className="catalog-search-input"
          placeholder="Search breed, bird, hamster or fish (e.g. Golden Retriever, Cockatiel, Betta)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search pet catalog"
        />
      </div>

      {/* Category Tabs Bar */}
      <div className="category-filter-bar" role="tablist" aria-label="Pet categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.icon || '✨'}</span>
            <span>{cat.label}</span>
            <span className="cat-count-pill">{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ padding: '40px 20px', textAlign: 'center', color: '#a5c7db' }}>
          <p style={{ fontSize: '16px', margin: '0 0 8px' }}>No pet varieties found matching "{searchQuery}"</p>
          <button
            type="button"
            className="category-tab-btn"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div id="main-catalog-grid" className="fish-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginTop: '16px' }}>
          {filteredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} onOpenModal={onOpenModal} />
          ))}
        </div>
      )}
    </section>
  );
}

function WhyChoosePetsHeaven() {
  const items = [
    { title: 'Healthy & Active Pets', subtitle: 'Ethically cared companions & stock' },
    { title: 'WhatsApp Direct Chat', subtitle: 'Live photos, batch updates & assistance' },
    { title: 'Store In Indore', subtitle: 'Walk-in advice & verified guidance' },
    { title: 'Complete Pet Guidance', subtitle: 'Diet, cage setups & habitat recommendations' },
  ];

  return (
    <section className="why-card" style={{ padding: '28px 24px' }}>
      <div>
        <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', margin: '0 0 8px' }}>
          Why Choose Pet's Heaven Indore?
        </h2>
        <p style={{ color: '#a5c7db', fontSize: '13px', margin: '0 0 16px' }}>
          We focus on healthy, active companions and transparent pet parenting advice.
        </p>
        <div className="why-grid">
          {items.map((item) => (
            <article key={item.title}>
              <span>✓</span>
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </article>
          ))}
        </div>
      </div>
      <img
        src="/assets/pets/golden_retriever.jpg"
        alt="Healthy Golden Retriever puppy at Pet's Heaven Indore"
        style={{ width: '100%', height: '100%', maxHeight: '280px', objectFit: 'cover', borderRadius: '8px' }}
        loading="lazy"
      />
    </section>
  );
}

function Sidebar({ onOpenModal }) {
  return (
    <aside className="side-panel">
      {/* Store Location & Timings */}
      <section className="pets-sidebar-box" id="store-info">
        <h3>
          <span>📍</span> Pet's Heaven Store
        </h3>
        <p>
          Visit our Indore store for in-person consultations, premium pet accessories, bird cages, and aquarium equipment.
        </p>

        <div className="pets-sidebar-contact-list">
          <a
            className="pets-sidebar-contact-item"
            href={OFFICIAL_MAPS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span><strong>Store:</strong> Indore, Madhya Pradesh</span>
          </a>

          <a
            className="pets-sidebar-contact-item"
            href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span><strong>WhatsApp:</strong> {OFFICIAL_PHONE}</span>
          </a>

          <a
            className="pets-sidebar-contact-item"
            href={OFFICIAL_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span><strong>Instagram:</strong> @indore_pets_heaven</span>
          </a>
        </div>

        <a
          className="pets-sidebar-action-btn"
          href={OFFICIAL_MAPS}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Google Maps Location
        </a>
      </section>

      {/* About Box */}
      <section className="about-box">
        <div>
          <h2>About Pet's Heaven</h2>
          <p>
            Pet's Heaven Indore is your premier local pet destination. We connect families with verified dog breeds, hand-tamed pet birds, cheerful hamsters, and exotic freshwater fish with honest guidance.
          </p>
          <ul>
            <li>Verified Breed Standards</li>
            <li>Direct WhatsApp Availability Updates</li>
            <li>Pet Food & Habitat Guidance</li>
            <li>Complete Customer Support in Indore</li>
          </ul>
          <a href="/social">View Social Links</a>
        </div>
        <img
          src="/assets/pets/cockatiel.jpg"
          alt="Cockatiel pet bird at Pet's Heaven Indore"
          loading="lazy"
        />
      </section>

      {/* Pet Care Tips Box */}
      <section className="tips-box">
        <h2>Pet Parenting Tips</h2>
        <div>
          <ul>
            <li>Schedule regular vet check-ups</li>
            <li>Maintain proper cage & tank hygiene</li>
            <li>Provide species-appropriate nutrition</li>
            <li>Allow daily exercise & mental enrichment</li>
            <li>Ensure clean drinking water at all times</li>
          </ul>
          <img
            src="/assets/pets/syrian_hamster.jpg"
            alt="Syrian hamster care"
            loading="lazy"
          />
        </div>
      </section>

      {/* Quick WhatsApp Inquiry Box */}
      <section className="cta-box">
        <img src="/assets/fast/photos__fish__betta fish.jpg" alt="" />
        <h2>Looking for a Specific Pet or Breed?</h2>
        <p>Tell us what companion you have in mind and our Indore team will assist you with batch updates.</p>
        <a
          href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Pet's Heaven Indore, I am looking for a specific pet. Please let me know what breeds/varieties are currently available.")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff' }}
        >
          Message on WhatsApp
        </a>
      </section>
    </aside>
  );
}

function CategoryShowcaseSection({ id, title, subtitle, categoryKey, onOpenModal }) {
  const items = useMemo(() => {
    return PET_PRODUCTS.filter((item) => item.category === categoryKey);
  }, [categoryKey]);

  return (
    <section className="wide-section" id={id} style={{ padding: '32px 20px', borderTop: '1px solid rgba(54, 232, 255, 0.2)' }}>
      <div className="category-heading-bar">
        <div>
          <p className="eyebrow" style={{ color: '#36e8ff', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '11px', margin: '0 0 4px', fontWeight: 800 }}>
            Catalog Category
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 28px)', color: '#fff', margin: 0 }}>
            {title}
          </h2>
          <p style={{ color: '#a5c7db', fontSize: '13px', margin: '4px 0 0' }}>{subtitle}</p>
        </div>
        <a
          href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Pet's Heaven Indore, I want to inquire about ${title}. Please share available stock.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-nav-btn"
          style={{ padding: '6px 14px', fontSize: '12px' }}
        >
          Enquire Category
        </a>
      </div>

      <div className="fish-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '14px', marginTop: '16px' }}>
        {items.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} onOpenModal={onOpenModal} />
        ))}
      </div>
    </section>
  );
}

function DeferredDetailedCatalog({ onOpenModal }) {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return Boolean(window.location.hash || window.location.search || window.innerWidth > 768);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (isVisible) return;
    const show = () => setIsVisible(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(show, { timeout: 900 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(show, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="expanded-site">
      {/* 1. Dogs & Dog Breeds */}
      <CategoryShowcaseSection
        id="dogs"
        title="Dogs & Dog Breeds"
        subtitle="Popular family and working breeds: Golden Retriever, Labrador, German Shepherd, Husky, Beagle & more"
        categoryKey="dogs"
        onOpenModal={onOpenModal}
      />

      {/* 2. Cats & Cat Breeds */}
      <CategoryShowcaseSection
        id="cats"
        title="Cats & Cat Breeds"
        subtitle="Affectionate companions & pedigrees: Persian, Siamese, Maine Coon, Bengal, Ragdoll & more"
        categoryKey="cats"
        onOpenModal={onOpenModal}
      />

      {/* 3. Pet Birds */}
      <CategoryShowcaseSection
        id="birds"
        title="Pet Birds"
        subtitle="Hand-tamed parakeets, singing birds & exotic parrots: Cockatiel, Budgies, Lovebirds, African Grey & more"
        categoryKey="birds"
        onOpenModal={onOpenModal}
      />

      {/* 3. Hamsters */}
      <CategoryShowcaseSection
        id="hamsters"
        title="Hamsters"
        subtitle="Adorable small pets: Syrian (Teddy Bear), Dwarf & Roborovski hamsters"
        categoryKey="hamsters"
        onOpenModal={onOpenModal}
      />

      {/* 4. Pet Mice */}
      <CategoryShowcaseSection
        id="mice"
        title="Pet Mice"
        subtitle="Clever, clean pocket pets: Fancy Mice & specialty coat varieties"
        categoryKey="mice"
        onOpenModal={onOpenModal}
      />

      {/* 5. Aquarium Fish */}
      <CategoryShowcaseSection
        id="fish"
        title="Aquarium Fish"
        subtitle="Exotic freshwater showpieces: Betta, Discus, Arowana, Angelfish, Goldfish, Guppies & more"
        categoryKey="fish"
        onOpenModal={onOpenModal}
      />

      {/* Store Location Map & Visit Section */}
      <section className="wide-section contact-wide" id="contact" style={{ marginTop: '24px' }}>
        <img
          src="/assets/pets/golden_retriever.jpg"
          alt="Pet's Heaven Indore store companions"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">Visit Pet's Heaven Indore</p>
          <h2>Have questions about a breed, bird or aquarium setup?</h2>
          <p style={{ color: '#a5c7db', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
            We're here in Indore to assist you with live photos, batch updates, diet guidance, and accessories.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              className="modal-whatsapp-full-btn"
              href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Pet's Heaven Indore, I want to enquire about pet availability and store timings.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> Chat on WhatsApp (+91 88780 02071)
            </a>

            <a
              className="pets-sidebar-action-btn"
              href={OFFICIAL_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px', fontSize: '13px' }}
            >
              <span>📍</span> Open Google Maps Store Location
            </a>

            <a
              className="pets-sidebar-action-btn"
              href={OFFICIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px', fontSize: '13px', background: 'rgba(225, 48, 108, 0.15)', borderColor: '#e1306c', color: '#ff70a5' }}
            >
              <span>📸</span> Follow @indore_pets_heaven on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '36px 20px', borderTop: '1px solid rgba(54, 232, 255, 0.25)', marginTop: '30px', textAlign: 'center', color: '#a5c7db' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
          <div className="pets-logo-white-card" style={{ padding: '6px 14px', borderRadius: '10px' }}>
            <img src={OFFICIAL_LOGO} alt="Pet's Heaven Indore Logo" style={{ height: '34px', width: 'auto', objectFit: 'contain', display: 'block' }} />
          </div>
          <strong style={{ color: '#fff', fontSize: '18px', letterSpacing: '0.04em' }}>PET'S HEAVEN INDORE</strong>
        </div>
        <p style={{ fontSize: '13px', margin: '0 0 14px' }}>
          Indore's Premier Pet Store · Dogs & Puppies · Cats & Kittens · Pet Birds · Hamsters · Pet Mice · Aquarium Fish
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '13px', marginBottom: '16px' }}>
          <a href="/social" style={{ color: '#36e8ff' }}>Social Links</a>
          <span>•</span>
          <a href={OFFICIAL_MAPS} target="_blank" rel="noopener noreferrer" style={{ color: '#36e8ff' }}>Google Maps</a>
          <span>•</span>
          <a href={OFFICIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: '#36e8ff' }}>Instagram</a>
          <span>•</span>
          <a href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: '#36e8ff' }}>WhatsApp</a>
          <span>•</span>
          <a href={OFFICIAL_WEBSITE} style={{ color: '#36e8ff' }}>Website: {OFFICIAL_WEBSITE}</a>
        </div>
        <small style={{ color: 'rgba(234, 251, 255, 0.45)' }}>
          © {new Date().getFullYear()} Pet's Heaven Indore. All rights reserved. Catalog representations do not imply immediate stock availability.
        </small>
      </footer>
    </div>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const openId = params.get('open') || params.get('pet');
      if (openId) {
        const found = PET_PRODUCTS.find((p) => p.id === openId);
        if (found) setSelectedProduct(found);
      }
      const scrollTarget = params.get('scroll');
      if (scrollTarget) {
        const doScroll = () => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
        };
        doScroll();
        requestAnimationFrame(doScroll);
        setTimeout(doScroll, 40);
      }
    } catch {
      // ignore in non-browser env
    }
  }, []);

  // If user visits /social or /social/
  if (window.location.pathname.toLowerCase().startsWith('/social')) {
    return <SocialBioPage />;
  }

  return (
    <main className="aquaworld-page">
      <div className="page-frame">
        <div className="left-column">
          <HeroPanel />
          <TrustStrip />
          <MainCatalogSection onOpenModal={setSelectedProduct} />
          <WhyChoosePetsHeaven />
        </div>
        <Sidebar onOpenModal={setSelectedProduct} />
      </div>

      <DeferredDetailedCatalog onOpenModal={setSelectedProduct} />

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

export default App;
