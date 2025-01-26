import React from 'react';
import './Footer.css';
import CustomLink from './CustomLink';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>&copy; Callie</div>
            <nav>
                <ul>
                    <li><CustomLink href="/" text="Home" /></li>
                    <li><CustomLink href="/about" text="About" /></li>
                    <li><CustomLink href="/rsvp" text="RSVP" /></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;