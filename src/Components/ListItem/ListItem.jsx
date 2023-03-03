import React, {useState} from 'react'
import './ListItem.css'

import AudioTrack from '../../audio/1.mp3'

import IncomingSVG from '../../img/type/incoming.svg'
import OutgoingSVG from '../../img/type/outgoing.svg'
import IncomingDecSVG from '../../img/type/incoming-declined.svg'
import OutgoingDecSVG from '../../img/type/outgoing-declined.svg'


// audio svg
import {ReactComponent as CloseSVG} from '../../img/audio/close.svg'
import {ReactComponent as DownloadSVG} from '../../img/audio/download.svg'
import PlaySVG from '../../img/audio/play.svg'
import PauseSVG from '../../img/audio/pause.svg'

import GreatRate from '../Rate/GreatRate/GreatRate'
import RecognizeRate from '../Rate/RecognizeRate/RecognizeRate'
import EmployeeSVG from '../../img/employee.svg'

export default function ListItem({item}) {
  const [showRecord, setShowRecord] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [durationAudio, setDurationAudio] = useState('')
  const [rate, setRate] = useState(null)

  // call rate 
  function callRate () {
    console.log(item.errors) 
    if (item.errors.length === 1) {
      return <div className='call-rate-none'>
            Скрипт не использован
          </div>
    } else {
      return <RecognizeRate/>
    }
  }
  // total audio duration
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    setDurationAudio(`${minutes}:${returnedSeconds}`)
  }

  // click to play audio
  function playAudio() {
    let audio = document.getElementById('audio')
    let time = document.querySelector('.listing-item__record-time')
    
    audio.play()
    calculateTime(audio.duration)

    setInterval(function() {
      let audioTime = Math.round(audio.currentTime)
      // Получаем всё время песни
      let audioLength = Math.round(audio.duration)
        // Назначаем ширину элементу time
        time.style.width = (audioTime * 100) / audioLength + '%';
    }, 10)
  }
  // click to pause audio
  function pauseAudio() {
    let audio = document.getElementById('audio')
    audio.pause()
  }

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
          {item.person_avatar ? <img src={item.person_avatar} alt='avatar'/> : null}
        </div>
        <div className='listing-item__title-employee'>
          {item.is_skilla ? <img src={EmployeeSVG} alt='employee'/> : null}
        </div>
        <div className="listing-item__title-partner">
          <div><nobr>{item.partner_data.name}</nobr></div>
          <div className='listing-item__title-partner__secondary'>+{item.partner_data.phone[0]} ({item.partner_data.phone.slice(1,4)}) {item.partner_data.phone.slice(4,7)}-
          {item.partner_data.phone.slice(7, 9)}-{item.partner_data.phone.slice(9, 11)}</div>
        </div>
        <div className="listing-item__title">{item.source === 'yandex' ? 'Yandex' : item.source === 'google' ? 'Google' : item.source}</div>
        <div className="listing-item__title">
          {callRate()}
        </div>
        <div className="listing-item__title-duration">
          {showRecord ?
            <div className='listing-item__record'> 
              <div className='listing-item__record-track'><div className="listing-item__record-time"></div></div>
              <span className='listing-item__record-duration'>{durationAudio}</span>
              {isPlaying ? 
                <span className='listing-item__record-play' onClick={() => {pauseAudio()
              setIsPlaying(false)}}>
                <img src={PauseSVG} alt="" />
              </span>
               :
              <span className='listing-item__record-play' onClick={() => {playAudio()
              setIsPlaying(true)}}>
                <img src={PlaySVG} alt="" />
              </span>}
              <audio id='audio'>
                <source src={AudioTrack}/>
              </audio>
              <span className='listing-item__control-button'>
                <DownloadSVG/>
              </span>
              <span className='listing-item__control-button' onClick={() => setShowRecord(prev => !prev)}>
                <CloseSVG/>
              </span>
            </div> :
            <div className='listing-item__title-duration-time' onClick={() => setShowRecord(prev => !prev)}>12:06</div>
          }
        </div>
    </div>
  )
}
