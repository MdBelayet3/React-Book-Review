import { Link } from 'react-router-dom';
import bannerImage from '../../assets/download.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 md:gap-16 p-6 bg-[#1313130D] md:px-32 md:py-20 my-12 rounded-3xl justify-center items-center md:mt-12 md:mb-24'>
            <div className="font-bold">
                <h1 className="text-4xl md:text-5xl">Books to freshen up your bookshelf</h1>
                <Link to='/listed-books'>
                    <button className="text-xl btn  bg-[#23BE0A] mt-6 md:mt-11">View The List</button>
                </Link>
            </div>
            <div>
                <img className='
                ' src={bannerImage} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;