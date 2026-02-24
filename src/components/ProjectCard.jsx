import React from 'react'
export default function ProjectCard({project}){
  function openDetails(){
    // show details — simple alert for now
    alert(`${project.title}\n\n${project.description}\n\nИнструменты: ${project.tools.join(', ')}\nСрок: ${project.time}`)
  }
  return (
    <div>
      <img className="project-img" src={project.image} alt={project.title} />
      <div style={{marginTop:8}}>
        <div style={{fontWeight:700}}>{project.title}</div>
        <div className="muted">{project.category}</div>
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button className="btn" onClick={openDetails}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}
