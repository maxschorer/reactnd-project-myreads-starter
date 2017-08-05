import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const {currentBooks, wantBooks, readBooks} = this.props.books

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
    <Link className="open-search" to="/search">Add a book</Link>
  </div>
</div>
   )
  }

}

export default ListBooks