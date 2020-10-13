import React, { Component } from 'react';
import './App.css';
import RecommendedFriends from './components/RecommendedFriends.js';

class App extends Component {
  constructor(){
    super();
    this.friendList = [
      {name:'Trần Đốt', commonFriend: 10},
      {name:'Tống Phong', commonFriend: 20},
      {name:'Ngọa Long', commonFriend: 30},
    ];
  }
  render() {
    return (
      <div className="App">
        <RecommendedFriends friends = {this.friendList}/> 
      </div>
    );
  }
}

export default App;
