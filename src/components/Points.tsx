export interface PointsCategory {
  score: number
  actions: string[]
}

interface PointsProps {
  categories: PointsCategory[]
}

export function Points({ categories }: PointsProps) {
  return (
    <section className="section-card">
      <div className="section-title-banner">COME ACQUISIRE PUNTI</div>
      <div className="grid cards-grid">
        {categories.map((category) => (
          <article key={category.score} className="mini-card">
            <h3 className="points-title">
              {category.score} punto{category.score > 1 ? 'i' : ''}
            </h3>
            <ul>
              {category.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
