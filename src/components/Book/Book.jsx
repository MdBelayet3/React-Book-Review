import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { bookId,image, bookName, tags, author, category, rating } = book;
    console.log(book)
    const [tag1, tag2] = tags;
    return (
        <Link to={`/book/${bookId}`}>
            <div className='border-2 border-[#F3F3F3] p-6 rounded-3xl flex flex-col gap-2'>
                <div className='flex justify-center bg-gray-300 p-6 rounded-3xl'>
                    <img src={image} alt="" />
                </div>
                <div className='text-[#23BE0A] flex gap-11 '>
                    <p className='bg-[#23BE0A0D] rounded-3xl p-2'>{tag1}</p>
                    <p className='bg-[#23BE0A0D] rounded-3xl p-2'>{tag2}</p>
                </div>
                <h2 className='font1 text-2xl font-bold'>{bookName}</h2>
                <p className='text-[#131313CC] font-medium'>{`By : ${author}`}</p>
                <hr className='decoration-dashed' />
                <div className='flex justify-between'>
                    <p>{category}</p>
                    <p className='flex gap-2 items-center'>{rating}<CiStar /></p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;
