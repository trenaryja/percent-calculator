'use client'

import { useMounted } from '@mantine/hooks'
import { cn } from '@trenaryja/ui'
import daisyThemes from 'daisyui/theme/object'
import { useTheme } from 'next-themes'
import type { ComponentProps } from 'react'
import { FaPalette } from 'react-icons/fa6'
import * as R from 'remeda'

export const themes = R.pipe(
	daisyThemes,
	R.entries(),
	R.map(([name, theme]) => ({
		name,
		mode: theme['color-scheme'] as 'dark' | 'light',
	})),
	R.sortBy(R.prop('mode'), R.prop('name')),
)

export const ThemePicker = ({ className }: ComponentProps<'div'>) => {
	const mounted = useMounted()
	const { resolvedTheme, setTheme } = useTheme()

	if (!mounted) return <div className='loading' />

	return (
		<div className={cn('dropdown dropdown-top dropdown-center', className)}>
			<div tabIndex={0} role='button' className='btn btn-square btn-ghost'>
				<FaPalette />
			</div>
			<ul
				tabIndex={0}
				className={cn(
					'dropdown-content overflow-auto max-h-[50dvh] menu flex-nowrap p-2 frosted-glass border border-current/25 rounded-box backdrop-blur bg-base-100/50',
				)}
			>
				{themes.map((x) => (
					<li key={x.name}>
						<button
							type='button'
							className={cn({ 'before:content-["⦿"]': resolvedTheme === x.name })}
							onClick={() => setTheme(resolvedTheme === x.name ? 'system' : x.name)}
						>
							{x.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
