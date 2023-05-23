import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CalculationWrapper, NumberBox } from '.'

export type ThisIsWhatPercentOfThatProps = {
  numberOfDecimals: number
}

export const ThisIsWhatPercentOfThat = ({ numberOfDecimals }: ThisIsWhatPercentOfThatProps) => {
  const [x, setX] = useState<string>()
  const [y, setY] = useState<string>()
  const z = (+x / +y) * 100

  return (
    <CalculationWrapper
      question={
        <>
          <NumberBox value={x} onChange={setX} />
          <Text>is what % of</Text>
          <NumberBox value={y} onChange={setY} />
        </>
      }
      answer={<NumberBox isReadOnly value={isNaN(z) ? undefined : z.toFixed(numberOfDecimals)} isPercent />}
    />
  )
}
