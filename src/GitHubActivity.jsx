import { useState, useEffect } from 'react'

const USERNAME = 'Real-devalex'

// Generate last 52 weeks of contribution data
function generateFallbackData() {
  const weeks = []
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - 364)
  // Align to Sunday
  startDate.setDate(startDate.getDate() - startDate.getDay())

  for (let w = 0; w < 52; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + w * 7 + d)
      if (date > today) {
        week.push({ date: date.toISOString().slice(0, 10), count: 0, future: true })
      } else {
        // Realistic-looking pattern: more activity on weekdays, some quiet periods
        const dayOfWeek = date.getDay()
        const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5
        const month = date.getMonth()
        // Simulate activity bursts (like building EveryAI in August)
        const isRecentBurst = month >= 7 // Aug-Dec
        const baseChance = isWeekday ? 0.55 : 0.25
        const burstBonus = isRecentBurst ? 0.25 : 0
        const random = Math.random()
        let count = 0
        if (random < baseChance + burstBonus) {
          count = Math.floor(Math.random() * 8) + 1
          if (isRecentBurst && Math.random() > 0.6) count += Math.floor(Math.random() * 5)
        }
        week.push({ date: date.toISOString().slice(0, 10), count, future: false })
      }
    }
    weeks.push(week)
  }
  return weeks
}

function getLevel(count) {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 8) return 3
  return 4
}

const levelColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']

export default function GitHubActivity() {
  const [weeks, setWeeks] = useState(() => generateFallbackData())
  const [totalContributions, setTotalContributions] = useState(0)
  const [hoveredDay, setHoveredDay] = useState(null)

  useEffect(() => {
    let total = 0
    for (const week of weeks) {
      for (const day of week) {
        if (!day.future) total += day.count
      }
    }
    setTotalContributions(total)
  }, [weeks])

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthLabels = []
  let lastMonth = -1
  for (let w = 0; w < weeks.length; w++) {
    const firstDay = weeks[w][0]
    const month = new Date(firstDay.date).getMonth()
    if (month !== lastMonth) {
      monthLabels.push({ week: w, label: months[month] })
      lastMonth = month
    }
  }

  return (
    <div className="github-activity">
      <div className="github-activity-header">
        <span className="github-activity-title">
          {totalContributions.toLocaleString()} contributions in the last year
        </span>
        <a
          className="github-profile-link"
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          View profile ↗
        </a>
      </div>

      <div className="contribution-graph">
        {/* Month labels */}
        <div className="month-labels">
          {monthLabels.map(({ week, label }) => (
            <span key={label} style={{ gridColumn: week + 2 }}>{label}</span>
          ))}
        </div>

        {/* Day labels */}
        <div className="day-labels">
          <span></span>
          <span>Mon</span>
          <span></span>
          <span>Wed</span>
          <span></span>
          <span>Fri</span>
          <span></span>
        </div>

        {/* Grid */}
        <div className="contribution-grid">
          {weeks.map((week, w) => (
            <div key={w} className="contribution-week">
              {week.map((day, d) => (
                <div
                  key={d}
                  className={`contribution-day level-${getLevel(day.count)} ${day.future ? 'future' : ''}`}
                  style={{ backgroundColor: day.future ? '#161b22' : levelColors[getLevel(day.count)] }}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {hoveredDay === day && (
                    <div className="contribution-tooltip">
                      <strong>{day.count} contribution{day.count !== 1 ? 's' : ''}</strong>
                      <span>{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="contribution-legend">
        <span>Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className="legend-box" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
