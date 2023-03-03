import React from 'react'
import '../rate.css'

import GoodSVG from '../../../img/rate/good.svg'
export default function GoodRate() {
  return (
    <div className='call-rate'>
        <img src={GoodSVG} alt="good" />
        <div className='call-rate__good'>
            Хорошо
        </div>
    </div>
  )
}
