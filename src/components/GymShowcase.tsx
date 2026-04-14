import { useState } from 'react'

export interface GymPlace {
  name: string
  theme: 'green' | 'dark'
  images: string[]
  paragraphs: string[]
}

interface GymShowcaseProps {
  places: GymPlace[]
}

export function GymShowcase({ places }: GymShowcaseProps) {
  const [activePlace, setActivePlace] = useState(0)

  return (
    <section className="showcase-section" id="home-places">
      <div className="showcase-header">
        <h2>Home - Scegli la palestra da vedere</h2>
        <p className="showcase-subtitle">Seleziona una sede e scorri le foto della palestra.</p>
        <p className="showcase-menu-label">Sedi</p>
        <div className="showcase-tabs">
          {places.map((place, index) => (
            <button
              key={place.name}
              className={`showcase-tab ${activePlace === index ? 'is-active' : ''}`}
              onClick={() => setActivePlace(index)}
            >
              {place.name.replace('Palestra di ', '')}
            </button>
          ))}
        </div>
      </div>

      {places.map((place, index) => (
        <article
          key={place.name}
          className={`showcase-card ${place.theme === 'green' ? 'green-card' : 'dark-card'} ${
            activePlace === index ? 'card-visible' : 'card-hidden'
          }`}
        >
          <div className="showcase-gallery">
            {place.images.map((image, index) => (
              <img key={image} src={image} alt={`${place.name} ${index + 1}`} />
            ))}
          </div>
          <p className="showcase-gallery-hint">Scorri a destra o sinistra per vedere tutte le foto</p>

          <div className="showcase-content">
            <h2>{place.name}</h2>
            {place.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <button className="discover-button">SCOPRI DI PIU</button>
          </div>
        </article>
      ))}
    </section>
  )
}
