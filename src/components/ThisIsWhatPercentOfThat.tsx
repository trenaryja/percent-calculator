import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import NumberBox from './NumberBox'
import CalculationWrapper from './CalculationWrapper'

interface Props {
	numberOfDecimals: number
}

const ThisIsWhatPercentOfThat = ({ numberOfDecimals }: Props) => {
	const [x, setX] = useState<string>()
	const [y, setY] = useState<string>()
	const z = (+x / +y) * 100

	return (
		<CalculationWrapper>
			<NumberBox value={x} onChange={setX} />
			<Text>is what percent of</Text>
			<NumberBox value={y} onChange={setY} />
			<Text>?</Text>
			<NumberBox isReadOnly pl={[1, 10]} value={isNaN(z) ? undefined : z.toFixed(numberOfDecimals)} />
			<Text>%</Text>
		</CalculationWrapper>
	)
}

export default ThisIsWhatPercentOfThat
