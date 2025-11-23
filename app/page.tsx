'use client'

import { Equation, ThemePicker } from '@/components'
import { equations } from '@/utils'
import { useState } from 'react'

export default function HomePage() {
	const [numberOfDecimals, setNumberOfDecimals] = useState(0)

	return (
		<main className='p-10 gap-20 grid content-around h-full place-items-center'>
			{equations.map((cfg, i) => (
				<Equation key={i} numberOfDecimals={numberOfDecimals} {...cfg} />
			))}

			<div className='neu w-fit grid md:flex gap-3 place-items-center justify-center equation'>
				<span>Number of Decimals</span>
				<div className='flex gap-5 items-center'>
					<button
						className='btn btn-square'
						disabled={numberOfDecimals <= 0}
						onClick={() => setNumberOfDecimals(numberOfDecimals > 0 ? numberOfDecimals - 1 : 0)}
					>
						-
					</button>
					<span>{numberOfDecimals}</span>
					<button className='btn btn-square' onClick={() => setNumberOfDecimals(numberOfDecimals + 1)}>
						+
					</button>
				</div>
				<ThemePicker />
			</div>
		</main>
	)
}
