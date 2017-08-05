import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const {books, updateBookShelf} = this.props
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
    const wantToRead = books.filter((book) => book.shelf === "wantToRead")
    const read = books.filter((book) => book.shelf === "read")

   return (
<div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <Bookshelf shelfName="Currently Reading" bookList={currentlyReading} updateBookShelf={updateBookShelf}/>
      <Bookshelf shelfName="Want to Read" bookList={wantToRead} updateBookShelf={updateBookShelf}/>
      <Bookshelf shelfName="Read" bookList={read} updateBookShelf={updateBookShelf}/>
    </div>
  </div>
  <div >
    <Link className="open-search" to="/search">Add a book</Link>
  </div>
</div>
   )
  }

}

export default ListBooks