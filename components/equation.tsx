'use client'

import { useState } from 'react'

export type EquationProps = {
	numberOfDecimals: number
	labels: string[]
	formula: (x: number, y: number) => number
	resultIsPercentage?: boolean
}

export const Equation = ({ numberOfDecimals, labels, formula, resultIsPercentage = false }: EquationProps) => {
	const [x, setX] = useState<number>()
	const [y, setY] = useState<number>()

	const z = x !== undefined && y !== undefined ? formula(x!, y!) : undefined

	const numInput = (value: number | undefined, set: (n?: number) => void, key: React.Key) => (
		<input
			type='number'
			key={key}
			value={value ?? ''}
			onChange={(e) => set(e.target.value === '' ? undefined : Number(e.target.value))}
		/>
	)

	return (
		<div className='equation neu neu-gradient neu-lg'>
			<div className='question'>
				{labels.map((part, i) =>
					part === 'x' ? numInput(x, setX, i) : part === 'y' ? numInput(y, setY, i) : <span key={i}>{part}</span>,
				)}
			</div>
			<div className='answer'>
				<input
					readOnly
					value={
						z === undefined ? '' : resultIsPercentage ? `${z.toFixed(numberOfDecimals)}%` : z.toFixed(numberOfDecimals)
					}
				/>
			</div>
		</div>
	)
}
