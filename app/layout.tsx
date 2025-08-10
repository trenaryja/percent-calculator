import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import type React from 'react'
import { FaCalculator, FaPercent } from 'react-icons/fa6'
import './globals.css'

export const metadata: Metadata = {
	title: 'Percent Calculator',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning className='scroll-smooth'>
			<body className='grid grid-rows-[auto_1fr_auto] h-screen place-items-center'>
				<ThemeProvider>
					<header className='text-3xl font-black flex justify-center items-center text-center gap-5 p-5'>
						<FaCalculator />
						<h1>Percent Calculator</h1>
						<FaPercent className='text-primary' />
					</header>

					{children}

					<footer className='flex p-5 justify-center'>
						<span className='text-center'>
							Made with
							<span className='text-transparent text-shadow-primary text-shadow-[0_0_0] px-1'>🤍</span>
							by Rachel Trenary's husband
						</span>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	)
}
