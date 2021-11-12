import { Button, HStack, Input, UseNumberInputProps, useNumberInput } from '@chakra-ui/react'

interface Props extends Omit<UseNumberInputProps, 'onChange'> {
	onChange?: (value: number) => void
}

const CounterBox = ({ onChange, ...props }: Props) => {
	const handleChange = onChange
		? (_valueAsString: string, valueAsNumber: number) => onChange(isNaN(valueAsNumber) ? 0 : valueAsNumber)
		: undefined

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
		...props,
		onChange: handleChange,
	})

	return (
		<HStack justify="center">
			<Button {...getDecrementButtonProps()}>-</Button>
			<Input textAlign="center" w={10} p={1} isReadOnly {...getInputProps()} />
			<Button {...getIncrementButtonProps()}>+</Button>
		</HStack>
	)
}

export default CounterBox
