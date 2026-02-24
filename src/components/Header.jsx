import React from 'react'

export default function Header({theme, setTheme}){
  return (
    <div className="header">
      <div className="logo">
        <div className="dot" />
        <div>
          <div className="h1">Rivaldsg — Designer</div>
          <div className="muted">Логотипы · Брендинг · Постеры</div>
        </div>
      </div>
      <div className="controls">
        <button className="icon-btn" title="Переключить тему" onClick={()=>{
          setTheme(prev => prev === 'alt' ? 'default' : 'alt')
        }}>🌗</button>
        <button className="icon-btn" title="Закрыть" onClick={()=>window.Telegram?.WebApp?.close()}>✖</button>
      </div>
    </div>
  )
}
