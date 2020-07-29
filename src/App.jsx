import React from 'react';
import SearchPage from './search/SearchPage';
import LogIn from './modal/LogIn';
import MetaMask from './blockchain/MetaMask'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      address: ""
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.setWeb3 = this.setWeb3.bind(this);
    this.setContract = this.setContract.bind(this);
    this.web3 = null
    this.contrat = null
  }

  setWeb3(web3) {
    this.web3 = web3
    window.web3 = web3 // todo: remove, for testig purposes only
  }

  setContract(json, address) {
    this.contract = new this.web3.eth.Contract(
      json,
      address
    )
    window.contract = this.contract // todo: remove, for testig purposes only
  }

  logIn(address) {
    this.setState({
      isLoggedIn: true,
      address: address
    })
  }

  logOut() {
    this.setState({
      isLoggedIn: false,
      address: ""
    })
  }

  content() {
    if (this.state.isLoggedIn) {
      return (
        <SearchPage
          address={this.state.address}
          contract={this.contract}
        />
      )
    } else {
      return <LogIn onLogIn={this.logIn} />
    }
  }

  render() {
    return (
      <MetaMask
        onLogIn={this.logIn}
        onLogOut={this.logOut}
        setWeb3={this.setWeb3}
        setContract={this.setContract}
      >
        {this.content()}
      </MetaMask>
    )
  }
}

export default App
