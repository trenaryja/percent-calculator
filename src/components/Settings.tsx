import { Flex, Text, useColorMode } from '@chakra-ui/react'
import { CounterBox, DarkModeSwitch } from '.'
import { BubbleFlexProps } from '../theme'

export type SettingsProps = {
	numberOfDecimals: number
	onNumberOfDecimalsChange: (x: number) => void
}

export const Settings = ({ numberOfDecimals, onNumberOfDecimalsChange }: SettingsProps) => {
	const { colorMode } = useColorMode()

	return (
		<Flex flexDirection="column" {...BubbleFlexProps}>
			<Text>Number of Decimals</Text>
			<CounterBox min={0} max={100} value={numberOfDecimals} onChange={onNumberOfDecimalsChange} />
			<Text mt={5}>Switch to {colorMode === 'dark' ? 'light' : 'dark'} mode</Text>
			<DarkModeSwitch />
		</Flex>
	)
}
