import React, { useEffect, useState } from 'react'
import './Listing.css'
import ListDay from '../ListDay/ListDay'
import { getList } from '../../Api/Api'
import { ReactComponent as DropdownSVG } from '../../img/options/dropdown.svg'

export default function Listing() {

    // содержит массив всех звонков
    const [calls, setCalls] = useState([])
    // содержит список уникальных дат для листинга по датам
    const [dateList, setDateList] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    // состояние дропдаун меню - true, если открыто
    const [showCallType, setShowCallType] = useState(false)
    // тип звонка 0 - исходящие, 1 - входящие, 2 - все звонки
    const [callType, setCallType] = useState(2)

    // Set необходим для создания массива с уникальными датами
    let filteredDates = new Set()
    useEffect(() => {
        // получение всех звонков и запись их в массив + заполнение Set'a уникальными датами
        getList().then(data => {
            setCalls(data.results)
            setTotalAmount(data.total_rows)
            data.results.map(item => {
            filteredDates.add(item.date_notime)
            setDateList(Array.from(filteredDates))
            })
    })
    }, [])
    return (
        <div className='container listing-container'>
            <div className='listing-options'>
                <div className='listing-options__item' onClick={() => setShowCallType(prev => !prev)}>
                    <div className={`listing-options__item-title ${showCallType && 'listing-options-active '}`}>
                        {callType === 0 ? 'Исходящие' : callType === 1 ? 'Входящие' : 'Все типы'}
                        {showCallType ? <DropdownSVG transform='rotate(180)'/> : <DropdownSVG />}
                    </div>
                    {showCallType && 
                    <div className='listing-options__menu'>
                        <div className='listing-options__menu-choose' onClick={() => setCallType(2)}>
                            {'Все типы'}
                        </div>
                        <div className='listing-options__menu-choose' onClick={() => setCallType(1)}>
                            {'Входящие'}
                        </div>
                        <div className='listing-options__menu-choose' onClick={() => setCallType(0)}>
                            {'Исходящие'}
                        </div>
                    </div> }
                </div>
            </div>
            <div className='listing-content'>
                <div className='listing-item'>
                    <div className="listing-item__title">{'Тип'}</div>
                    <div className="listing-item__title">{'Время'}</div>
                    <div className="listing-item__title">{'Сотрудник'}</div>
                    <div className="listing-item__title" />
                    <div className="listing-item__title">{'Звонок'}</div>
                    <div className="listing-item__title">{'Источник'}</div>
                    <div className="listing-item__title">{'Оценка'}</div>
                    <div className="listing-item__title-duration">Длительность</div>
                </div>
                {dateList?.map(date => {
                    return <ListDay day={date} calls={calls} callType={callType}/>
                })}
            </div>
        </div>
    )
}
