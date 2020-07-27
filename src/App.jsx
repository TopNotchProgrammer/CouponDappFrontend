import React from 'react';
import SearchPage from './search/SearchPage';
import LogIn from './modal/LogIn';
import NoMetamask from './modal/NoMetaMask';
import { logRoles } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      address: ""
    }
    this.onLogIn = this.onLogIn.bind(this);
    this.onLogOut = this.onLogIn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  hasMetaMask() {
    return typeof window.ethereum !== 'undefined'
  }

  componentDidMount() {
    let app = this

    if(!app.hasMetaMask()) {
      return
    }

    window.ethereum.on('accountsChanged', function (accounts) {
      if (accounts.length > 0) {
        app.setState({
          isLoggedIn: true,
          address: accounts[0]
        })
      } else {
        app.setState({
          isLoggedIn: false,
          address: ""
        })
      }
    });
  }

  onLogIn(address) {
    this.setState({
      isLoggedIn: true,
      address: address
    })
  }

  onLogOut() {
    this.setState({
      isLoggedIn: false,
      address: ""
    })
  }

  render() {
    if(this.hasMetaMask()) {
      if (this.state.isLoggedIn) {
        return <SearchPage address={this.state.address} />
      } else {
        return <LogIn onLogIn={this.onLogIn} onLogOut={this.onLogOut} />
      }
    }
    return <NoMetamask />
  }
}

export default App
