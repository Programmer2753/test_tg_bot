import React from 'react'
import gallery from '../data/gallery.json'
import ProjectCard from './ProjectCard'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Gallery(){
  return (
    <div className="card">
      <h3>Галерея работ</h3>
      <div className="muted">Листай свайпом — нажми «Подробнее» для кейса</div>
      <div className="swiper">
        <Swiper spaceBetween={12} slidesPerView={'auto'}>
          {gallery.map(p => (
            <SwiperSlide key={p.id} style={{width:320}}>
              <ProjectCard project={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
