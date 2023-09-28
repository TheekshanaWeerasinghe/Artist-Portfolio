import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div >©️2023 MyArt.All rights reserved</div>
      <div className={styles.social}>
        <Image src="/facebook.png"  width={15} height={15} className={styles.icon} alt="My Art facebook"/>
        <Image src="/inster.png" width={15}    height={15} className={styles.icon} alt="My Art inster"/>
        <Image src="/twitter.png"  width={15}  height={15} className={styles.icon} alt="My Art twitter"/>
        <Image src="/youtube.png" width={15}   height={15} className={styles.icon} alt="My Art youtube"/>
      </div>
    </div>
  )
}

export default Footer