import { NumberInput, NumberInputField, NumberInputProps } from '@chakra-ui/react'
import React from 'react'

const NumberBox = (props: NumberInputProps) => {
	return (
		<NumberInput display="flex" justifyContent="center" px={1} {...props}>
			<NumberInputField tabIndex={props.tabIndex} px={1} w={40} textAlign="center" step={0.1} />
		</NumberInput>
	)
}

export default NumberBox
