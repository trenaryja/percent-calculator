import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import theme, { BubbleFlexProps } from '../theme'

const CalculationWrapper: FC = ({ children }) => {
	return (
		<Grid {...BubbleFlexProps} gridAutoFlow={['row', 'column']} alignItems="center" textAlign="center">
			{children}
		</Grid>
	)
}

export default CalculationWrapper
