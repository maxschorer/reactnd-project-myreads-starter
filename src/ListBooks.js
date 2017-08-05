import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const {books, updateBookShelf} = this.props

   return (
<div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>
      <Bookshelf shelfName="Currently Reading" bookList={books["currentlyReading"]} updateBookShelf={updateBookShelf}/>
      <Bookshelf shelfName="Want to Read" bookList={books["wantToRead"]} updateBookShelf={updateBookShelf}/>
      <Bookshelf shelfName="Read" bookList={books["read"]} updateBookShelf={updateBookShelf}/>
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