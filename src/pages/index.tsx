import Head from 'next/head'

import PersonsTable from 'components/persons-table'

import 'tailwindcss/tailwind.css'

// Full-width fluid until the `lg` breakpoint, then lock to container
export const Home = (): JSX.Element => (
  <div className="md:container md:mx-auto font-sans">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <hgroup>
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Persons
        </h1>
        <h2 className="mt-4 max-w-2xl text-xl text-gray-500">
          Update or delete any person listed here
        </h2>
      </hgroup>
    </header>

    <main>
      <section>
        <article>
          <PersonsTable test="hello" />
        </article>
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
  </div>
)

export default Home
