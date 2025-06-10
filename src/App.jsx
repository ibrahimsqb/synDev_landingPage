<<<<<<< HEAD
import React from 'react'
import styles from './style'

import { Navbar, Hero, Stats, Business, Billing, CD, Testimonials,
   Client, CTA, Footer } from './components'

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CD />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
)



export default App
=======
import React from "react";
import styles from "./style";

import { Navbar, Hero, Stats, Business, Billing, CD, Testimonials, Client, CTA, Footer } from "./components";
import Reviews from "./components/Reviews";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Billing />
        <CD />
        <Testimonials />
        <Business />
        <Reviews />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
>>>>>>> 954e9f4 (Reviews Added)
