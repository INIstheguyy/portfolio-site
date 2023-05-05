import React from 'react'
import { stats } from '../constants'
import styles from '../style'

function Stats  ()  {
  return (
    <section className={`${styles.flexCenter}`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-1 items-center justify-start flex-row ml-3`}>
          <span className=" font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stat.value}</span>
          <span className="font-poppins font-normal text-gradient uppercase ml-3 xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]">{stat.title}</span>
        </div>
      )
      )}
    </section>
  )
}

export default Stats