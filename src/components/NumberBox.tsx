import { NumberInput, NumberInputField, NumberInputProps } from '@chakra-ui/react'

export const NumberBox = (props: NumberInputProps) => {
	return (
		<NumberInput display="flex" justifyContent="center" px={1} {...props}>
			<NumberInputField tabIndex={props.tabIndex} paddingInline={1} w={40} textAlign="center" step={0.1} />
		</NumberInput>
	)
}
