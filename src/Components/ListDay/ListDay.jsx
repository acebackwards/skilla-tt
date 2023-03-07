import React, { useEffect, useState } from 'react'
import { getDayList } from '../../Api/Api'
import ListItem from '../ListItem/ListItem'
import './ListDay.css'



const ListDay = ({day, calls, callType, sortType}) => {
    // количество звонков в определенный день 
    const [totalAmount, setTotalAmount] = useState(0)

    // сегодняшняя дата
    let today = new Date()
    let now = today.toISOString().split('T')[0]

    // при изменении массива звонков (как например сортировка) - общее колво звонков
    useEffect(() => {
        getDayList(day)
        .then(data => setTotalAmount(() => data))
    }, [calls])

    // заголовок для листинга звонков по дням 
    // если текущая дата совпадает с датой звонка - заголовок не отображается
    const whichDay = () => {
        if (day === now && sortType === 1) {
            return <div className='list-day'>
                сегодня
                <div className='list-day__amount'>{totalAmount ? totalAmount : null}</div>
            </div>
        } else if (day === now) {
            return null
        } else if ((new Date(now) - new Date(day)) / (1000 * 60 * 60 * 24) === 1) {
            return <div className='list-day'>
          вчера
          <div className='list-day__amount'>{totalAmount ? totalAmount : null}</div>
        </div>
      } else {
        return <div className='list-day'>
        {new Date(day).toLocaleString('ru', 
        {
          day: 'numeric',
          month: 'long'
        })}
        <div className='list-day__amount'>{totalAmount ? totalAmount : null}</div>
      </div>
      }
    }
    return (
        <div>
            {whichDay()} 
            {calls.map((item) => {
                if (item.date_notime === day && item.in_out === callType) {
                      return <ListItem item={item}/>
                } else if (item.date_notime === day && callType === 2) {
                    return <ListItem item={item}/>
                }
            })}
        </div>
    )
}

export default ListDay