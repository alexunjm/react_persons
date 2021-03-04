import Head from 'next/head'

import 'tailwindcss/tailwind.css'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <hgroup>
        <h1 className="bg-blue-600">Persons</h1>
        <h2>Update or delete any person listed here</h2>
      </hgroup>
    </header>

    <main>
      <section>
        <article>table</article>
      </section>
      <section>
        <article>form</article>
      </section>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with love for Alexander Jaramillo
      </a>
    </footer>
  </>
)

export default Home
