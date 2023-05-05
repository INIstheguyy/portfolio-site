import React from 'react'
import styles  from '../style'
import { arrowUp  } from '../assets'
import './component.css'

function  Getstarted()  {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[99%] h-[99%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row `}>
          <p className='font-poppins font-medium text-[18px] leading[23px]'>
            <span className="text-gradient">Get</span>
          </p>   
          <img src={arrowUp} alt="" className='w-[23px] [23px] object-contain'/>
          <p className='font-poppins font-medium text-[18px] leading[23px]'>
          <span className="text-gradient">Started</span>
        </p> 
        </div>
      </div>  
    </div>
  )
}

export default Getstarted