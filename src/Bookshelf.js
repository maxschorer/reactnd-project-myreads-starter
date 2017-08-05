import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
	render(){
		const {bookList, shelfName} = this.props

		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book) => <Book book={book} key={book.id}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
