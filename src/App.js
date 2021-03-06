import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
BooksAPI.getAll().then((books) => {
this.setState({ books })
})
}
moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);
  BooksAPI.getAll().then((books) => {
  this.setState({ books })
  })
}
  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
        <Main
         books={this.state.books}
         moveShelf={this.moveShelf}
         />
      )}/>
      <Route path="/search" render={() => (
        <Search
         moveShelf={this.moveShelf}
          books={this.state.books}
         />
      )}/>
      </div>
    )
  }
}

export default BooksApp
