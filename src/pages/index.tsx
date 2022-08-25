import type { NextPage } from 'next'
import Head from 'next/head'

import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dancing Lion Club</title>
				<meta name="description" content="Dancing Lion Club" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className="bg-black h-[calc(100vh-64px)]">
				<Hero />
			</main>
		</>
	)
}

export default Home
