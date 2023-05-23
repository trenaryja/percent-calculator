import { Flex, Heading, theme } from '@chakra-ui/react'
import { FaCalculator, FaPercentage } from 'react-icons/fa'
import { useSvgGradient } from '../hooks'

export const Header = () => {
  const [gradient, gradientElement] = useSvgGradient(theme.colors.pink[500], theme.colors.purple[400])

  return (
    <Flex bg="rgba(0,0,0, .2)" p={5} placeItems="center" placeContent="center" gap={3} w="100%">
      {gradientElement}
      <Heading>
        <FaCalculator fill={gradient.target} />
      </Heading>
      <Heading textAlign="center" bgGradient="linear(to-l, pink.500, purple.400, pink.500)" bgClip="text">
        Welcome to Percent Calculator
      </Heading>
      <Heading>
        <FaPercentage fill={gradient.target} />
      </Heading>
    </Flex>
  )
}
