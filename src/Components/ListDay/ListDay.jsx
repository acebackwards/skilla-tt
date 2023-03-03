import React from 'react'
import ListItem from '../ListItem/ListItem'
import './ListDay.css'



export default function ListDay({day, calls, totalAmount}) {
  // console.log(day)
  let today = new Date()
  let now = today.toISOString().split('T')[0]

  return (
    <div>
        {day === now ? null : day === 1 ? 
        <div className='list-day'>
            вчера
            <div className='list-day__amount'>67</div>
        </div> : null}
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
