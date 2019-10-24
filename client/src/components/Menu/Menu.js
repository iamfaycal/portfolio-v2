import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Menu.css";
import { toggleMenu } from "../../actions/menu";
import { connect } from "react-redux";

const Menu = ({ toggleMenu }) => {
    const navItemClicked = e => {
        document.querySelector("#menu").classList.remove("menu--enterring");
        document.querySelector("#menu").classList.add("menu--leaving");
        setTimeout(toggleMenu, 200);
    };

    return (
        <section id="menu" className="menu--enterring">
            <nav className="mainNavigation">
                <Link
                    className="mainNavigation__item"
                    to="/#home"
                    onClick={e => navItemClicked(e)}
                >
                    accueil
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#about"
                    onClick={e => navItemClicked(e)}
                >
                    à propos
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#work"
                    onClick={e => navItemClicked(e)}
                >
                    réalisations
                </Link>
                <Link
                    className="mainNavigation__item"
                    to="/#contact"
                    onClick={e => navItemClicked(e)}
                >
                    contact
                </Link>
            </nav>
            <nav className="legalNavigation"></nav>
        </section>
    );
};

export default connect(
    null,
    { toggleMenu }
)(Menu);
