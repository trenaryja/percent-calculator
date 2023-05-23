import { Button, HStack, Input, useNumberInput, UseNumberInputProps } from '@chakra-ui/react'

export type CouterBoxProps = Omit<UseNumberInputProps, 'onChange'> & {
  onChange?: (value: number) => void
}

export const CounterBox = ({ onChange, ...props }: CouterBoxProps) => {
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
      <Input textAlign="center" w={10} p={1} isReadOnly tabIndex={-1} {...getInputProps()} />
      <Button {...getIncrementButtonProps()}>+</Button>
    </HStack>
  )
}
