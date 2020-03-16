// components/install.js
import React from 'react'
import styled from 'styled-components'

import { connectTo, takeFromState } from '../utils/generic'
import { promptToAddToHomeScreen } from '../actions/generic'
import Button from './button-with-icon'

const Container = styled.div`
  margin: 10px;
`

const Component = ({ proposalEvent, promptToAddToHomeScreen }) => {
  if (!proposalEvent) return null
  const onClick = () => {
    promptToAddToHomeScreen()
    proposalEvent.prompt()
  }

  return (
    <Container>
      <Button onClick={onClick} centeredText text='Install Pomodoro' icon={'download'}/>
    </Container>
  )
}

export default connectTo(
  state => takeFromState(state, 'generic', ['proposalEvent']),
  { promptToAddToHomeScreen },
  Component
)