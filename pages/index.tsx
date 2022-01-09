import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';
import ArticlesSection from '../components/ArticlesSection';


const Home: NextPage = () => {
  // console.log(process.env.NODE_ENV)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        <Navbar />
        <ArticlesSection />
      </div>

    </div>
  )
}

export default Home