import { NavLink, useLoaderData } from "react-router-dom";
import { getBookFromStoredCard } from "../../utilities/localStorage";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {

    const books = useLoaderData();
    console.log(books);

    const storedReadBooks = getBookFromStoredCard('read-book');
    console.log(storedReadBooks);
    const storedWishBooks = getBookFromStoredCard('wish-book');
    console.log(storedWishBooks);
    const readBooks = books.filter(book => storedReadBooks.includes(book.bookId) );
    console.log(readBooks);

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
            <div className="text-[#13131380] text-xl font-bold flex gap-6">
                <NavLink><button className=" ">Read Books</button></NavLink>
                <NavLink><button className=" ">Wish Books</button></NavLink>
            </div>
            <div className="flex flex-col gap-7">
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;