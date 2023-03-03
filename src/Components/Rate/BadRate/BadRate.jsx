import React from 'react'
import '../rate.css'

import BadSVG from '../../../img/rate/bad.svg'
export default function GoodRate() {
  return (
    <div className='call-rate'>
        <img src={BadSVG} alt="bad" />
        <div className='call-rate__bad'>
            Плохо
        </div>
    </div>
  )
}
