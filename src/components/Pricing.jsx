import React from 'react'
export default function Pricing(){
  const items = [
    {title:'Логотип', price:'от 150$', time:'5-7 дней'},
    {title:'Фирменный стиль', price:'от 400$', time:'10-14 дней'},
    {title:'Оформление соцсетей', price:'от 120$', time:'3-5 дней'}
  ]
  return (
    <div className="card">
      <h3>Прайс-лист</h3>
      <div className="muted">Примерные цены и сроки</div>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        {items.map(i=>(
          <div key={i.title} className="card" style={{minWidth:200}}>
            <div style={{fontWeight:700}}>{i.title}</div>
            <div className="muted">{i.price}</div>
            <div className="muted" style={{marginTop:8}}>{i.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
