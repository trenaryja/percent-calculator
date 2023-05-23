import { Divider, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import {
  Footer,
  Header,
  PercentChangeFromThisToThat,
  Settings,
  ThisIsWhatPercentOfThat,
  WhatIsThisPercentOfThat,
} from '../components'

const Index = () => {
  const [numberOfDecimals, setNumberOfDecimals] = useState(0)

  return (
    <Grid minH="100vh" gridTemplateRows="auto 1fr auto">
      <Header />
      <Grid placeItems="center" gap={10} my={10}>
        <ThisIsWhatPercentOfThat numberOfDecimals={numberOfDecimals} />
        <Divider />
        <PercentChangeFromThisToThat numberOfDecimals={numberOfDecimals} />
        <Divider />
        <WhatIsThisPercentOfThat numberOfDecimals={numberOfDecimals} />
        <Divider />
        <Settings numberOfDecimals={numberOfDecimals} onNumberOfDecimalsChange={setNumberOfDecimals} />
      </Grid>
      <Footer />
    </Grid>
  )
}

export default Index
