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
    this.state = { tweets: null };
  }
  componentDidMount() {
    ($.ajax({
      url:'/api/tweets',
      method: 'GET'
    }).then(res=>this.setState({tweets:res})));
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
    let {tweets} = this.state;
    tweets = tweets.map(function(tweet) {
      return (
          [tweet.count, {name: tweet.name, text: tweet.text, count: tweet.count, index: null, date: tweet.date}]
      );
    });
    tweets = this.sortRows(tweets);
    tweets.forEach(function(row, index){
      //data is sorted on index 0, so only render the data we want in index 1
      //[ [retweets, {tweet object}] ] array of arrays
      row[1].index = index+1;
      renderArray.push(row[1]);
    });
    return renderArray;
  }
  render() {
    if (!this.state.tweets) {
      return (
        <div className='requestWarning'>
          <p className="requestWarningParagraph">
            My free sandbox account only has 250 requests a month.
          </p>
          <div className='loadbar'>
            <GridLoader color="#6495ED" size="50px" margin="4px"/>
          </div>
      </div>
      );
    }
    return (
      <div className="appComponent">
        <Header />
        <BootstrapTable keyField="index" data={this.renderTable()} columns={columns} bootstrap4={true} />
      </div>
    );
  }
}

export default App;
