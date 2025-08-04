import { useLoaderData } from "react-router-dom";
import { getBookFromStoredCard } from "../../utilities/localStorage";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ReadBook from "../ReadBook/ReadBook";
import { useState } from "react";
import './ListedBooks.css'

const ListedBooks = () => {

    const books = useLoaderData();
    console.log(books);

    const storedReadBooks = getBookFromStoredCard('read-book');
    console.log(storedReadBooks);
    const storedWishBooks = getBookFromStoredCard('wish-book');
    console.log(storedWishBooks);
    const readBooks = books.filter(book => storedReadBooks.includes(book.bookId));
    const wishBooks = books.filter(book => storedWishBooks.includes(book.bookId));

    const [activeRead, setActiveRead] = useState(true);
    const [activeWish, setActiveWish] = useState(false);
    const [displayBook, setDisplayBook] = useState(readBooks);

    const handleReadOrWishListBtn = (btnName) => {
        if(btnName === 'read-book'){
            setDisplayBook(readBooks);
            setActiveRead(true);
            setActiveWish(false);
        }
        else if(btnName === 'wish-book'){
            setDisplayBook(wishBooks);
            setActiveRead(false);
            setActiveWish(true);
        }

    }

    return (
        <div>
            <h2 className="bg-[#1313130D] py-4 md:py-9 my-4 md:my-9 rounded-3xl text-3xl font-bold text-center ">Books</h2>
            <div className="text-center">
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white">Sort by <MdOutlineArrowDropDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex gap-6 my-5 md:my-10">
                <button onClick={() => handleReadOrWishListBtn('read-book')} className={`btn ${activeRead ? 'active' : ''}`}>Read Book</button>
                <button onClick={() => handleReadOrWishListBtn('wish-book')} className={`btn ${activeWish ? 'active' : ''}`}>Wish Book</button>
            </div>
            <div className="flex flex-col gap-7">
                {
                    displayBook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
        <h2></h2>
    );
};

export default ListedBooks;
