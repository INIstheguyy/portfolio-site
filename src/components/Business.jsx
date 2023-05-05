import React from 'react'
import styles,{layout} from '../style'
import { features } from '../constants'
import Button from './Button'

function FeatureCard({icon, title, content, index}){
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index = features.length - 1 ? 'mb-6' :'mb-0'}`}>
      <div>
        <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
      </div>
    </div>
  )
}

function Business () {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,<br className=' sm:block hidden' /> we’ll handle the money.
        </h2>
        <p className={` mt-5 max-w-[470px] ${styles.paragraph}`}>
        With the right credit card, you can improve your financial life by building credit, 
        earning rewards and saving money. 
        But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10 rounded-md"/>
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <FeatureCard  key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business