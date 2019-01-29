import React from 'react';
//components
import Header from './Header';
import { GridLoader } from 'halogenium';
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "index",
    text: "Ranking"
  },
  {
    dataField: "type",
    text: "Site"
  },
  {
    style: { width: '25%' },
    dataField: "text",
    text: "Text"
  },
  {
    dataField: "name",
    text: "Username"
  },
  {
    dataField: "count",
    text: "Comments/Retweets"
  },
  {
    dataField: "date",
    text: "Date"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tweets: null, flicks: null};
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
  merge(leftArr, rightArr) {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (leftArr[0][0] > rightArr[0][0]) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
       } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
         }
       }
      while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
}
//sort rows on amount of retweets/comments
sortRows(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return this.merge(this.sortRows(leftArr), this.sortRows(rightArr));
  }
}
  renderTable(){
    let renderArray = [];
    let {tweets, flicks} = this.state;
    tweets = tweets.map(function(tweet) {
      return (
          [tweet.count, {name: tweet.name, type: "Twitter", text: tweet.text, count: tweet.count, index: null, date: tweet.date}]
      );
    });
    flicks = flicks.map(function(flick) {
      return (
          [flick.comments.length, {name: flick.name, type: "Flickr", text: flick.text, count: flick.comments.length, index: null, date: flick.date}]
      );
    });
    let rows = tweets.concat(flicks);
    rows = this.sortRows(rows);
    rows.forEach(function(row, index){
      //data is sorted on index 0, so only render the data we want in index 1
      //[ [retweets, {tweet object}], [comments, {flickr object}] ] array of arrays
      row[1].index = index+1;
      renderArray.push(row[1]);
    });
    return renderArray;
  }
  render() {
    if (!this.state.tweets || !this.state.flicks) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="50px" margin="4px"/>
        </div>
      );
    }
    console.log(this.state);
    return (
      <div className="appComponent">
        <Header />
        <BootstrapTable keyField="index" data={this.renderTable()} columns={columns} bootstrap4={true} />
      </div>
    );
  }
}

export default App;
