import { useEffect, useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import { Courses } from './components/Courses'
import { DaisyBoard } from './components/DaisyBoard'
import { Footer } from './components/Footer'
import { GymShowcase } from './components/GymShowcase'
import { Locations } from './components/Locations'
import { Points } from './components/Points'
import { Rewards } from './components/Rewards'
import { StaffSection } from './components/StaffSection'

const pointsCategories = [
  { score: 1, actions: ['Ingresso libero in palestra', 'Allenamento cardio guidato'] },
  { score: 2, actions: ['Personal mini-session', 'Check postura e mobilità'] },
  { score: 3, actions: ['Partecipazione corsi speciali', 'Lezione premium di gruppo'] },
]

const courseLocations = [
  {
    location: 'Corteolona',
    schedule: ['Lunedì 18:30 - Funzionale', 'Mercoledì 19:00 - HIIT', 'Venerdì 18:00 - Core'],
  },
  {
    location: "Sant'Angelo",
    schedule: ['Martedì 19:00 - Total Body', 'Giovedì 18:30 - Calisthenics', 'Sabato 10:30 - Mobility'],
  },
  {
    location: 'Gerenzago',
    schedule: ['Lunedì 19:30 - Tone Up', 'Mercoledì 18:15 - Power Circuit', 'Venerdì 19:00 - Bootcamp'],
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
    theme: 'green',
    images: ['/gym-images/corteolona-1.jpg', '/gym-images/corteolona-2.jpg', '/gym-images/corteolona-3.jpg'],
    paragraphs: ['Spazi moderni e area funzionale completa.', 'Allenamenti personalizzati in un ambiente energico.'],
  },
  {
    name: "Palestra di Sant'Angelo",
    theme: 'dark',
    images: ['/gym-images/santangelo-1.jpg', '/gym-images/santangelo-2.jpg', '/gym-images/santangelo-3.jpg'],
    paragraphs: ['Sala corsi ampia e attrezzi di ultima generazione.', 'Community attiva e coach specializzati.'],
  },
  {
    name: 'Palestra di Gerenzago',
    theme: 'green',
    images: [
      '/gym-images/gerenzago-1.jpg',
      '/gym-images/gerenzago-2.jpg',
      '/gym-images/gerenzago-3.jpg',
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
  },
  {
    name: 'Chiara Mainardi',
    role: 'Personal Trainer',
    image: '/gym-images/staff-chiara.png',
    bio: 'Allenamento tecnico e supporto costante per obiettivi su misura.',
  },
  {
    name: 'Valentina Trunfio',
    role: 'Specialista Benessere',
    image: '/gym-images/staff-valentina.png',
    bio: "Percorsi dedicati al benessere e all'equilibrio.",
  },
]

const locations = [
  { name: 'Corteolona', address: 'Via Olona, 5', phone: '+39 0382 404072' },
  { name: "Sant'Angelo Lodigiano", address: 'Viale Trento e Trieste', phone: '+39 0371 168 1552' },
  { name: 'Gerenzago', address: 'Via Villanterio, 32', phone: '+39 0382 154 7437' },
]

export default function App() {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsNavbarScrolled(window.scrollY > 14)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app" id="top">
      <header className={`navbar ${isNavbarScrolled ? 'is-scrolled' : ''}`}>
        <a className="navbar-logo" href="#top">
          <Logo />
        </a>

        <nav className="navbar-menu">
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
            
            {/* LOGO GRANDE */}
            <div style={{ marginBottom: 20 }}>
              <Logo />
            </div>

            <span className="premium-kicker">PROFORMA 2020</span>

            <h1>Fitness moderno per risultati reali.</h1>

            <p>
              Un ecosistema completo tra allenamento, corsi premium e community:
              scegli la tua sede e inizia oggi il tuo percorso.
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

          <aside className="premium-hero-panel">
            <p className="premium-panel-title">Perché Proforma</p>
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
                <span>Corsi e attività</span>
              </article>
            </div>
          </aside>
        </section>

        <GymShowcase places={gymPlaces} />
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