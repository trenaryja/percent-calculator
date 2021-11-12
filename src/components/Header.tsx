import React, { FC } from 'react'
import { Box, Heading, HeadingProps, theme } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const HeaderText: FC<HeadingProps & { grow?: number }> = ({ children, ...props }) => {
	return (
		<Heading
			display="inline"
			bgGradient={`linear(to-r, ${theme.colors.pink[600]}, ${theme.colors.purple[600]})`}
			bgClip="text"
			fontSize={`${3 + (props.grow ?? 0)}rem`}
			fontWeight="extrabold"
			{...props}
		>
			{children}
		</Heading>
	)
}

const Header = () => {
	return (
		<>
			<HeaderText mb={2}>Welcome to Percent Calculator</HeaderText>
			<MotionBox
				initial={{ scale: 0 }}
				animate={{ rotate: 360, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 250,
					damping: 25,
				}}
				whileHover={{ scale: 1.1 }}
				borderRadius={theme.fontSizes['4xl']}
				mb={8}
				pb={5}
				px={8}
				boxShadow={theme.shadows['dark-lg']}
			>
				<HeaderText>%</HeaderText>
				<HeaderText grow={1.5}>🖩</HeaderText>
			</MotionBox>
		</>
	)
}

export default Header
