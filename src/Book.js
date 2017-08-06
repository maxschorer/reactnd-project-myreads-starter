import React, { Component } from 'react'

class Book extends Component {
  render(){
    const {book, updateBookShelf} = this.props
     return (
     <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url("http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => updateBookShelf(book, event.target.value)} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(", "): ""}</div>
      </div>
    </li>
    )
  }
}

export default Book