import React, { useEffect, useState } from 'react'
import { getDayList } from '../../Api/Api'
import ListItem from '../ListItem/ListItem'
import './ListDay.css'



export default function ListDay({day, calls}) {
  // console.log(day)
  const [totalAmount, setTotalAmount] = useState(0)
  let today = new Date()
  let now = today.toISOString().split('T')[0]

  useEffect(() => {
    getDayList(day)
    .then(data => setTotalAmount(() => data))
  }, [])
  function whichDay () {
    if (day === now) {
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
          return item.date_notime === day ? 
          <ListItem item={item}/> : null
        })}
        {/* <ListItem type={TypeSVG} avatar={AvatarSVG} employee={EmployeeSVG} rate={0}/>
        <ListItem type={TypeSVG} avatar={AvatarSVG} employee={EmployeeSVG} rate={1}/>
        <ListItem type={TypeSVG} avatar={AvatarSVG} employee={EmployeeSVG} rate={2}/>
        <ListItem type={TypeSVG} avatar={AvatarSVG} employee={EmployeeSVG} rate={3}/>
        <ListItem type={TypeSVG} avatar={AvatarSVG} employee={EmployeeSVG} rate={null}/> */}
    </div>
  )
}
