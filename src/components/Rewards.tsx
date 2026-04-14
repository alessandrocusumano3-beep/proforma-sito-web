export interface RewardItem {
  points: number
  reward: string
}

interface RewardsProps {
  rewards: RewardItem[]
}

export function Rewards({ rewards }: RewardsProps) {
  const leftRewards = rewards.slice(0, 4)
  const rightRewards = rewards.slice(4)

  return (
    <section className="section-card">
      <div className="section-title-banner">PREMI GARA DI PRIMAVERA</div>
      <div className="rewards-table">
        <div className="rewards-column">
          {leftRewards.map((reward) => (
            <p
              key={reward.points}
              className={`reward-row ${reward.points === 100 ? 'reward-row-special' : ''}`}
            >
              <span className="reward-points">{reward.points} punti</span> - {reward.reward}
              {reward.points === 100 ? <span className="reward-special-badge">TOP</span> : null}
            </p>
          ))}
        </div>
        <div className="rewards-column">
          {rightRewards.map((reward) => (
            <p
              key={reward.points}
              className={`reward-row ${reward.points === 100 ? 'reward-row-special' : ''}`}
            >
              <span className="reward-points">{reward.points} punti</span> - {reward.reward}
              {reward.points === 100 ? <span className="reward-special-badge">TOP</span> : null}
            </p>
          ))}
        </div>
      </div>
      <p className="final-note">Più punti accumuli -&gt; Più il premio cresce</p>
    </section>
  )
}
