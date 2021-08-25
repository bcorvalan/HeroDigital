import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hero Digital</title>
        <meta name="description" content="Hero Digital Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignUpForm/>
      </main>
    </div>
  )
}
