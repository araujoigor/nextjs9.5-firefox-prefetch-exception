import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/example.png" style={{ maxWidth: "800px" }} />

        <Link href="/[locale]/[title]" as="/en/test">
          <a>EN Test</a>
        </Link>
        <Link href="/[locale]/[title]" as="/pt/teste">
          <a>PT Teste</a>
        </Link>
      </main>
    </div>
  )
}
