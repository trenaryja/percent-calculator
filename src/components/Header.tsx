import { CSSProperties } from 'react'
import { Flex, Heading, theme } from '@chakra-ui/react'
import { FaPercentage, FaCalculator } from 'react-icons/fa'
import { useSvgGradient, BubbleFlexProps } from '../theme'

const Header = () => {
	const [gradient, gradientElement] = useSvgGradient(theme.colors.pink[600], theme.colors.purple[600])
	const iconStyle: CSSProperties = {
		fontSize: theme.fontSizes['4xl'],
		fill: gradient.target,
		margin: theme.space[2],
	}

	return (
		<Flex {...BubbleFlexProps} alignItems="center">
			{gradientElement}
			<FaPercentage style={iconStyle} />
			<Heading
				bgGradient={`linear(to-r, ${gradient.start}, ${gradient.end})`}
				bgClip="text"
				fontWeight="extrabold"
			>
				Welcome to Percent Calculator
			</Heading>
			<FaCalculator style={iconStyle} />
		</Flex>
	)
}

export default Header
