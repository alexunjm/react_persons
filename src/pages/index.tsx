import Head from 'next/head'

import PersonsTable from 'components/person/persons-table'
import { ReactElement } from 'react'
import { PersonForm } from 'components/person/person-form/PersonForm'
import { useDispatch, useSelector } from 'react-redux'
import { PersonState } from 'redux/state/person'
import { personFormFill } from 'redux/actions/person'

// Full-width fluid until the `lg` breakpoint, then lock to container
export const Home = (): ReactElement => {
  const personState = useSelector(
    (state: { person: PersonState }) => state.person
  )

  const dispatch = useDispatch()
  const handleCreateAction = () => {
    dispatch(personFormFill({}))
  }

  return (
    <div className="md:container md:mx-auto font-sans">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <hgroup>
          <h1 className="mt-2 mx-4 text-right text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Persons
            <button
              type="button"
              onClick={handleCreateAction}
              className="inline-flex justify-center py-2 px-2 text-4xl border border-transparent shadow-sm text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              +
            </button>
          </h1>
          {/* 
        <h2 className="mt-4 max-w-2xl text-xl text-gray-500">
          Update or delete any person listed here
        </h2>
         */}
        </hgroup>
      </header>

      <main>
        <section
          className={[
            'fixed p-10 top-10 w-full',
            personState.edit.data ? '' : 'hidden',
          ].join(' ')}
        >
          <article className="bg-indigo-50 p-5">
            <PersonForm />
          </article>
        </section>
        <section>
          <article>
            <PersonsTable />
          </article>
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
}

export default Home
