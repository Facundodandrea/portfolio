import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">FED.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/facudandrea1/"
                        className="home__social-icon"
                        target="_blank"
                    >
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/facundo-d-andrea-0081491b6/"
                        className="home__social-icon"
                        target="_blank"
                    >
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a
                        href="https://github.com/Facundodandrea"
                        className="home__social-icon"
                        target="_blank"
                    >
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Facundo E. D'Andrea. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
