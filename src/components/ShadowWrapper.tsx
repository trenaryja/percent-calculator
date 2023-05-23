import { Flex, FlexProps } from '@chakra-ui/react'

export type ShadowWrapperProps = FlexProps

export const ShadowWrapper = ({ children, ...props }: ShadowWrapperProps) => (
  <Flex
    shadow="dark-lg"
    flexDirection={['column', null, 'row']}
    placeItems="center"
    justify="space-between"
    gap={10}
    p={5}
    mx={5}
    borderRadius={['3xl', null, 'full']}
    w={['15rem', 'initial']}
    {...props}
  >
    {children}
  </Flex>
)
