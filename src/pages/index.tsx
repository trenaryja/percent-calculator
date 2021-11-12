import { Container, VStack, Text, useColorMode } from '@chakra-ui/react'
import WhatIsThisPercentOfThat from '../components/WhatIsThisPercentOfThat'
import ThisIsWhatPercentOfThat from '../components/ThisIsWhatPercentOfThat'
import PercentChangeFromThisToThat from '../components/PercentChangeFromThisToThat'
import DarkModeSwitch from '../components/DarkModeSwitch'
import CounterBox from '../components/CounterBox'
import { useState } from 'react'

const Index = () => {
	const [numberOfDecimals, setNumberOfDecimals] = useState(0)
	const { colorMode } = useColorMode()

	return (
		<Container py={10} maxW="container.lg" centerContent minH="100vh" justifyContent="space-evenly">
			<ThisIsWhatPercentOfThat numberOfDecimals={numberOfDecimals} />
			<PercentChangeFromThisToThat numberOfDecimals={numberOfDecimals} />
			<WhatIsThisPercentOfThat numberOfDecimals={numberOfDecimals} />
			<VStack>
				<Text>Number of Decimals</Text>
				<CounterBox min={0} max={100} value={numberOfDecimals} onChange={setNumberOfDecimals} />
			</VStack>
			<VStack>
				<Text>Switch to {colorMode === 'dark' ? 'light' : 'dark'} mode</Text>
				<DarkModeSwitch />
			</VStack>
		</Container>
	)
}

export default Index
