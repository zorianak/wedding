'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Password.module.css";

const PASSWORD = ""; 

const PasswordProtectedContent: React.FC = () => {
    const [inputPassword, setInputPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const savedPassword = localStorage.getItem("password");
        if (savedPassword === PASSWORD) {
            setIsAuthenticated(true);
        }
    }, []);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value);
    };

    const handlePasswordSubmit = () => {
        if (inputPassword === PASSWORD) {
            localStorage.setItem("password", inputPassword);
            setIsAuthenticated(true);
        } else {
            alert("Incorrect password");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <input
                        type="password"
                        value={inputPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                    />
                    <button onClick={handlePasswordSubmit}>Submit</button>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                {/* Add your protected content here */}
                <p>Welcome to the protected content!</p>
            </main>
        </div>
    );
};

export default PasswordProtectedContent;