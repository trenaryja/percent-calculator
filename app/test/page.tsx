'use client'

import { ThemePicker } from '@/components'
import { CSSProperties, useEffect, useState } from 'react'

const sizes = ['neu-xs', 'neu-sm', 'neu-md', 'neu-lg', 'neu-xl'] as const
const directions = ['neu-top-left', 'neu-top-right', 'neu-bottom-left', 'neu-bottom-right'] as const
const variants = [
	{ label: 'Normal', classes: '' },
	{ label: 'Pressed', classes: 'neu-pressed' },
	{ label: 'Gradient', classes: 'neu-gradient' },
	{ label: 'Pressed + Gradient', classes: 'neu-pressed neu-gradient' },
] as const

// Map sizes to box dimensions (more variation)
const sizeMap: Record<(typeof sizes)[number], number> = {
	'neu-xs': 16 * 2,
	'neu-sm': 16 * 4,
	'neu-md': 16 * 8,
	'neu-lg': 16 * 16,
	'neu-xl': 16 * 32,
}

export default function NeuTestPage() {
	const [distance, setDistance] = useState(5)
	const [blur, setBlur] = useState(10)
	const [intensity, setIntensity] = useState(0.1)
	const [angle, setAngle] = useState(145)
	const [radius, setRadius] = useState(16)
	const [demoSize, setDemoSize] = useState(128)

	// Animated angle state
	const [animatedAngle, setAnimatedAngle] = useState(0)
	useEffect(() => {
		let frame: number
		const animate = () => {
			setAnimatedAngle((prev) => (prev + 1) % 360)
			frame = requestAnimationFrame(animate)
		}
		frame = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(frame)
	}, [])

	const liveStyle = {
		'--neu-distance': `${distance}px`,
		'--neu-blur': `${blur}px`,
		'--neu-intensity': intensity,
		'--neu-angle': `${angle}deg`,
		borderRadius: `${radius}px`,
		width: `${demoSize}px`,
		height: `${demoSize}px`,
	} as CSSProperties

	const animatedStyle = {
		...liveStyle,
		'--neu-angle': `${animatedAngle}deg`,
	} as CSSProperties

	return (
		<main className='grid gap-10 p-5 w-full *:text-center'>
			<h2 className='text-3xl font-bold'>Neumorphism Playground</h2>

			<section id='controls'>
				<div className='flex items-center justify-center'>
					<ThemePicker className='dropdown-bottom! dropdown-end!' />
				</div>
				<div className='grid grid-cols-2 gap-4 place-items-center'>
					<label className='flex flex-col'>
						<span>Distance: {distance}px</span>
						<input
							type='range'
							min={0}
							max={50}
							value={distance}
							onChange={(e) => setDistance(Number(e.target.value))}
						/>
					</label>
					<label className='flex flex-col'>
						<span>Blur: {blur}px</span>
						<input type='range' min={0} max={100} value={blur} onChange={(e) => setBlur(Number(e.target.value))} />
					</label>
					<label className='flex flex-col'>
						<span>Intensity: {intensity}</span>
						<input
							type='range'
							min={-0.5}
							max={0.5}
							step={0.01}
							value={intensity}
							onChange={(e) => setIntensity(Number(e.target.value))}
						/>
					</label>
					<label className='flex flex-col'>
						<span>Angle: {angle}°</span>
						<input type='range' min={0} max={360} value={angle} onChange={(e) => setAngle(Number(e.target.value))} />
					</label>
					<label className='flex flex-col'>
						<span>Border Radius: {radius}px</span>
						<input type='range' min={0} max={100} value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
					</label>
					<label className='flex flex-col'>
						<span>Demo Size: {demoSize}px</span>
						<input
							type='range'
							min={50}
							max={300}
							value={demoSize}
							onChange={(e) => setDemoSize(Number(e.target.value))}
						/>
					</label>
				</div>
			</section>

			<section id='responsive-examples' className='grid grid-cols-1 sm:grid-cols-2 gap-20 place-items-center'>
				<div className='neu neu-md flex items-center justify-center' style={liveStyle}>
					Normal
				</div>
				<div className='neu neu-md neu-pressed flex items-center justify-center' style={liveStyle}>
					Pressed
				</div>
				<div className='neu neu-md neu-gradient flex items-center justify-center' style={liveStyle}>
					Gradient
				</div>
				<div className='neu neu-md flex items-center justify-center' style={animatedStyle}>
					Spin
				</div>
			</section>

			<section>
				<div className='grid gap-12'>
					{sizes.map((size) => {
						// Large sizes get fewer columns
						const colClass =
							size === 'neu-xs'
								? 'grid-cols-4'
								: size === 'neu-sm'
									? 'grid-cols-4'
									: size === 'neu-md'
										? 'grid-cols-4'
										: size === 'neu-lg'
											? 'grid-cols-2 xl:grid-cols-4'
											: size === 'neu-xl'
												? 'grid-cols-1 xl:grid-cols-2'
												: ''

						return (
							<div key={size}>
								<h3 className='text-lg font-medium'>{size}</h3>
								<div className={`grid ${colClass} gap-8 justify-items-center`}>
									{directions.map((dir) =>
										variants.map((variant) => {
											const classList = `neu ${size} ${dir} ${variant.classes}`.trim()
											return (
												<div key={`${size}-${dir}-${variant.label}`} className='flex flex-col items-center gap-2'>
													<span className='text-sm font-medium'>{variant.label}</span>
													<div
														className={`${classList} flex items-center justify-center`}
														style={{
															width: `${sizeMap[size]}px`,
															height: `${sizeMap[size]}px`,
															borderRadius: `${radius}px`,
														}}
														title={classList}
													/>
												</div>
											)
										}),
									)}
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</main>
	)
}
