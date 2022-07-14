import React from 'react'

interface ProgressBarProps {
  value: number,
  max?: number,
  version?: 1 | 2
}

export default function ProgressBar({ value, max = 100, version = 2 }: ProgressBarProps) {
  const percentage = value / max * 100;

  if (version === 1) return (
    <div>
      <div style={{ backgroundColor: 'var(--bs-white)', height: 6, position: 'relative' }}>
        <div className='bg-primary-gradient' style={{ width: `${percentage}%`, height: 6 }}></div>
        <div className='rounded-circle bg-primary-gradient position-absolute d-flex align-items-center justify-content-center fw-bold' style={{ height: 38, width: 38, left: `${percentage}%`, transform: 'translateY(-55%)', fontSize: 12 }}>
          {value.toFixed(2)}%
        </div>
      </div>
    </div>
  );

  else return (
    <div>
      <div className='d-flex justify-content-between align-items-center fw-bold mb-3'>
        <div>Total Items</div>
        <div>
          <span className="me-2">{percentage.toFixed()}%</span>
          <span className="text-muted">({value}/{max})</span>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--bs-white)', height: 6, position: 'relative' }}>
        <div className="bg-primary-gradient" style={{ width: `${percentage}%`, height: 6 }}></div>
      </div>
    </div>
  );
}
