import { VStack, Text, useColorMode, Flex } from '@chakra-ui/react'
import React from 'react'
import { BubbleFlexProps } from '../theme'
import CounterBox from './CounterBox'
import DarkModeSwitch from './DarkModeSwitch'

interface Props {
	numberOfDecimals: number
	onNumberOfDecimalsChange: (x: number) => void
}

const Settings = ({ numberOfDecimals, onNumberOfDecimalsChange }: Props) => {
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

export default Settings
