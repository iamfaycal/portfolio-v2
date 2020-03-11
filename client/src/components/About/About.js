import React from "react";

import "./AboutSmartphone.css";
import "./AboutDesktop.css";

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">à propos</h2>
            <p className="about__text">
                Hello, je suis Fayçal, développeur web créatif dans le secteur
                de Mulhouse. J'aide les entreprises qui souhaitent se
                démarquer en ligne à créer des expériences uniques pour leurs
                visiteurs.
            </p>
            <a className="underlineLink" href="#work">
                voir mes dernières réalisations
            </a>
        </section>
    );
};

export default About;
