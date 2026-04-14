const quickLinks = [
  'Home',
  'Le nostre sedi',
  'Corsi',
  'Metodo Longevity',
  'Prova gratuita',
  'Contatti',
]

const policyLinks = ['Privacy Policy', 'Cookie Policy']

export function Footer() {
  return (
    <footer className="footer section-card">
      <h2 className="footer-title">Link Rapidi</h2>
      <div className="footer-links">
        {quickLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </div>

      <h2 className="footer-title">Privacy</h2>
      <div className="footer-links">
        {policyLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </div>

      <h2>Seguici sui social</h2>
      <p>
        Segui i nostri profili social per rimanere aggiornato su corsi e
        promozioni
      </p>

      <div className="social-buttons">
        {['Facebook', 'Instagram'].map((social) => (
          <button key={social} className="secondary-button">
            {social}
          </button>
        ))}
      </div>

      <p className="copyright">© 2026 Proforma 2020</p>
    </footer>
  )
}
