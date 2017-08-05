import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    // how to handle failed promise?
    this.setState({query: query.trim()})
    BooksAPI.search(query, 20).then((results) => {
      this.setState({results})
    })
  }

  render() {
    const {query, results} = this.state

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
            {results.map((book) =>
              <Book
                book={book}
                key={book.id}
                updateBookShelf={this.props.updateBookShelf}
              />)}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks