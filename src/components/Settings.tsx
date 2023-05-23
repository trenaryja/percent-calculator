import { Flex, IconButton, Text, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { CounterBox, ShadowWrapper } from '.'

export type SettingsProps = {
  numberOfDecimals: number
  onNumberOfDecimalsChange: (x: number) => void
}

export const Settings = ({ numberOfDecimals, onNumberOfDecimalsChange }: SettingsProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const ColorModeIcon = isDark ? FaSun : FaMoon

  return (
    <ShadowWrapper>
      <Flex flexDirection={['column', 'row']} placeItems="center" gap={[3, 10]}>
        <Text>Number of Decimals</Text>
        <CounterBox min={0} max={100} value={numberOfDecimals} onChange={onNumberOfDecimalsChange} />
        <IconButton icon={<ColorModeIcon />} onClick={toggleColorMode} aria-label="toggle-color-mode" />
      </Flex>
    </ShadowWrapper>
  )
}
