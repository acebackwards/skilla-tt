import React from 'react'
import GreatSVG from '../../../img/rate/great.svg'
import '../rate.css'

export default function GreatRate() {
  return (
    <div className='call-rate'>
        <img src={GreatSVG} alt="great" />
        <div className='call-rate__great'>
            Отлично
        </div>
    </div>
  )
}
