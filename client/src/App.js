import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./AppSmartphone.css";
import "./AppDesktop.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import SingleWork from "./components/Work/SingleWork";
import Contact from "./components/Contact/Contact";
import Legal from "./components/Legal/Legal";

import consentUI from "tartemeringuee/consent-ui";
import consentManager from "tartemeringuee/consent-manager";
import getTextFR from "tartemeringuee/lang/fr";
import gtag from "tartemeringuee/services/gtag";

import { connect } from "react-redux";

consentManager()
    .register(gtag('UA-133179915-1'))
    .setUI(
        consentUI({
            'getText': getTextFR( { 'privacyURL': '/mentions-legales/' } )
        }))
    .launch();

function App({ menuVisible }) {
    const [transValues, setTransValues] = useState({
        x: 0,
        y: 0
    });

    let vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    let vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );

    const handleMouseMove = e => {
        let transX = (e.nativeEvent.clientX - vw / 2) / 10;
        let transY = (e.nativeEvent.clientY - vh / 2) / 10;
        //console.log("onMouseMove", transX, transY);
        setTransValues({
            x: transX,
            y: transY
        });
    };

    return (
        <div id="wrapper" onMouseMove={e => handleMouseMove(e)}>
            <Router>
                <Header />
                {menuVisible && <Menu />}
                <Switch>
                    <Route
                        exact
                        path="/realisation/:name"
                        component={SingleWork}
                    />
                    <Route
                        exact
                        path="/mentions-legales"
                        component={Legal}
                    />
                    <Route
                        path="/"
                        render={() => (
                            <div className="components">
                                <Home transValues={transValues} />
                                <About />
                                <Work />
                                <Contact />
                            </div>
                        )}
                    />
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

const mapStateToProps = state => ({
    menuVisible: state.menu.menuVisible
});

export default connect(
    mapStateToProps,
    null
)(App);
