import React from 'react'

interface PropsInterface {
  title: string,
  desc: string,
  icon: string,
  iconBottom?: boolean
}

export default function CardRoadmap({ title, desc, icon, iconBottom = false }: PropsInterface) {
  return (
    <div className='p-4' style={{ borderRadius: '1rem', backgroundColor: '#55525255', width: 550, position: 'relative', overflow: 'hidden' }}>
      <div className="d-flex justify-content-between align-items-center mb-4 position-relative" style={{ zIndex: 100 }}>
        <div className='rounded-circle' style={{ border: 'solid 3px white', width: 28, height: 28 }}></div>
        <div className='text-end fw-bold' style={{ fontSize: '1.5rem' }}>{title}</div>
      </div>
      <div className='text-end position-relative' style={{ marginRight: 130, zIndex: 100 }}>{desc}</div>

      {/* bg-circle */}
      <div className='rounded-circle' style={{ backgroundColor: '#0A0A0A', width: 320, height: 320, position: 'absolute', bottom: '-10%', right: '-20%' }}></div>
      <img src={icon} alt="" style={{ position: 'absolute', right: iconBottom ? 10 : 30, bottom: iconBottom ? 0 : 20, height: iconBottom ? 130 : 100 }} />
    </div>
  )
}
