import React from 'react';
import { Container } from 'react-bootstrap'
import SearchBox from './SearchBox'
import MenuTop from './MenuTop'
import MenuBottom from './MenuBottom'

function App() {
  return (
    <Container>
      <MenuTop className="mt-5 mb-5" />
      <h1 className="display-2 mt-5 mb-5 pt-5 text-center">
        Coupon Dapp
      </h1>
      <SearchBox className="my-auto h-100 pb-5" />
      <MenuBottom className="mt-5 mb-5 pt-5 text-center overflow-auto" />
    </Container>
  )
}

export default App
