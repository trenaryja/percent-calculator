import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ShadowWrapper } from './ShadowWrapper'

export type CalculationWrapperProps = {
  question: React.ReactNode
  answer: React.ReactNode
}

export const CalculationWrapper = ({ question, answer }: CalculationWrapperProps) => {
  return (
    <ShadowWrapper>
      <Flex
        gap={[2, null]}
        flexDirection={['column', 'row']}
        placeItems="center"
        sx={{ '> *': { textAlign: 'center' } }}
      >
        {question}
      </Flex>
      <Flex flexDirection={['column', 'row']} placeItems="center">
        {answer}
      </Flex>
    </ShadowWrapper>
  )
}
