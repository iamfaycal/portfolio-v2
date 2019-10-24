import React, { useEffect } from "react";

import "./HomeSmartphone.css";
import "./HomeDesktop.css";

import Faycal from "../../assets/faycal.svg";

const Home = ({ transValues }) => {
    //console.log(transValues);
    useEffect(() => {
        //console.log(document.querySelector(".home__hugeText"));
        document.querySelector(".home__hugeText").style.transform =
            "translate(calc(-50% + " +
            transValues.x +
            "px), calc(-50% + " +
            transValues.y +
            "px))";
    }, [transValues.x, transValues.y]);

    return (
        <section id="home">
            <h2 className="home__title">
                développeur
                <br />
                créatif à Mulhouse
            </h2>
            <a className="underlineLink" href="#work">
                voir mes dernières réalisations
            </a>
            <img className="home__hugeText" src={Faycal} alt="" />
        </section>
    );
};

export default Home;
