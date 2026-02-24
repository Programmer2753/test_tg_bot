import React from 'react'
import { SOCIAL_LINKS } from '../config'

export default function About(){
  return (
    <div className="card">
      <h3>Обо мне</h3>
      <p>Привет — я Rivaldsg, дизайнер. Работаю с логотипами, брендингом и рекламой. Портфолио — в галерее.</p>
      <div className="socials">
        {SOCIAL_LINKS.map(s=>(
          <a key={s.name} className="social-link" href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
        ))}
      </div>
    </div>
  )
}
