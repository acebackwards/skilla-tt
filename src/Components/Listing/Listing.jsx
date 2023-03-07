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
    
    const [showSortType, setShowSortType] = useState(false)
    // тип звонка 0 - исходящие, 1 - входящие, 2 - все звонки
    const [callType, setCallType] = useState(2)
    // тип сортировки, 0 - по умолчанию от новой даты к старой
    const [sortType, setSortType] = useState(0)

    // Set необходим для создания массива с уникальными датами
    let filteredDates = new Set()
    useEffect(() => {
        // получение всех звонков и запись их в массив + заполнение Set'a уникальными датами
        getList().then(data => {
            data.results.sort((a, b) => {
                let aSort = new Date(a.date)
                let bSort = new Date(b.date)
                if (aSort < bSort) return 1
                else return -1
            })
            setCalls(data.results)
            console.log(data.results[0].date)
            setTotalAmount(data.total_rows)
            data.results.forEach(item => {
            filteredDates.add(item.date_notime)
            setDateList(Array.from(filteredDates))
            })
        })
    }, [])

    // сортировка звонков по датам от старой к новой и наоборот
    // плюс сортировка списка уникальных дат в порядке возрастания и обратно
    function sortCalls(type) {
        let newCalls = JSON.parse(JSON.stringify(calls))
        if (type === 0) { 
            newCalls.sort((a, b) => {
                let aSort = new Date(a.date)
                let bSort = new Date(b.date)
                if (aSort < bSort) return 1
                else return -1
            }) 
            dateList.sort((a, b) => {
                let aSort = new Date(a)
                let bSort = new Date(b)
                if (aSort < bSort) return 1
                else return -1
            })
        } else {
            newCalls.sort((a, b) => {
                let aSort = new Date(a.date)
                let bSort = new Date(b.date)
                if (aSort < bSort) return -1
                else return 1
            })
            dateList.sort((a, b) => {
                let aSort = new Date(a)
                let bSort = new Date(b)
                if (aSort < bSort) return -1
                else return 1
            })
        }
        setSortType(type)
        setCalls(newCalls)
    }

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
                <div className='listing-options__item' onClick={() => setShowSortType(prev => !prev)}>
                    <div className={`listing-options__item-title ${showSortType && 'listing-options-active '}`}>
                        {sortType === 0 ? 'От новой к старой' : 'От старой к новой'}
                        {showSortType ? <DropdownSVG transform='rotate(180)'/> : <DropdownSVG />}
                    </div>
                    {showSortType && 
                    <div className='listing-options__menu'>
                        <div className='listing-options__menu-choose' onClick={() => sortCalls(0)}>
                            {'От новой к старой'}
                        </div>
                        <div className='listing-options__menu-choose' onClick={() => sortCalls(1)}>
                            {'От старой к новой'}
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
                    <div className="listing-item__title-duration">{'Длительность'}</div>
                </div>
                {dateList?.map(date => {
                    return <ListDay day={date} calls={calls} callType={callType} sortType={sortType}/>
                })}
            </div>
        </div>
    )
}
