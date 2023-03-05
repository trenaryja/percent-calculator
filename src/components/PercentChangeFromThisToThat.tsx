import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CalculationWrapper, NumberBox } from '.'

export type PercentChangeFromThisToThatProps = {
	numberOfDecimals: number
}

export const PercentChangeFromThisToThat = ({ numberOfDecimals }: PercentChangeFromThisToThatProps) => {
	const [x, setX] = useState<string>()
	const [y, setY] = useState<string>()
	const z = ((+y - +x) / +x) * 100

	return (
		<CalculationWrapper>
			<Text>What is the percent change from</Text>
			<NumberBox value={x} onChange={setX} />
			<Text>to</Text>
			<NumberBox value={y} onChange={setY} />
			<Text>?</Text>
			<NumberBox
				isReadOnly
				tabIndex={-1}
				pl={[1, 10]}
				value={isNaN(z) ? undefined : z.toFixed(numberOfDecimals)}
			/>
			<Text>%</Text>
		</CalculationWrapper>
	)
}
