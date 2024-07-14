import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} E-commerce Dashboard. All rights reserved. | Designed by Avni Bansal</p>
            </div>
        </footer>
    );
}
