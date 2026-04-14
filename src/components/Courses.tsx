export interface CourseLocation {
  location: string
  schedule: string[]
}

interface CoursesProps {
  locations: CourseLocation[]
}

export function Courses({ locations }: CoursesProps) {
  return (
    <section className="section-card">
      <div className="section-title-banner">CORSI CHE TI FANNO GUADAGNARE PUNTI</div>
      <p className="courses-bonus">+3 punti per ogni partecipazione</p>
      <div className="grid cards-grid">
        {locations.map((location) => (
          <article key={location.location} className="mini-card">
            <h3 className="location-title">{location.location}</h3>
            <ul>
              {location.schedule.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
