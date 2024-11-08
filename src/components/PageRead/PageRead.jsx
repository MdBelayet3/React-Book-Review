import { useLoaderData } from "react-router-dom";
import { getBookFromStoredCard } from "../../utilities/localStorage";

const PageRead = () => {

    const books = useLoaderData();

    const storedReadBooks = getBookFromStoredCard('read-book');
    const readBooks = books.filter(book => storedReadBooks.includes(book.bookId));
    console.log(readBooks);
    return (
        <div>
            <h2>Hi am i page read </h2>
        </div>
    );
};

export default PageRead;