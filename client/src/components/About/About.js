import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about">
            <h2 className="about__title">à propos</h2>
            <p className="about__text">
                Hello, je suis Fayçal, développeur web créatif
                <br />
                dans le secteur de Mulhouse. Je développe des
                <br />
                sites internet sur-mesure.
            </p>
            <a className="underlineLink" href="#work">
                voir mes dernières réalisations
            </a>
        </section>
    );
};

export default About;
