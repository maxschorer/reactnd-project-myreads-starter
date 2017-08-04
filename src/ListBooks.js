import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const books = this.props.books
    const currentBooks = books.filter((book) => book.shelf === "currentlyReading")
    const wantBooks = books.filter((book) => book.shelf === "wantToRead")
    const readBooks = books.filter((book) => book.shelf === "read")

   return (
<div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <Bookshelf shelfName="Currently Reading" bookList={currentBooks}/>
      <Bookshelf shelfName="Want to Read" bookList={wantBooks}/>
      <Bookshelf shelfName="Read" bookList={readBooks}/>
    </div>
  </div>
  <div >
    <Link className="open-search"to="/search"><a>Add a book</a></Link>
  </div>
</div>
   )
  }

}

export default ListBooks