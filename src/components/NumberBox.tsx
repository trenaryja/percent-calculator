import { InputGroup, InputRightElement, NumberInput, NumberInputField, NumberInputProps } from '@chakra-ui/react'

export const NumberBox = ({ isPercent, ...props }: NumberInputProps & { isPercent?: boolean }) => {
  return (
    <InputGroup w="fit-content" mx={2}>
      <NumberInput display="flex" justifyContent="center" {...props}>
        <NumberInputField
          tabIndex={props.isReadOnly ? -1 : undefined}
          paddingInline={1}
          w={40}
          textAlign="center"
          step={0.1}
        />
        {isPercent && <InputRightElement>%</InputRightElement>}
      </NumberInput>
    </InputGroup>
  )
}
