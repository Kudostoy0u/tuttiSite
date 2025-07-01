import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <h2 className="logo">tuttiAI</h2>
          </div>
          <div className="nav-center">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#why-choose">Why Choose Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="nav-right">
            <button className="cta-button">Try Free</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <div className="announcement">
              <span className="announcement-icon">🎵</span>
              <span>Rated No.1 App of 2024</span>
              <span className="announcement-arrow">→</span>
            </div>
            
            <h1 className="hero-title">
              Your AI-Powered Music<br/>
              Education Revolution
            </h1>
            
            <p className="hero-subtitle">
              Access an intelligent sheet music database powered by AI, 
              automated repertoire generation, professional tuning tools, 
              metronome, and a comprehensive recording library—all in one app.
            </p>
            
            <div className="hero-buttons">
              <button className="download-btn primary">
                <span className="btn-icon">📱</span> Download App
              </button>
              <button className="download-btn secondary">
                <span className="btn-icon">▶️</span> Watch Demo
              </button>
            </div>
            
            <div className="hero-stats">
              <p><strong>250K+ Downloads</strong></p>
            </div>
            
            <div className="hero-partners">
              <p>WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE</p>
              <div className="partner-logos">
                <span className="partner-logo">Berklee</span>
                <span className="partner-logo">Juilliard</span>
                <span className="partner-logo">Yamaha</span>
                <span className="partner-logo">Steinway</span>
                <span className="partner-logo">Sony Music</span>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400" alt="Music Education App" />
            </div>
            <div className="hero-features">
              <div className="feature-badge">
                <span>✨</span> AI-Powered Repertoire
              </div>
              <div className="feature-badge">
                <span>🎼</span> 1M+ Sheet Music
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <h2 className="section-title">Features Section</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI Repertoire Generation</h3>
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" alt="AI Music Generation" />
              </div>
              <p>Our advanced AI analyzes your skill level, preferences, and learning goals to generate personalized repertoire suggestions that accelerate your musical journey.</p>
            </div>
            
            <div className="feature-card">
              <h3>Smart Sheet Music Library</h3>
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300" alt="Sheet Music Library" />
              </div>
              <p>Access over 1 million pieces with intelligent search, instant transposition, and real-time audio preview. Find exactly what you need in seconds.</p>
            </div>
            
            <div className="feature-card">
              <h3>Professional Practice Tools</h3>
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300" alt="Practice Tools" />
              </div>
              <p>Built-in tuner with 0.1Hz accuracy, adaptive metronome with complex rhythms, and cloud-based recording library to track your progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose" id="why-choose">
        <div className="why-container">
          <h2 className="section-title">Why Choose Us Section</h2>
          
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h4>Personalized Learning</h4>
              <p>AI adapts to your unique learning style and pace</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">🚀</div>
              <h4>Instant Access</h4>
              <p>Download sheet music and practice anywhere, anytime</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">💎</div>
              <h4>Premium Quality</h4>
              <p>Professional-grade tools used by top musicians</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">🔒</div>
              <h4>Secure & Private</h4>
              <p>Your data and recordings are encrypted and protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="reviews-container">
          <h2 className="section-title">Review Section</h2>
          
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"tuttiAI transformed my practice routine. The AI suggestions are spot-on!"</p>
              <div className="reviewer">
                <strong>Sarah Chen</strong>
                <span>Conservatory Student</span>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Finally, a music app that understands what students actually need."</p>
              <div className="reviewer">
                <strong>Michael Torres</strong>
                <span>Music Teacher</span>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The sheet music library is incredible. Found pieces I couldn't find anywhere else!"</p>
              <div className="reviewer">
                <strong>Emma Wilson</strong>
                <span>Professional Pianist</span>
              </div>
            </div>
            
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The recording feature helps me track my progress. Game-changer!"</p>
              <div className="reviewer">
                <strong>David Park</strong>
                <span>Jazz Musician</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faqs">
        <div className="faq-container">
          <h2 className="section-title">FAQ Section</h2>
          
          <div className="faq-list">
            <details className="faq-item">
              <summary>How does the AI repertoire generation work?</summary>
              <p>Our AI analyzes your playing level, musical preferences, and learning goals to suggest pieces that will challenge you appropriately while keeping you engaged and motivated.</p>
            </details>
            
            <details className="faq-item">
              <summary>Can I access sheet music offline?</summary>
              <p>Yes! Once downloaded, all sheet music and tools are available offline. Your recordings sync when you reconnect.</p>
            </details>
            
            <details className="faq-item">
              <summary>Is tuttiAI suitable for beginners?</summary>
              <p>Absolutely! tuttiAI adapts to all skill levels, from complete beginners to professional musicians, with appropriate content and tools for each level.</p>
            </details>
            
            <details className="faq-item">
              <summary>What instruments does tuttiAI support?</summary>
              <p>tuttiAI supports all instruments! Our tuner works for any instrument, and our sheet music library covers everything from piano to percussion.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Start Your Musical Journey Today</h2>
          <p className="cta-subtitle">Join 250,000+ musicians using tuttiAI to revolutionize their practice</p>
          
          <div className="cta-buttons">
            <button className="download-btn primary">
              <span className="btn-icon">📱</span> Download App
            </button>
            <button className="download-btn secondary">
              <span className="btn-icon">💻</span> Try Web Version
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>tuttiAI</h3>
              <p>© 2024 tuttiAI. All Rights Reserved.</p>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Downloads</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
