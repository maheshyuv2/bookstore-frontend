import React, { useState, useEffect } from "react";
import { bookService } from "../services/bookService";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from backend
        bookService.getBooks().then(data => setBooks(data));
    }, []);

    return (
        <div className="book-list">
            <h1>Available Books</h1>
            {books.length === 0 ? (
                <p>Loading books...</p>
            ) : (
                books.map((book) => (
                    <div key={book.id} className="book-item">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{`$${book.price}`}</p>
                        <p>{book.description}</p>
                        <button>Add to Cart</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default BookList;