import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Header = ({ route }) => {
    return (
        <header>
            <div className="headerTop">
                <nav className="headerTop__side">
                    <ul className="headerTop__list">
                        <li>
                            <Link to="/about" className="headerTop__link">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/howitworks" className="headerTop__link">
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link to="/ourbooks" className="headerTop__link">
                                Our Books
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs" className="headerTop__link">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </nav>
                <img
                    src={logo}
                    className="headerTop__logo"
                    alt="Kith and Kin"
                />
                <div className="headerTop__side">
                    <ul className="headerTop__list headerTop__leftList">
                        <li>
                            <Link to="/login" className="headerTop__link">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/create" className="headerTop__link headerTop__createBook">
                                Create a Book
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 className="pageRoute">
                {route}
            </h2>
            <h1 className="mainHeader">
                We are friends and family
            </h1>
            <h3 className="underMainHeader">
                Learn how we came to be, and what drives our work.
            </h3>
        </header>
    )
};

export default Header;