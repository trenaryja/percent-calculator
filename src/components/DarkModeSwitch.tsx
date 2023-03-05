import { Switch, useColorMode } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
}
