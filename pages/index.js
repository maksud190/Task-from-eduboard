import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainNavbar from '../Components/Shared/MainNavbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <MainNavbar></MainNavbar>
      
      
    </div>
  )
}
