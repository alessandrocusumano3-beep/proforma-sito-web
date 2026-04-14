import { useMemo, useState } from 'react'

const daisies = Array.from({ length: 100 }, (_, index) => index + 1)

interface DaisyBoardProps {
  rewards: Array<{ points: number; reward: string }>
}

export function DaisyBoard({ rewards }: DaisyBoardProps) {
  const [filledDaisies, setFilledDaisies] = useState<number[]>([])
  const rewardPoints = useMemo(() => new Set(rewards.map((item) => item.points)), [rewards])

  const filledCount = filledDaisies.length
  const sortedFilled = useMemo(
    () => [...filledDaisies].sort((a, b) => a - b),
    [filledDaisies],
  )

  const toggleDaisy = (daisy: number) => {
    setFilledDaisies((prev) =>
      prev.includes(daisy) ? prev.filter((item) => item !== daisy) : [...prev, daisy],
    )
  }

  const markNextEntry = () => {
    const next = daisies.find((daisy) => !filledDaisies.includes(daisy))
    if (!next) return
    setFilledDaisies((prev) => [...prev, next])
  }

  const removeLastEntry = () => {
    if (sortedFilled.length === 0) return
    const last = sortedFilled[sortedFilled.length - 1]
    setFilledDaisies((prev) => prev.filter((item) => item !== last))
  }

  return (
    <section className="section-card daisy-section">
      <div className="section-title-banner">TABELLA PUNTI A MARGHERITE</div>
      <p className="daisy-subtitle">
        Ogni partecipazione ti fa avanzare: compila le margherite e sblocca i
        premi.
      </p>
      <p className="daisy-counter">Ingressi segnati: {filledCount}/100</p>

      <div className="daisy-actions">
        <button className="daisy-action-button" onClick={markNextEntry}>
          + Segna ingresso
        </button>
        <button className="daisy-action-button secondary" onClick={removeLastEntry}>
          - Rimuovi ultimo
        </button>
      </div>

      <div className="daisy-layout">
        <div className="daisy-grid">
          {daisies.map((daisy) => {
            const isFilled = filledDaisies.includes(daisy)
            const isRewardPoint = rewardPoints.has(daisy)

            return (
              <button
                key={daisy}
                type="button"
                className={`daisy ${isFilled ? 'is-filled' : ''} ${isRewardPoint ? 'is-reward-point' : ''}`}
                onClick={() => toggleDaisy(daisy)}
                aria-label={`Margherita ${daisy}${isRewardPoint ? ', punto premio' : ''}`}
              >
                <span className="daisy-flower" aria-hidden="true">
                  🌼
                </span>
                <span className="daisy-number">{daisy}</span>
              </button>
            )
          })}
        </div>

        <div className="milestones">
          {rewards.map((item) => (
            <p
              key={item.points}
              className={`milestone ${item.points === 100 ? 'milestone-special' : ''}`}
            >
              <span className="milestone-points">{item.points} punti</span> - {item.reward}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
