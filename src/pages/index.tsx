import { Container } from '@chakra-ui/react'
import { useState } from 'react'
import {
	Header,
	PercentChangeFromThisToThat,
	Settings,
	ThisIsWhatPercentOfThat,
	WhatIsThisPercentOfThat,
} from '../components'

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
