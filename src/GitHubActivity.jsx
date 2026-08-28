import { useState, useEffect, useRef } from 'react'

const USERNAME = 'Real-devalex'

function generateFallbackData() {
  const weeks = []
  const today = new Date()
  const startDate = new Date(today)
  startDate.setDate(startDate.getDate() - 364)
  startDate.setDate(startDate.getDate() - startDate.getDay())

  for (let w = 0; w < 52; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + w * 7 + d)
      if (date > today) {
        week.push({ date: date.toISOString().slice(0, 10), count: 0, future: true })
      } else {
        const dayOfWeek = date.getDay()
        const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5
        const month = date.getMonth()
        const isRecentBurst = month >= 7
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
  const [weeks] = useState(() => generateFallbackData())
  const [totalContributions, setTotalContributions] = useState(0)
  const [hoveredDay, setHoveredDay] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    let total = 0
    for (const week of weeks) {
      for (const day of week) {
        if (!day.future) total += day.count
      }
    }
    setTotalContributions(total)
  }, [weeks])

  // Animate in when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Build month label positions
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthLabels = []
  let lastMonth = -1
  for (let w = 0; w < weeks.length; w++) {
    const month = new Date(weeks[w][0].date).getMonth()
    if (month !== lastMonth) {
      monthLabels.push({ week: w, label: months[month] })
      lastMonth = month
    }
  }

  return (
    <div ref={ref} className={`github-activity ${isVisible ? 'visible' : ''}`}>
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

      <div className="contribution-graph-wrapper">
        {/* Month labels row */}
        <div className="graph-top-row">
          <div className="day-label-spacer" />
          <div className="month-labels-row">
            {monthLabels.map(({ week, label }) => (
              <span
                key={`${label}-${week}`}
                className="month-label"
                style={{ left: `${week * 17}px` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Grid + day labels */}
        <div className="graph-main-row">
          <div className="day-labels-col">
            <span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>
          </div>
          <div className="contribution-grid">
            {weeks.map((week, w) => (
              <div
                key={w}
                className="contribution-week"
                style={{ animationDelay: `${w * 15}ms` }}
              >
                {week.map((day, d) => (
                  <div
                    key={d}
                    className={`contribution-day ${day.future ? 'future' : ''}`}
                    style={{
                      backgroundColor: day.future ? '#161b22' : levelColors[getLevel(day.count)],
                      animationDelay: `${(w * 7 + d) * 2}ms`,
                    }}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div className="contribution-tooltip-inline">
            <strong>{hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}</strong>
            <span>{new Date(hoveredDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        )}
      </div>

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
