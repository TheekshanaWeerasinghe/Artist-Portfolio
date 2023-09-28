import React from 'react'
import Image from 'next/image'
import styles from './header.module.css';
import Eye from "public/Eye.jpg";

const header = () => {
  return (
    <div  className={styles.container}>
    <div className={styles.texts}> 
         <h1 className={styles.title}> A World in Frames Artistic Adventures.</h1>
      <p className={styles.desc}>
      I am Theekshana.I'm an accomplished and 
          passionate artist known for my exceptional work in the 
          world of painting. With a career spanning 5 years, I 
          have left an indelible mark on the
           art world through my
            unique and evocative creations.  
      </p>
    </div>
     <div className={styles.imgcontainer}>
      <Image src={Eye} alt="" className={styles.img}/>
    </div>
    </div>
  )
}

export default header