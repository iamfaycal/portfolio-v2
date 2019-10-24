import React, { useState, useEffect } from "react";

import "./WorkSmartphone.css";
import "./WorkDesktop.css";

import { Link } from "react-router-dom";

const Work = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        const url = "//api.faycalhammoudi.fr/wp-json/wp/v2/project";
        fetch(url)
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section id="work">
            <h2 className="sectionTitle">mes réalisations</h2>
            {projects && (
                <div className="workGrid">
                    {projects.map(project => (
                        <Link
                            to={`/realisation/${project.slug}`}
                            key={project.slug}
                            className="workItem"
                        >
                            <div className="workItem__shadow"></div>
                            <p
                                className="workItem__title SourceSansPro"
                                dangerouslySetInnerHTML={{
                                    __html: project.title.rendered
                                }}
                            ></p>
                            <img
                                className="workItem__image"
                                src={project.acf.project_img}
                                alt={project.slug}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Work;
