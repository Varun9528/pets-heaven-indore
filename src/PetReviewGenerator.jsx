import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGO } from './data/petsData.js';
import {
  OFFICIAL_GOOGLE_REVIEW_URL,
  PRODUCT_OPTIONS,
  EXPERIENCE_OPTIONS,
  STYLE_DEFINITIONS,
  generateVariations
} from './utils/reviewEngine.js';

export {
  OFFICIAL_GOOGLE_REVIEW_URL,
  PRODUCT_OPTIONS,
  EXPERIENCE_OPTIONS,
  STYLE_DEFINITIONS,
  generateVariations
};

export default function PetReviewGenerator({ onBack }) {
  // Fresh clean state on every page load - NO pre-selected options or auto-generated reviews
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [customNote, setCustomNote] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReviewText, setSelectedReviewText] = useState('');
  const [copied, setCopied] = useState(false);
  const [handoffActive, setHandoffActive] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');

  const carouselRef = useRef(null);

  // Toggle multi-select products
  const toggleProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Toggle multi-select experience tags
  const toggleExperience = (id) => {
    setSelectedExperiences((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Generate 6 suggestions when customer initiates
  const handleGenerate = () => {
    if (rating === 0) {
      setValidationMsg('Please select your star rating (1–5) above to generate your review.');
      return;
    }
    setValidationMsg('');
    const chosenProds = PRODUCT_OPTIONS.filter((p) => selectedProducts.includes(p.id));
    const chosenExps = EXPERIENCE_OPTIONS.filter((e) => selectedExperiences.includes(e.id));
    const results = generateVariations(rating, chosenProds, chosenExps, customNote);
    setSuggestions(results);
    setCurrentIndex(0);
    setSelectedReviewText(results[0]?.text || '');
    setHasGenerated(true);
    setCopied(false);
    setHandoffActive(false);
  };

  // Pick suggestion from carousel
  const handleSelectSuggestion = (index) => {
    setCurrentIndex(index);
    setSelectedReviewText(suggestions[index]?.text || '');
    setCopied(false);
  };

  // Scroll to index
  const scrollToIndex = (idx) => {
    const targetIdx = Math.max(0, Math.min(suggestions.length - 1, idx));
    setCurrentIndex(targetIdx);
    setSelectedReviewText(suggestions[targetIdx]?.text || '');
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.clientWidth * 0.88;
      carouselRef.current.scrollTo({
        left: targetIdx * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  // Copy exact review and handoff to verified Google Review destination
  const handleContinueToGoogle = async () => {
    setCopied(true);
    setHandoffActive(true);

    // Copy exact review text to clipboard
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(selectedReviewText);
      } else {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = selectedReviewText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
      }
    } catch (err) {
      console.warn('Clipboard write fallback:', err);
    }

    // Open verified Google Maps review destination
    setTimeout(() => {
      try {
        window.open(OFFICIAL_GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
      } catch (e) {
        window.location.href = OFFICIAL_GOOGLE_REVIEW_URL;
      }
    }, 600);
  };

  return (
    <div className="pet-review-wrapper">
      {/* Top Bar with Back Button */}
      <div className="review-top-bar">
        {onBack && (
          <button type="button" className="review-back-btn" onClick={onBack}>
            ← Back to Links
          </button>
        )}
        <span className="review-ai-badge">✨ AI Review Generator</span>
      </div>

      {/* Main Review Glass Card */}
      <div className="review-main-card">
        {/* Brand Header */}
        <div className="review-brand-header">
          <div className="social-logo-white-frame review-logo-frame">
            <img
              src={OFFICIAL_LOGO}
              alt="Pet's Heaven Indore Logo"
              className="social-logo-white-img"
            />
          </div>
          <h2 className="review-title">PET'S HEAVEN INDORE</h2>
          <p className="review-subtitle">
            Share Your Genuine Experience · Guided AI Composer
          </p>
        </div>

        {/* 1. Star Rating Selector */}
        <div className="review-section-block">
          <label className="review-field-label">
            Your Rating{' '}
            <span className="review-label-hint">
              {rating > 0 ? `(${rating} of 5 Stars)` : '(Select 1 to 5 Stars)'}
            </span>
          </label>
          <div className="star-rating-row" role="radiogroup" aria-label="Star Rating">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = (hoverRating || rating) >= star;
              return (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${active ? 'active' : ''}`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => {
                    setRating(star);
                    setValidationMsg('');
                  }}
                  aria-label={`${star} Star${star > 1 ? 's' : ''}`}
                >
                  ★
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Service / Product Selector (Multi-select) */}
        <div className="review-section-block">
          <label className="review-field-label">
            Product / Service Explored <span className="review-label-hint">(Select all that apply)</span>
          </label>
          <div className="review-chip-grid">
            {PRODUCT_OPTIONS.map((prod) => {
              const selected = selectedProducts.includes(prod.id);
              return (
                <button
                  key={prod.id}
                  type="button"
                  className={`review-chip ${selected ? 'selected' : ''}`}
                  onClick={() => toggleProduct(prod.id)}
                >
                  <span className="chip-icon">{prod.icon}</span>
                  <span>{prod.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Experience Highlights (Multi-select) */}
        <div className="review-section-block">
          <label className="review-field-label">
            What Stood Out? <span className="review-label-hint">(Select all that apply)</span>
          </label>
          <div className="review-chip-grid">
            {EXPERIENCE_OPTIONS.map((exp) => {
              const selected = selectedExperiences.includes(exp.id);
              return (
                <button
                  key={exp.id}
                  type="button"
                  className={`review-chip ${selected ? 'selected' : ''}`}
                  onClick={() => toggleExperience(exp.id)}
                >
                  <span>{exp.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Optional Feedback Notes */}
        <div className="review-section-block">
          <label className="review-field-label">
            Specific Note / Feedback <span className="review-label-hint">(Optional)</span>
          </label>
          <input
            type="text"
            className="review-input-text"
            placeholder="e.g. Helpful guidance on Persian cat grooming, clean tanks..."
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
          />
        </div>

        {/* Validation Warning if stars not chosen */}
        {validationMsg && (
          <div style={{
            background: 'rgba(255, 107, 107, 0.15)',
            border: '1px solid rgba(255, 107, 107, 0.5)',
            color: '#ff8a8a',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '13px',
            textAlign: 'center',
            marginBottom: '14px'
          }}>
            ⚠️ {validationMsg}
          </div>
        )}

        {/* Generate Button */}
        <div className="review-action-row">
          <button
            type="button"
            className="review-generate-btn"
            onClick={handleGenerate}
          >
            <span>✨</span> Generate 6 Review Suggestions
          </button>
        </div>

        {/* 5. Suggestions Carousel Section (Rendered only after customer clicks Generate) */}
        {hasGenerated && suggestions.length > 0 && (
          <div className="review-suggestions-container">
            <div className="suggestions-header-row">
              <span className="suggestions-count-pill">
                Suggestion {currentIndex + 1} of {suggestions.length} ({suggestions[currentIndex]?.name})
              </span>
              <div className="carousel-nav-arrows">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => scrollToIndex(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  aria-label="Previous suggestion"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => scrollToIndex(currentIndex + 1)}
                  disabled={currentIndex === suggestions.length - 1}
                  aria-label="Next suggestion"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Horizontal Swipe Carousel */}
            <div
              className="review-carousel-track"
              ref={carouselRef}
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const cardWidth = e.currentTarget.clientWidth * 0.88;
                const newIdx = Math.round(scrollLeft / cardWidth);
                if (newIdx !== currentIndex && newIdx >= 0 && newIdx < suggestions.length) {
                  setCurrentIndex(newIdx);
                  setSelectedReviewText(suggestions[newIdx].text);
                }
              }}
            >
              {suggestions.map((item, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <article
                    key={item.id}
                    className={`carousel-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectSuggestion(idx)}
                  >
                    <div className="carousel-card-header">
                      <strong className="carousel-card-title">{item.name}</strong>
                      <span className="carousel-card-tag">{item.tag}</span>
                    </div>
                    <p className="carousel-card-body">{item.text}</p>
                    <div className="carousel-card-footer">
                      <span className="select-prompt">
                        {isSelected ? '✓ Selected for Posting' : 'Tap to Select'}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="carousel-dots-row">
              {suggestions.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  className={`dot-indicator ${dotIdx === currentIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(dotIdx)}
                  aria-label={`Jump to variation ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* 6. Editable Review Text Area */}
            <div className="review-editable-box">
              <div className="editable-header-row">
                <label className="review-field-label">
                  Your Review Text <span className="review-label-hint">(Feel free to edit or personalize)</span>
                </label>
                <button
                  type="button"
                  className="regenerate-subtle-btn"
                  onClick={handleGenerate}
                >
                  🔄 Regenerate All 6
                </button>
              </div>

              <textarea
                className="review-textarea"
                rows={4}
                value={selectedReviewText}
                onChange={(e) => {
                  setSelectedReviewText(e.target.value);
                  setCopied(false);
                }}
              />

              <div className="char-count-row">
                <span>{selectedReviewText.length} characters</span>
                {copied && <span className="copied-status-text">✓ Copied to clipboard!</span>}
              </div>
            </div>

            {/* 7. Handoff Instruction Banner */}
            {handoffActive && (
              <motion.div
                className="review-handoff-banner"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="handoff-icon">📋</div>
                <div className="handoff-content">
                  <strong style={{ color: '#36e8ff', fontSize: '15px' }}>
                    Your review has been copied. Paste it into Google, select your star rating and tap Post.
                  </strong>
                  <ol style={{ margin: '8px 0', paddingLeft: '20px', lineHeight: 1.6 }}>
                    <li>Google Maps destination opened in a new tab</li>
                    <li>Select your <strong>{rating}-Star</strong> rating</li>
                    <li><strong>Paste</strong> your copied review into the box (Ctrl+V / Long-press Paste)</li>
                    <li>Tap <strong>Post</strong> to share!</li>
                  </ol>
                  <small style={{ color: 'rgba(234, 251, 255, 0.65)' }}>
                    *Note: Google does not allow third-party websites to automatically submit reviews into Google accounts. The customer must personally paste and post.
                  </small>
                </div>
              </motion.div>
            )}

            {/* 8. Continue to Google Review Action */}
            <div className="review-submit-action">
              <button
                type="button"
                className="google-handoff-btn"
                onClick={handleContinueToGoogle}
              >
                <svg viewBox="0 0 24 24" className="google-icon" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span>{copied ? 'COPIED! OPENING GOOGLE...' : 'COPY & OPEN GOOGLE REVIEW'}</span>
              </button>
              <div style={{ textAlign: 'center', marginTop: '8px' }}>
                <span style={{ fontSize: '11px', color: 'rgba(234, 251, 255, 0.7)' }}>
                  Your review has been copied. Paste it into Google, select your star rating and tap Post.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
