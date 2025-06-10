import React from "react";
import styles from "../style";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contact Us!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <b>Address:</b>&nbsp;<span style={{ color: "#45cbd9" }}>First floor Plaza # 14, 6 Sector G13/1, Sunset Boulevard, Malibu phase 7, Islamabad, 45700</span>
        <br />
        <br />
        <b>Call us at:</b>&nbsp;<span style={{ color: "#45cbd9" }}>0321-9880659</span>
        <br />
        <br />
        <b>Email Us:</b>&nbsp;<span style={{ color: "#45cbd9" }}>syndicatedev@gmail.com</span>
        <br />
        <br />
        <b>Open Hours:</b>&nbsp;<span style={{ color: "#45cbd9" }}>Monday-Friday (9am-5pm)</span>
      </p>
    </div>
  </section>
);

export default CTA;
