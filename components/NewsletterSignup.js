import { useState } from 'react';

const NewsletterSignup = ({ className = '', variant = 'default' }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const interestOptions = [
        { id: 'ayurvedic-sarees', label: 'Ayurvedic Sarees' },
        { id: 'natural-dyes', label: 'Natural Dyes' },
        { id: 'wellness-tips', label: 'Wellness Tips' },
        { id: 'traditional-craft', label: 'Traditional Crafts' },
        { id: 'healing-fabrics', label: 'Healing Fabrics' }
    ];

    const handleInterestToggle = (interestId) => {
        if (interests.includes(interestId)) {
            setInterests(interests.filter(id => id !== interestId));
        } else {
            setInterests([...interests, interestId]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset states
        setError(null);
        setMessage(null);
        setLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    interests
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setMessage(data.message);
            setEmail('');
            setName('');
            setInterests([]);
            setExpanded(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`newsletter-signup ${className} ${variant}`}>
            <div className="newsletter-content">
                {variant === 'default' && (
                    <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
                )}

                {variant === 'popup' && (
                    <>
                        <div className="newsletter-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3 className="newsletter-title">Join the 11Sari Family</h3>
                    </>
                )}

                <p className="newsletter-description">
                    Stay updated with our latest collections, ayurvedic wellness tips, and exclusive offers.
                </p>

                {message ? (
                    <div className="success-message">
                        <i className="fas fa-check-circle"></i>
                        <p>{message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="newsletter-input"
                            />

                            {!expanded && (
                                <button
                                    type="button"
                                    className="btn-expand"
                                    onClick={() => setExpanded(true)}
                                >
                                    <i className="fas fa-chevron-down"></i>
                                </button>
                            )}
                        </div>

                        {expanded && (
                            <div className="expanded-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name (optional)"
                                        className="newsletter-input"
                                    />
                                </div>

                                <div className="interest-section">
                                    <p className="interest-title">I'm interested in:</p>
                                    <div className="interest-options">
                                        {interestOptions.map(option => (
                                            <label key={option.id} className="interest-option">
                                                <input
                                                    type="checkbox"
                                                    checked={interests.includes(option.id)}
                                                    onChange={() => handleInterestToggle(option.id)}
                                                    className="interest-checkbox"
                                                />
                                                <span className="interest-label">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {error && <p className="error-message">{error}</p>}

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                )}

                <p className="privacy-note">
                    By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a>. We respect your privacy.
                </p>
            </div>

            <style jsx>{`
        .newsletter-signup {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .newsletter-signup.popup {
          box-shadow: var(--shadow-lg);
          max-width: 400px;
        }
        
        .newsletter-content {
          padding: 2rem;
        }
        
        .newsletter-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1.5rem;
        }
        
        .newsletter-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          text-align: center;
        }
        
        .newsletter-description {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          text-align: center;
        }
        
        .newsletter-form {
          margin-bottom: 1rem;
        }
        
        .form-group {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .newsletter-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid var(--border-light);
          border-radius: 0.25rem;
          font-size: 1rem;
          transition: border-color 0.2s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: var(--secondary-color);
        }
        
        .btn-expand {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .expanded-form {
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .interest-section {
          margin-bottom: 1.5rem;
        }
        
        .interest-title {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .interest-options {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 0.5rem;
        }
        
        .interest-option {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 0.25rem;
          transition: background 0.2s ease;
        }
        
        .interest-option:hover {
          background: rgba(0, 0, 0, 0.05);
        }
        
        .interest-checkbox {
          margin-right: 0.5rem;
        }
        
        .interest-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        .submit-button {
          width: 100%;
          padding: 0.8rem;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 0.25rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-button:hover {
          background: var(--primary-dark);
        }
        
        .submit-button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }
        
        .error-message {
          color: #d32f2f;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .success-message {
          background: #e8f5e9;
          padding: 1.5rem;
          border-radius: 0.25rem;
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .success-message i {
          color: #2e7d32;
          font-size: 1.5rem;
          margin-right: 1rem;
        }
        
        .success-message p {
          color: #2e7d32;
          margin: 0;
        }
        
        .privacy-note {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-align: center;
        }
        
        .privacy-note a {
          color: var(--primary-color);
          text-decoration: none;
        }
        
        /* Variant-specific styles */
        .newsletter-signup.sidebar .newsletter-title {
          font-size: 1.2rem;
        }
        
        .newsletter-signup.footer {
          background: transparent;
        }
        
        .newsletter-signup.footer .newsletter-title,
        .newsletter-signup.footer .newsletter-description {
          color: #e0e0e0;
        }
        
        .newsletter-signup.footer .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .newsletter-signup.footer .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .newsletter-signup.footer .interest-option,
        .newsletter-signup.footer .interest-title,
        .newsletter-signup.footer .interest-label {
          color: #e0e0e0;
        }
        
        .newsletter-signup.footer .interest-option:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .newsletter-signup.footer .submit-button {
          background: var(--secondary-color);
        }
        
        .newsletter-signup.footer .submit-button:hover {
          background: var(--secondary-dark);
        }
        
        .newsletter-signup.footer .privacy-note {
          color: #9e9e9e;
        }
        
        .newsletter-signup.footer .privacy-note a {
          color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
          .interest-options {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default NewsletterSignup; 