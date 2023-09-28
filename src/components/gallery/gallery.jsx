import React from 'react'
import Image from 'next/image'
import Eyes from "public/eyes.jpg";
import birds from "public/birds.jpg";
import greenwitch from "public/greenwitch.jpg";
import knowpast from "public/knowpast.jpg";
import women from "public/women.jpg";
import styles from './gallery.module.css'


const gallery = () => {
  return (  
  <div>
    <div>
        <h1>
          Gallery
        </h1>
    </div>
    <section className={styles.container}>
      <div className={styles.slidewrapper}>
      <div  className={styles.slides}>
    <Image /*id="1"*/ src={Eyes} alt="Eye" className={styles.img}/>
    <Image /*id="2"*/ src={birds} alt="Birds" className={styles.img}/>
    <Image /*id="3"*/ src={greenwitch} alt="Witch" className={styles.img}/>
    <Image /*id="4"*/ src={knowpast} alt="Memories" className={styles.img}/>
    <Image /*id="6"*/ src={women} alt="Women" className={styles.img}/>
    </div>
    <div className={styles.slidernav}>
    <a href="1"></a>
    <a href="2"></a>
    <a href="3"></a>
    <a href="4"></a>
    <a href="6"></a>
    </div>
      </div>
      </section>
  </div>
  )
}

export default gallery
