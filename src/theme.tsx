import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '46em',
	md: '48em',
	lg: '62em',
	xl: '80em',
})

const config: ThemeConfig = { initialColorMode: 'system', useSystemColorMode: true }

const theme = extendTheme({ config, breakpoints })

export default theme
