import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedbackcard from './Feedbackcard'

const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>Our Team</h1>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card)=>(
          <Feedbackcard key={card.id} {...card} />
        ))}
      </div>
    </section>
)


export default Testimonials