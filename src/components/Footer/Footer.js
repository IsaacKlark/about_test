import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg';
import logo_footer from '../../images/logo_footer.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="line"></div>
            <div className="footerColumnsWrapper">
                <div className="footerColumn1">
                    <img
                        src={logo_footer}
                        className="footerColumn1__logo"
                        alt="Kith and Kin"
                    />
                    <p className="footerColumn1__text">
                        Privacy policy - Terms &#38; Conditions
                </p>
                    <p className="footerColumn1__text">
                        All rights reserved ©
                    <br />
                    2020 K &#38; K
                </p>
                </div>

                <ul className="footerColumn2">
                    <li>
                        <Link to="/about" className="footerColumn2__link">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/howitworks" className="footerColumn2__link">
                            How It Works
                    </Link>
                    </li>
                    <li>
                        <Link to="/ourbooks" className="footerColumn2__link">
                            Our Books
                    </Link>
                    </li>
                    <li>
                        <Link to="/faqs" className="footerColumn2__link">
                            FAQs
                    </Link>
                    </li>
                </ul>
                <div className="footerColumn3">
                    <p className="footerColumn3__text">
                        Stay in touch. Be the first to know
                        <br />
                        about exclusive offers, gift ideas,
                        <br />
                        and new products.
                    </p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="footerColumn3__input"
                    />
                    <button type="button" className="footerColumn3__button">
                        <img src={arrow} alt="next" />
                    </button>
                </div>

                <div className="footerColumn4">
                    <Link to="/login" className="footerColumn4__link">
                        Login
                    </Link>
                    <div className="footerColumn4__iconsWrapper">
                        <img
                            src={facebook}
                            alt="facebook"
                        />
                        <img
                            src={instagram}
                            alt="instagram"
                            className="instagram"
                        />
                        <img
                            src={twitter}
                            alt="tweeter"
                        />
                    </div>
                    <p className="footerColumn4__text">
                        Architected by Bа́choo
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;