import React, { useEffect, useState } from 'react'
import './Listing.css'
import ListDay from '../ListDay/ListDay'
import { getList } from '../../Api/Api'


// const getDate = () => {
//   let today = new Date()
//   let now = today.toISOString().split('T')[0]
//   console.log(now)
// }
// getDate()

export default function Listing() {
  const [calls, setCalls] = useState([])
  const [dateList, setDateList] = useState([])
  
  let filteredDates = new Set()
  useEffect(() => {
    getList().then(data => {
      setCalls(data.results)
      data.results.map(item => {
        filteredDates.add(item.date_notime)
        setDateList(Array.from(filteredDates))
      })
    })
  }, [])
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
            {dateList?.map(date => {
              return <ListDay day={date} calls={calls}/>
            })}
        </div>
    </div>
  )
}
