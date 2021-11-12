import { Divider, Grid } from '@chakra-ui/react'
import { FC } from 'react'

const CalculationWrapper: FC = ({ children }) => {
	return (
		<>
			<Grid gridAutoFlow={['row', 'column']} alignItems="center" textAlign="center">
				{children}
			</Grid>
			<Divider display={['block', 'none']} my={10} />
		</>
	)
}

export default CalculationWrapper
