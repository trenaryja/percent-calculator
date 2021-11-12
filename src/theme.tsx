import { extendTheme, ThemeConfig, BoxProps } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '46em',
	md: '48em',
	lg: '62em',
	xl: '80em',
})

const config: ThemeConfig = { initialColorMode: 'system', useSystemColorMode: true }

const theme = extendTheme({ config, breakpoints })

export const BubbleFlexProps: BoxProps = {
	py: 5,
	px: 5,
	m: 5,
	width: [theme.space[60], 'unset'],
	borderRadius: theme.fontSizes['2xl'],
	boxShadow: theme.shadows['dark-lg'],
}

export const useSvgGradient = (color1: string, color2: string) => {
	const info = {
		start: color1,
		end: color2,
		id: 'gradient',
		target: 'url(#gradient)',
	}

	const svgElement = (
		<svg width="0" height="0">
			<linearGradient id={info.id} x1="100%" y1="100%" x2="0%" y2="0%">
				<stop stopColor={info.start} offset="0%" />
				<stop stopColor={info.end} offset="100%" />
			</linearGradient>
		</svg>
	)

	return [info, svgElement] as const
}

export default theme
