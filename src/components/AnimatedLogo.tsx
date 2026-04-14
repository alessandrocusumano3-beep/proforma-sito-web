import './AnimatedLogo.css'

type Letter = {
  key: string
  src: string
  alt: string
}

const rows: Letter[][] = [
  [
    { key: 'pf-p', src: '/assets/pf-p.png', alt: 'P' },
    { key: 'pf-f', src: '/assets/pf-f.png', alt: 'F' },
  ],
  [
    { key: 'p', src: '/assets/p.png', alt: 'P' },
    { key: 'r', src: '/assets/r.png', alt: 'R' },
    { key: 'o', src: '/assets/o.png', alt: 'O' },
  ],
  [
    { key: 'f', src: '/assets/f.png', alt: 'F' },
    { key: 'o-silver', src: '/assets/o-silver.png', alt: 'O' },
    { key: 'r-silver', src: '/assets/r-silver.png', alt: 'R' },
    { key: 'm', src: '/assets/m.png', alt: 'M' },
    { key: 'a', src: '/assets/a.png', alt: 'A' },
  ],
]

type AnimatedLogoProps = {
  variant?: 'hero' | 'navbar'
}

export default function AnimatedLogo({ variant = 'hero' }: AnimatedLogoProps) {
  const activeRows = variant === 'navbar' ? [rows[0]] : rows
  const activeLetters = activeRows.flat()

  return (
    <div
      className={`animated-logo ${variant === 'navbar' ? 'animated-logo--navbar' : 'animated-logo--hero'}`}
      role="img"
      aria-label={variant === 'navbar' ? 'PF logo' : 'PF PRO FORMA logo'}
    >
      {activeRows.map((row, rowIndex) => (
        <div className="animated-logo-row" key={`row-${rowIndex}`}>
          {row.map((letter) => {
            const order = activeLetters.findIndex((item) => item.key === letter.key)

            return (
              <span className="animated-logo-letter-wrap" key={letter.key}>
                <img
                  className="animated-logo-letter"
                  src={letter.src}
                  alt={letter.alt}
                  style={{ animationDelay: `${order * 0.1}s` }}
                />
              </span>
            )
          })}
        </div>
      ))}
    </div>
  )
}
