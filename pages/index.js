import Head from 'next/head'
import SingUpForm from '../components/SingUpForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hero Digital</title>
        <meta name="description" content="Hero Digital Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SingUpForm/>
      </main>
    </div>
  )
}
