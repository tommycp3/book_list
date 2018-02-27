import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <BookList />
        <div className="col-sm-12" >
        <h1>this is headding 1</h1>
        </div>
      </div>
    );
  }
}
