import React from 'react';
//components
import Header from './Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tweets: [], flicks: []};
  }
  componentDidMount() {
    ($.ajax({
      url:'/api/tweets',
      method: 'GET'
    }).then(res=>this.setState({tweets:res})));
    ($.ajax({
      url:'/api/flicks',
      method: 'GET'
    }).then(res=>this.setState({flicks:res})));
  }
  render() {
    console.log(this.state);
    return (
      <div className="appComponent">
        <Header />
        <p>Hello</p>
      </div>
    );
  }
}

export default App;
