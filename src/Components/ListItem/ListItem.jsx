import React from 'react'
import GreatRate from '../Rate/GreatRate/GreatRate'
import GoodRate from '../Rate/GoodRate/GoodRate'
import BadRate from '../Rate/BadRate/BadRate'
import './ListItem.css'
import RecognizeRate from '../Rate/RecognizeRate/RecognizeRate'

import IncomingSVG from '../../img/type/incoming.svg'
import OutgoingSVG from '../../img/type/outgoing.svg'
import IncomingDecSVG from '../../img/type/incoming-declined.svg'
import OutgoingDecSVG from '../../img/type/outgoing-declined.svg'

import EmployeeSVG from '../../img/employee.svg'

export default function ListItem({item}) {
  return (
    <div className='listing-item listing-item-underline'>
        <div className="listing-item__title-type">
          {item.in_out === 1 && item.status === 'Дозвонился' ? <img src={IncomingSVG} alt='type'/> : 
          item.in_out === 1 && item.status === 'Не дозвонился' ? <img src={IncomingDecSVG} alt='type'/> : 
          item.in_out === 0 && item.status === 'Дозвонился' ? <img src={OutgoingSVG} alt='type'/> : 
          item.in_out === 0 && item.status === 'Не дозвонился' ? <img src={OutgoingDecSVG} alt='type'/> : null}
        </div>
        <div className="listing-item__title-time">{item.date.split(' ')[1].slice(0, -3)}</div>
        <div className="listing-item__title listing-item__title-avatar">
            <img src={item.person_avatar} alt='avatar'/>
        </div>
        <div className='listing-item__title-employee'>
          {item.is_skilla ? <img src={EmployeeSVG} alt='employee'/> : null}
        </div>
        <div className="listing-item__title">
          <div>{item.partner_data.name}</div>
          <div>{item.partner_data.phone}</div>
        </div>
        <div className="listing-item__title">Rabota.ru</div>
        <div className="listing-item__title">
          {/* {rate === 1 ? 
          <BadRate/> : rate === 2 ? 
          <GoodRate/> : rate === 3 ? 
          <GreatRate/> : rate === 0 ?  */}
          {/* <div className='call-rate-none'>
            Скрипт не использован
          </div> : <RecognizeRate/>} */}
        </div>
        <div className="listing-item__title-duration">12:06</div>
    </div>
  )
}
