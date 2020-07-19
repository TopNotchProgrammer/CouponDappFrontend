import React from 'react';
import { Container } from 'react-bootstrap'
import SearchBox from './SearchBox'
import MenuTop from './MenuTop'

function App() {
  return (
    <Container>
      <MenuTop className="mt-5 mb-5" />
      <h1 className="display-1 mt-5 mb-5 text-center">
        Coupon Dapp
      </h1>
      <SearchBox className="mt-5 mb-5" />
    </Container>
  )
}

export default App
