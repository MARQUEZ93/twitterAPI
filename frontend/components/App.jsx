import React from 'react';
//components
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="appComponent">
        <Header />
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
