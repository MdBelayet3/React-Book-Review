import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books,setBooks] =useState()
    useEffect(() =>{
        fetch('books_data.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[books])
    console.log(books)

    return (
        <div>
            <h2 className="font1 text-4xl font-extrabold text-center mb-9">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books ? books.map(book => <Book key={book.bookId} book={book}></Book>) : <p>No books available</p>
                }
            </div>
        </div>
    );
};

export default Books;