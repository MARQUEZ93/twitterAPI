import React from 'react';
//components
import Header from './Header';
import getTweets from '../util/apiCalls';
import getFlicks from '../util/apiCalls';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({});
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
