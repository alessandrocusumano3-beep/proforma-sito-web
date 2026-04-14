export interface GymLocation {
  name: string
  address: string
  phone: string
}

interface LocationsProps {
  locations: GymLocation[]
}

export function Locations({ locations }: LocationsProps) {
  return (
    <section className="section-card">
      <h2 className="locations-heading">Proforma 2020</h2>
      <p className="locations-subtitle">Le nostre sedi:</p>
      <div className="grid cards-grid">
        {locations.map((location) => (
          <article key={location.name} className="mini-card location-card">
            <span className="location-icon">🪧</span>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>Tel: {location.phone}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
