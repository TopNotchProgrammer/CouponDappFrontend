import React from 'react';
import SearchPage from './search/SearchPage';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      userName: "Anonymous"
    }
  }

  render() {
    return (
      <SearchPage />
    )
  }
}

export default App
