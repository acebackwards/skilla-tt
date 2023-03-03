import React from 'react'
import './Listing.css'
import ListItem from '../ListItem/ListItem'
import ListDay from '../ListDay/ListDay'




export default function Listing() {
  return (
    <div className='container listing-container'>
        <div className='listing-content'>
            <div className='listing-item'>
                <div className="listing-item__title">Тип</div>
                <div className="listing-item__title">Время</div>
                <div className="listing-item__title">Сотрудник</div>
                <div className="listing-item__title" />
                <div className="listing-item__title">Звонок</div>
                <div className="listing-item__title">Источник</div>
                <div className="listing-item__title">Оценка</div>
                <div className="listing-item__title-duration">Длительность</div>
            </div>
            <ListDay day={0}/>
            <ListDay day={1}/>
        </div>
    </div>
  )
}
