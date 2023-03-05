import { Grid } from '@chakra-ui/react'
import { BubbleFlexProps } from '../theme'

export type CalculationWrapperProps = {
	children: React.ReactNode
}

export const CalculationWrapper = ({ children }) => {
	return (
		<Grid {...BubbleFlexProps} gridAutoFlow={['row', 'column']} alignItems="center" textAlign="center">
			{children}
		</Grid>
	)
}
