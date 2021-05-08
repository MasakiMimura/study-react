import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Links } from '../components/Links'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

         <Links />
      </main>

      <Footer />
    </div>
  )
}
