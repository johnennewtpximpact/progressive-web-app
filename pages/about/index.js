import styles from '../../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About <a href="https://nextjs.org">Next.js!</a>
        </h1>

          <div className={styles.grid}>
              <a href="/" className={styles.card}>
                  <h3>Home &rarr;</h3>
                  <p>Lets go right back home.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                  <h3>Learn &rarr;</h3>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                  href="https://github.com/vercel/next.js/tree/canary/examples"
                  className={styles.card}
              >
                  <h3>Examples &rarr;</h3>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
              >
                  <h3>Deploy &rarr;</h3>
                  <p>
                      Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
              </a>
          </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
