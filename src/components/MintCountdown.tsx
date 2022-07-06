import React from 'react'
import classNames from 'classnames';
import Countdown from 'react-countdown';

interface MintCountdownProps {
  date?: Date,
  label: string,
  position: 'left' | 'right',
  color: 'grey' | 'primary'
}

export default function MintCountdown(props: MintCountdownProps) {
  const buttonStyleBase = {
    borderTopLeftRadius: '.5rem',
    borderTopRightRadius: '.5rem',
    height: 100,
    width: 150
  };

  const buttonStyleLeft = {
    ...buttonStyleBase,
    borderBottomRightRadius: '.5rem',
    borderBottomLeftRadius: '2rem',
  };

  const buttonStyleRight = {
    ...buttonStyleBase,
    borderBottomRightRadius: '2rem',
    borderBottomLeftRadius: '.5rem',
  }

  const time = {
    hour: (props.date?.getHours() || 0 < 10 ? '0' : '') + props.date?.getHours(),
    minute: (props.date?.getMinutes() || 0 < 10 ? '0' : '') + props.date?.getMinutes(),
    second: (props.date?.getSeconds() || 0 < 10 ? '0' : '') + props.date?.getSeconds(),
  }

  const btnClassNames = classNames(
    'd-flex',
    'align-items-center',
    'justify-content-center',
    {
      'bg-dark': props.color === 'grey',
      'bg-primary-gradient': props.color === 'primary'
    }
  )

  return (
    <div className={btnClassNames} style={props.position === 'left' ? buttonStyleLeft : buttonStyleRight}>
      <div className='text-center'>
        <div className="fw-bold">{props.label}</div>
        {!props.date ? (
          <div>ENDED</div>
        ) : (
          <Countdown date={props.date}/>
          // <div className='d-flex' style={{ gap: 10 }}>
          //   <div>
          //     <div>{time.hour}</div>
          //     <div style={{ fontSize: 10 }}>Hour</div>
          //   </div>
          //   <div>:</div>
          //   <div>
          //     <div>{time.minute}</div>
          //     <div style={{ fontSize: 10 }}>Mins</div>
          //   </div>
          //   <div>:</div>
          //   <div>
          //     <div>{time.second}</div>
          //     <div style={{ fontSize: 10 }}>Secs</div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  )
}
