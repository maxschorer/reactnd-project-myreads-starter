import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {
  state = {
    books: {"currentlyReading": [], "wantToRead": [], "read": []}
  }

  componentDidMount(){
    BooksAPI.getAll().then((response) => {
      const currentBooks = response.filter((book) => book.shelf === "currentlyReading")
      const wantBooks = response.filter((book) => book.shelf === "wantToRead")
      const readBooks = response.filter((book) => book.shelf === "read")
      const books = {"currentlyReading": currentBooks, "wantToRead": wantBooks, "read": readBooks}
      this.setState({books})
    })
  }

  updateBookShelf(book, shelf){
    if (shelf === book.shelf) {return}
    /*
    Three steps:
    1) update on backend
    2) update in local state
    3) update bookLists
    */
    const oldShelf = book.shelf
    BooksAPI.update(book, shelf) //update on backend
    //book.shelf = shelf //update in state
    books = this.state.books
    books[shelf] = books[shelf].concat([book])
    books[oldShelf] = books[oldShelf].filter(b.id !== book.id)
    this.setState({books})
  }

  render() {
    return (

      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            updateBookShelf={this.updateBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default App