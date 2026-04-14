export interface StaffMember {
  name: string
  role: string
  image: string
  bio: string
  facePosition?: string
}

interface StaffSectionProps {
  members: StaffMember[]
}

export function StaffSection({ members }: StaffSectionProps) {
  return (
    <section className="staff-section section-card">
      <div className="section-title-banner">Il Nostro Staff</div>
      <p className="staff-subtitle">
        Professionisti che ti seguono con metodo, energia e programmi su misura.
      </p>

      <div className="staff-grid">
        {members.map((member, index) => (
          <article
            key={member.name}
            className="staff-card"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{ objectPosition: member.facePosition ?? 'center 24%' }}
            />
            <div className="staff-overlay">
              <h3>{member.name}</h3>
              <p className="staff-role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
