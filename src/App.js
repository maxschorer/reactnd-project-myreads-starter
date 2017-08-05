import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookShelf = (book, shelf) => {
  book.shelf = shelf

  BooksAPI.update(book, shelf).then((res) => {
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
  })
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