import React from 'react';
import Link from 'next/link';
import './Link.css';

type CustomLinkProperties = {
    href: string;
    text: string;
    target?: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProperties> = (props: CustomLinkProperties) => {
    const { href, text, target, className } = props;
    return (
        <Link href={href} target={target} className={typeof className === 'string' ? className : ''} passHref>
            {text}
        </Link>
    );
};

export default CustomLink;