import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CalculationWrapper, NumberBox } from '.'

export type WhatIsThisPercentOfThatProps = {
  numberOfDecimals: number
}

export const WhatIsThisPercentOfThat = ({ numberOfDecimals }: WhatIsThisPercentOfThatProps) => {
  const [x, setX] = useState<string>()
  const [y, setY] = useState<string>()
  const z = (+y * +x) / 100
  return (
    <CalculationWrapper
      question={
        <>
          <Text>What is</Text>
          <NumberBox value={x} onChange={setX} isPercent />
          <Text>of</Text>
          <NumberBox value={y} onChange={setY} />
        </>
      }
      answer={<NumberBox isReadOnly value={isNaN(z) ? undefined : z.toFixed(numberOfDecimals)} />}
    />
  )
}
