import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import './BookDetails.css'
import { saveBookToStoredCard } from "../../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();

    const intId = parseInt(id);
    const book = books.find(book => book.bookId === intId);
    console.log(book);
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;
    const [tag1, tag2] = tags;
    // state for read btn toast
    const [read, setRead] = useState(false);
    const [wishList, setWishList] = useState(false);

    const handleBtn = (para) => {
        if (para === 'read-book') {
            saveBookToStoredCard(intId, para);
            if (!read) {
                toast.success('Books added to read-list')
            }
            else if (read) {
                toast.warn('You already read this book')
            }
            setRead(true);
        }
        else if (para === 'wish-book') {
            if(!read && !wishList){
                saveBookToStoredCard(intId, para);
                toast.success('Books added to Wish-list')
            }
            else if(read || wishList){
                toast.warn('You already read this book')
            }
            setWishList(true);
        }
    }

    return (
        <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-16 md:px-36 mb-52 ">
            <div className="bg-[#1313130D] rounded-3xl sm:text-center">
                <img className="md:w-[400px] md:h-[500px] pl-14 py-4 md:p-[70px]" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-black text-4xl font1">{bookName}</h1>
                <h4 className="text-[#131313CC] font-medium text-xl">{`By : ${author}`}</h4>
                <hr />
                <h4 className="text-[#131313CC] font-medium text-xl">{category}</h4>
                <hr />
                <p><span className="font-extrabold">Review : </span>{review}</p>
                <div className="flex items-center gap-3">
                    <p className="font-extrabold">Tag </p>
                    <p className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-3 py-2 rounded-3xl">{`#${tag1}`}</p>
                    <p className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-3 py-2 rounded-3xl">{`#${tag2}`}</p>
                </div>
                <hr />
                <table>
                    <tr>
                        <td>Number of Pages : </td>
                        <td className="font-extrabold">{totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher : </td>
                        <td className="font-extrabold">{publisher}</td>
                    </tr>
                    <tr>
                        <td>Year of Publishing : </td>
                        <td className="font-extrabold">{yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Rating : </td>
                        <td className="font-extrabold">{rating}</td>
                    </tr>
                </table>
                <div>
                    <button onClick={() => handleBtn('read-book')} className="btn text-lg font-semibold bg-[#23BE0A] text-white mr-6">Read</button>
                    <button onClick={() => handleBtn('wish-book')} className="btn text-lg font-semibold bg-[#59C6D2] text-white  mr-6">Wishlist</button>
                    <button onClick={() => navigate(-1)} className="btn bg-blue-500 text-white ">Go back</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;