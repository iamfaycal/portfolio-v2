import React from "react";

import "./AboutSmartphone.css";
import "./AboutDesktop.css";

const About = () => {
    return (
        <section id="about">
            <h2 className="sectionTitle">à propos</h2>
            <p className="about__text">
                Hello, je suis Fayçal, développeur web créatif
                <br />
                dans le secteur de Mulhouse. J'aide les petites entreprises
                <br />
                qui souhaitent se démarquer en ligne à créer
                <br />
                des expériences uniques pour leurs visiteurs.
            </p>
            <a className="underlineLink" href="#work">
                voir mes dernières réalisations
            </a>
        </section>
    );
};

export default About;
