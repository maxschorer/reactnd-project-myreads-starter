import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
	render(){
		const {bookList, shelfName} = this.props

    let books = []
    for (let book of bookList){
      books.push(<Book book={book}/>)
    }

		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
