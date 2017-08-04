import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
    // handle asynchronously
    BooksAPI.search(query, 20).then((books) => {
        this.setState({books})
      })
  }

  render() {
    const {query, books} = this.state

    let bookList = []
    for (let book of books){
      bookList.push(<Book book={book}/>)
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookList}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks