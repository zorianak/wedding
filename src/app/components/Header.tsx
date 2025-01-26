import React from 'react';
import './Header.css';
import CustomLink from './CustomLink';

const Header: React.FC = () => {
    return (
        <header className="header go">
            <h1>Callie and Tobey&apos;s Wedding</h1>
            <nav>
                <ul>
                    <li><CustomLink href="/" text="Home" /></li>
                    <li><CustomLink href="/about" text="About" /></li>
                    <li><CustomLink href="/rsvp" text="RSVP" /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;