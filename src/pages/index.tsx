import { useState } from 'react'
import { Container } from '@chakra-ui/react'
import WhatIsThisPercentOfThat from '../components/WhatIsThisPercentOfThat'
import ThisIsWhatPercentOfThat from '../components/ThisIsWhatPercentOfThat'
import PercentChangeFromThisToThat from '../components/PercentChangeFromThisToThat'
import Header from '../components/Header'
import Settings from '../components/Settings'

const Index = () => {
	const [numberOfDecimals, setNumberOfDecimals] = useState(0)

	return (
		<Container py={5} textAlign="center" maxW="container.lg" centerContent minH="100vh">
			<Header />
			<ThisIsWhatPercentOfThat numberOfDecimals={numberOfDecimals} />
			<PercentChangeFromThisToThat numberOfDecimals={numberOfDecimals} />
			<WhatIsThisPercentOfThat numberOfDecimals={numberOfDecimals} />
			<Settings numberOfDecimals={numberOfDecimals} onNumberOfDecimalsChange={setNumberOfDecimals} />
		</Container>
	)
}

export default Index
