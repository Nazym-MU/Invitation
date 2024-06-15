import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <span style={{ color: "white", fontWeight: "lighter" }}>
                Birthday Invitation developed by Nazym Zhiyengaliyeva, © {currentYear} — All rights reserved.
            </span>
        </footer>
    );
}

export default Footer;
