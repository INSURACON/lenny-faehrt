const attachMissionToggle = () => {
  const card = document.querySelector('.mission-card')
  if (!card || card.querySelector('.mission-toggle')) return

  const toggle = document.createElement('button')
  toggle.type = 'button'
  toggle.className = 'mission-toggle'
  toggle.setAttribute('aria-expanded', 'true')
  toggle.textContent = 'ÜBUNGEN AUSBLENDEN'

  const update = (collapsed) => {
    card.classList.toggle('is-collapsed', collapsed)
    toggle.setAttribute('aria-expanded', String(!collapsed))
    toggle.textContent = collapsed ? 'ÜBUNGEN' : 'ÜBUNGEN AUSBLENDEN'
  }

  toggle.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    update(!card.classList.contains('is-collapsed'))
  })
  card.append(toggle)
}

attachMissionToggle()
new MutationObserver(attachMissionToggle).observe(document.body, { childList: true, subtree: true })
