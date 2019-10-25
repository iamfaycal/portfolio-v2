import React from "react";

import "./HeaderSmartphone.css";
import "./HeaderDesktop.css";

import { toggleMenu } from "../../actions/menu";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

const Header = ({ toggleMenu, menuVisible }) => {
    const onClick = e => {
        if (!menuVisible) {
            toggleMenu();
        } else {
            setTimeout(toggleMenu, 200);
            document.querySelector("#menu").classList.remove("menu--enterring");
            document.querySelector("#menu").classList.add("menu--leaving");
        }
    };
    return (
        <header>
            <div id="brand">
                <Link to="/#home">
                    <h1 className="brand__text">FH</h1>
                </Link>
            </div>
            <div
                className={`menuButton ${menuVisible && "menuButton--close"}`}
                onClick={e => onClick(e)}
            >
                <div className="menuButton__bar1"></div>
                <div className="menuButton__bar2"></div>
                <div className="menuButton__bar3"></div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    menuVisible: state.menu.menuVisible
});

export default connect(
    mapStateToProps,
    { toggleMenu }
)(Header);
