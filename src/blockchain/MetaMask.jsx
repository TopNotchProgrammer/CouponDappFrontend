import NoMetamask from '../modal/NoMetaMask';
import Web3 from 'web3'

import React from 'react';

class MetaMask extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this);
    this.web3 = new Web3(window.ethereum)
  }

  hasMetaMask() {
    return typeof window.ethereum !== 'undefined'
  }

  componentDidMount() {
    let metamask = this

    if (!metamask.hasMetaMask()) {
      return
    }

    window.ethereum.on('accountsChanged', function (accounts) {
      if (accounts.length > 0) {
        metamask.props.onLogIn(accounts[0])
      } else {
        metamask.props.onLogOut()
      }
    })
  }

  render() {
    if (this.hasMetaMask()) {
      return this.props.children
    }
    return <NoMetamask />
  }
}

export default MetaMask