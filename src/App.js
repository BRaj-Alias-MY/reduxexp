import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Latest from './components/Latest';

import PostForm from './components/PostForm';
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      posts: [],
      news: [],
    };
  }

  render () {
    return (
      <Provider store={store}>
        <div className="App">

          <PostForm />
          <hr />
          <Latest />

        </div>
      </Provider>
    );
  }
}

export default App;
