import Image from 'next/image'
import styles from './page.module.css';
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/header';
import Footer from '@/components/footer/Footer'
import Gallery from '@/components/gallery/Gallery'
import Calender from '@/components/calender/calender';
import { ThemeProvider } from '../../context/ThemeContext'



export default function Home() {
  return (
    <main className="container">    
    <ThemeProvider>
          <Navbar/>
      <div>
      <Header/>   
      <Gallery/>  
      <Calender/>   
      </div>
      <Footer/>
        </ThemeProvider>
      </main>

  )  
}
