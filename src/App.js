import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {
  state = {
    books: {currentBooks: [], wantBooks: [], readBooks: []}
  }

  componentDidMount(){
    BooksAPI.getAll().then((response) => {
      const currentBooks = response.filter((book) => book.shelf === "currentlyReading")
      const wantBooks = response.filter((book) => book.shelf === "wantToRead")
      const readBooks = response.filter((book) => book.shelf === "read")
      const books = {currentBooks, wantBooks, readBooks}
      this.setState({books})
    })
  }

  render() {
    return (

      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default App