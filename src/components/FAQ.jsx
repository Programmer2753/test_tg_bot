import React from 'react'
export default function FAQ(){
  const faqs = [
    {q:'Как проходит работа?', a:'Сначала бриф, затем согласование концепций, правки и финальная отрисовка.'},
    {q:'Какие файлы я получу?', a:'AI, EPS, PNG, JPG, PDF по договорённости.'}
  ]
  return (
    <div className="card">
      <h3>FAQ / Полезные советы</h3>
      {faqs.map((f,i)=>(
        <div key={i} style={{marginTop:8}}>
          <div style={{fontWeight:700}}>{f.q}</div>
          <div className="muted">{f.a}</div>
        </div>
      ))}
    </div>
  )
}

