import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/kornjiradej">Korn Jiradej World!</a> 
        </h1>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}
