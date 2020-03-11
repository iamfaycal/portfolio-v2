import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div>Copyright © {new Date().getFullYear()} Fayçal HAMMOUDI</div>
            <div>
                <span>tout droit réservés</span>
                {" "}|{" "}
                <Link to="/mentions-legales">mentions légales</Link>
            </div>
        </footer>
    )
}

export default Footer; 