import { NavLink, Link} from "react-router-dom";
import './Header.css'

const Header = () => {

    const links = <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                    <li><NavLink to="/page-read">Page to Read</NavLink></li>
                    <li><Link to="/add-card">Add to Card</Link></li>
                </>

    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-2 w-52 p-2 shadow ">
                                {links}
                            </ul>
                        </div>
                        <a className=" text-xl md:text-3xl font-bold">Book Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 md:gap-4">
                        <a className="btn font-semibold text-base md:text-xl bg-[#23BE0A] rounded-xl">Sign In</a>
                        <a className="btn font-semibold text-base md:text-xl bg-[#59C6D2] rounded-xl">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;