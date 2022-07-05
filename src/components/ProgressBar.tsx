import React from 'react'

interface ProgressBarProps {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div>
      <div style={{ backgroundColor: 'var(--bs-white)', height: 6, position: 'relative' }}>
        <div className='bg-primary-gradient' style={{ width: `${value}%`, height: 6 }}></div>
        <div className='rounded-circle bg-primary-gradient position-absolute d-flex align-items-center justify-content-center' style={{ height: 38, width: 38, left: `${value}%`, transform: 'translateY(-55%)', fontSize: 12 }}>
          {value}%
        </div>
      </div>
    </div>
  )
}
