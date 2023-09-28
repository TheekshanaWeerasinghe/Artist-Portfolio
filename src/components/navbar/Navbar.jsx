"use client";
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DMToggle from '../DMToggle/DMToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Profile",
    url: "/profile",
  }
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>MyArt</Link>
      <div  className={styles.links}>
        <DMToggle/>
        {links.map(link=>(
        <Link key={link.id} href={link.url}className={styles.link}>
          {link.title}
          </Link>
          ))}
      </div>
    </div>
  )
}

export default Navbar