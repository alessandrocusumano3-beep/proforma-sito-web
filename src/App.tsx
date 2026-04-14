import { useEffect, useState } from 'react'
import './App.css'
import { Courses } from './components/Courses'
import { DaisyBoard } from './components/DaisyBoard'
import { Footer } from './components/Footer'
import { GymShowcase } from './components/GymShowcase'
import { Hero } from './components/Hero'
import { Locations } from './components/Locations'
import { Points } from './components/Points'
import { Rewards } from './components/Rewards'
import { StaffSection } from './components/StaffSection'

const pointsCategories = [
  { score: 1, actions: ['Ingresso libero in palestra', 'Allenamento cardio guidato'] },
  { score: 2, actions: ['Personal mini-session', 'Check postura e mobilita'] },
  { score: 3, actions: ['Partecipazione corsi speciali', 'Lezione premium di gruppo'] },
]

const courseLocations = [
  {
    location: 'Corteolona',
    schedule: ['Lunedi 18:30 - Funzionale', 'Mercoledi 19:00 - HIIT', 'Venerdi 18:00 - Core'],
  },
  {
    location: "Sant'Angelo",
    schedule: ['Martedi 19:00 - Total Body', 'Giovedi 18:30 - Calisthenics', 'Sabato 10:30 - Mobility'],
  },
  {
    location: 'Gerenzago',
    schedule: ['Lunedi 19:30 - Tone Up', 'Mercoledi 18:15 - Power Circuit', 'Venerdi 19:00 - Bootcamp'],
  },
]

const rewards = [
  { points: 25, reward: 'Sacca Proforma' },
  { points: 40, reward: '2 mesi in regalo' },
  { points: 50, reward: '3 mesi in regalo' },
  { points: 60, reward: '4 mesi in regalo' },
  { points: 70, reward: '6 mesi + 2 PT' },
  { points: 80, reward: '6 mesi + 4 PT' },
  { points: 90, reward: '12 mesi' },
  { points: 100, reward: '12 mesi + Pacchetto Metodo' },
]

const gymPlaces = [
  {
    name: 'Palestra di Corteolona',
    theme: 'green' as const,
    images: ['/gym-images/corteolona-1.jpg', '/gym-images/corteolona-2.jpg', '/gym-images/corteolona-3.jpg'],
    paragraphs: ['Spazi moderni e area funzionale completa.', 'Allenamenti personalizzati in un ambiente energico.'],
  },
  {
    name: "Palestra di Sant'Angelo",
    theme: 'dark' as const,
    images: ['/gym-images/santangelo-1.jpg', '/gym-images/santangelo-2.jpg', '/gym-images/santangelo-3.jpg'],
    paragraphs: ['Sala corsi ampia e attrezzi di ultima generazione.', 'Community attiva e coach specializzati.'],
  },
  {
    name: 'Palestra di Gerenzago',
    theme: 'green' as const,
    images: [
      '/gym-images/gerenzago-1.jpg',
      '/gym-images/gerenzago-2.jpg',
      '/gym-images/gerenzago-3.jpg',
      '/gym-images/gerenzago-4.png',
      '/gym-images/gerenzago-5.png',
      '/gym-images/gerenzago-6.png',
      '/gym-images/gerenzago-7.png',
      '/gym-images/gerenzago-8.png',
    ],
    paragraphs: ['Club compatto e super curato per allenarti bene.', 'Programmi su misura per tutti i livelli.'],
  },
]

const staffMembers = [
  {
    name: 'Matteo Conca',
    role: 'Personal Trainer',
    image: '/gym-images/staff-matteo.png',
    bio: 'Percorsi personalizzati per forza, forma fisica e performance.',
    facePosition: 'center 24%',
  },
  {
    name: 'Chiara Mainardi',
    role: 'Personal Trainer',
    image: '/gym-images/staff-chiara.png',
    bio: 'Allenamento tecnico e supporto costante per obiettivi su misura.',
    facePosition: 'center 24%',
  },
  {
    name: 'Valentina Trunfio Dottoressa',
    role: 'Specialista Benessere',
    image: '/gym-images/staff-valentina.png',
    bio: 'Percorsi dedicati al benessere, all equilibrio e alla qualita della vita.',
    facePosition: 'center 24%',
  },
]

const locations = [
  { name: 'Corteolona', address: 'Via Roma 12, Corteolona (PV)', phone: '0382 000111' },
  { name: "Sant'Angelo", address: "Via Milano 44, Sant'Angelo Lodigiano (LO)", phone: '0371 000222' },
  { name: 'Gerenzago', address: 'Via Centrale 9, Gerenzago (PV)', phone: '0382 000333' },
]

export default function App() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const [isLogoMissing, setIsLogoMissing] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsNavbarScrolled(window.scrollY > 14)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app" id="top">
      <header className={`navbar ${isNavbarScrolled ? 'is-scrolled' : ''}`}>
        <a className="navbar-logo" href="#top" aria-label="Vai alla home">
          {isLogoMissing ? (
            <span className="navbar-logo-fallback">Proforma</span>
          ) : (
            <img src="/proforma.png" alt="Proforma" onError={() => setIsLogoMissing(true)} />
          )}
        </a>

        <nav className="navbar-menu" aria-label="Menu principale">
          <a href="#top">Home</a>
          <a href="#home-places">Sedi</a>
          <a href="#corsi">Corsi</a>
          <a href="#contatti">Contatti</a>
        </nav>

        <a className="navbar-cta" href="#contatti">
          Prova gratis
        </a>
      </header>

      <main className="main-content">
        <section className="premium-hero">
          <div className="premium-hero-content">
            <span className="premium-kicker">Proforma 2020</span>
            <h1>Fitness moderno per risultati reali.</h1>
            <p>
              Un ecosistema completo tra allenamento, corsi premium e community: scegli la tua sede e inizia
              oggi il tuo percorso.
            </p>
            <div className="premium-hero-actions">
              <a href="#contatti" className="premium-primary-cta">
                Prova gratis
              </a>
              <a href="#home-places" className="premium-secondary-cta">
                Vedi le sedi
              </a>
            </div>
          </div>

          <aside className="premium-hero-panel" aria-label="Punti di forza">
            <p className="premium-panel-title">Perche Proforma</p>
            <div className="premium-panel-metrics">
              <article>
                <strong>3</strong>
                <span>Sedi attive</span>
              </article>
              <article>
                <strong>100</strong>
                <span>Punti premio</span>
              </article>
              <article>
                <strong>+20</strong>
                <span>Corsi e attivita</span>
              </article>
            </div>
            <div className="premium-tags">
              <span>Coupon Primavera</span>
              <span>Calisthenics</span>
              <span>PT dedicati</span>
            </div>
          </aside>
        </section>
        <GymShowcase places={gymPlaces} />
        <Hero />
        <Points categories={pointsCategories} />
        <section id="corsi">
          <Courses locations={courseLocations} />
        </section>
        <Rewards rewards={rewards} />
        <DaisyBoard rewards={rewards} />
        <StaffSection members={staffMembers} />
        <section id="contatti">
          <Locations locations={locations} />
        </section>
        <Footer />
      </main>
    </div>
  )
}