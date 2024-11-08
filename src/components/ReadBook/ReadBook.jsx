import PropTypes from 'prop-types';
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReadBook = ({ book }) => {
    console.log(book)

    const { author, bookId, bookName, category, image, publisher, rating, tags, totalPages, yearOfPublishing } = book;
    const [tag1, tag2] = tags;
    return (
        <div className=' flex flex-col md:flex-row items-center gap-6 shadow-2xl border border-[#13131326] rounded-3xl p-7'>
            <div className='bg-[#1313130D] rounded-3xl py-7 px-12'>
                <img src={image} alt="" />
            </div>
            <div className='flex flex-col gap-2 md:gap-4'>
                <h1 className="font-black text-xl md:text-4xl font1">{bookName}</h1>
                <h4 className="text-[#131313CC] font-medium text-xl">{`By : ${author}`}</h4>
                <div className='flex md:items-center md:gap-6 flex-col md:flex-row'>
                    <div className="flex items-center gap-3">
                        <p className="font-extrabold">Tag </p>
                        <p className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-3 py-2 rounded-3xl">{`#${tag1}`}</p>
                        <p className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-3 py-2 rounded-3xl">{`#${tag2}`}</p>
                    </div>
                    <p>Year of Publishing : {yearOfPublishing}</p>
                </div>
                <div className='flex flex-col md:flex-row gap-2  md:gap-6'>
                    <p className='flex items-center gap-3'><MdOutlinePeopleOutline /> Publisher : {publisher}</p>
                    <p className='flex items-center gap-3'><RiBook2Fill /> Page : {totalPages}</p>
                </div>
                <hr />
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <p className='rounded-full py-3 px-5 bg-[#328EFF26] text-[#328EFF]'>Category: {category}</p>
                        <p className='rounded-full py-3 px-5 bg-[#FFAC3326] text-[#FFAC33]'>Rating : {rating}</p>
                    </div>
                    <Link to={`/book/${bookId}`}><button className='btn rounded-full text-white py-3 px-5 bg-[#23BE0A]'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object,
};

export default ReadBook;