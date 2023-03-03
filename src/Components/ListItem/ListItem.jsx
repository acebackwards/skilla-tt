import React from 'react'
import GreatRate from '../Rate/GreatRate/GreatRate'
import GoodRate from '../Rate/GoodRate/GoodRate'
import BadRate from '../Rate/BadRate/BadRate'
import './ListItem.css'
import RecognizeRate from '../Rate/RecognizeRate/RecognizeRate'

export default function ListItem({type, avatar, employee, rate}) {
  return (
    <div className='listing-item listing-item-underline'>
        <div className="listing-item__title-type">
            <img src={type} alt='type'/>
        </div>
        <div className="listing-item__title-time">19:00</div>
        <div className="listing-item__title listing-item__title-avatar">
            <img src={avatar} alt='avatar'/>
        </div>
        <div className='listing-item__title-employee'>
            <img src={employee} alt='employee'/>
        </div>
        <div className="listing-item__title">+7 (987) 567-17-12</div>
        <div className="listing-item__title">Rabota.ru</div>
        <div className="listing-item__title">
          {rate === 1 ? 
          <BadRate/> : rate === 2 ? 
          <GoodRate/> : rate === 3 ? 
          <GreatRate/> : rate === 0 ? 
          <div className='call-rate-none'>
            Скрипт не использован
          </div> : <RecognizeRate/>}
        </div>
        <div className="listing-item__title-duration">12:06</div>
    </div>
  )
}
