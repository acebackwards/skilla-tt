import React from 'react'
import './Menu.css'
import Logo from '../../img/skilla.svg'

// menu svg 
import ResultSVG from '../../img/menu/result.svg'
import OrderSVG from '../../img/menu/order.svg'
import MessageSVG from '../../img/menu/message.svg'
import CallSVG from '../../img/menu/call.svg'
import AgentSVG from '../../img/menu/agent.svg'
import DocumentSVG from '../../img/menu/document.svg'
import ExecutorSVG from '../../img/menu/executor.svg'
import ReportSVG from '../../img/menu/report.svg'
import LibrarySVG from '../../img/menu/library.svg'
import SettingSVG from '../../img/menu/setting.svg'

import NewSVG from '../../img/menu/new.svg'
import AddSVG from '../../img/menu/add.svg'
import AlertSVG from '../../img/menu/alert.svg'

export default function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <div className="menu-button">
        <div>
          <img src={ResultSVG} alt='results'/>
          Итоги
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={OrderSVG} alt="orders" />
          Заказы
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={MessageSVG} alt="" />
          Сообщения
        </div>
      </div>
      <div className="menu-button menu-button__active">
        <div>
          <img src={CallSVG} alt="" />
          Звонки
        </div>
        <img src={NewSVG} alt="new" className='menu-button__new'/>
      </div>
      <div className="menu-button">
        <div>
          <img src={AgentSVG} alt="" />
          Контрагенты
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={DocumentSVG} alt="" />
          Документы
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={ExecutorSVG} alt="" />
          Исполнители
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={ReportSVG} alt="" />
          Отчеты
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={LibrarySVG} alt="" />
          База знаний
        </div>
      </div>
      <div className="menu-button">
        <div>
          <img src={SettingSVG} alt="" />
          Настройки
        </div>
      </div>

      <div className='menu-extra'>
        <button className='menu-extra-button'>
          <div>
            Добавить заказ
          </div>
          <img src={AddSVG} alt="add" />
        </button>
        <button className='menu-extra-button'>
          <div>
            Оплата
          </div>
          <img src={AlertSVG} alt="add" />
        </button>
      </div>
    </div>
  )
}
