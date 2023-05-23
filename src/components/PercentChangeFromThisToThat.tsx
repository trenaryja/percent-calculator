import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CalculationWrapper, NumberBox } from '.'

export type PercentChangeFromThisToThatProps = {
  numberOfDecimals: number
}

export const PercentChangeFromThisToThat = ({ numberOfDecimals }: PercentChangeFromThisToThatProps) => {
  const [x, setX] = useState<string>()
  const [y, setY] = useState<string>()
  const z = ((+y - +x) / +x) * 100

  return (
    <CalculationWrapper
      question={
        <>
          <Text>What's the % change from</Text>
          <NumberBox value={x} onChange={setX} />
          <Text>to</Text>
          <NumberBox value={y} onChange={setY} />
        </>
      }
      answer={<NumberBox isReadOnly value={isNaN(z) ? undefined : z.toFixed(numberOfDecimals)} isPercent />}
    />
  )
}
