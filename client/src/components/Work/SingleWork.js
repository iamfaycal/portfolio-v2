import React, { useState, useEffect } from "react";
import "./SingleWork.css";
import { HashLink as Link } from "react-router-hash-link";

const SingleWork = ({ match: { params } }) => {
    const [project, setProject] = useState();

    useEffect(() => {
        const url =
            "http://api.faycalhammoudi.fr/wp-json/wp/v2/project?slug=" +
            params.name;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProject(data[0]);
                console.log(data);
            });
    }, [params.name]);

    return (
        <section id="singleWork" className="section--enterring">
            {project && (
                <React.Fragment>
                    <div className="singleWork__header">
                        <div className="singleWork__headerLeft">
                            <Link
                                to="/#work"
                                className="singleWork__returnButton"
                            >
                                &larr;&nbsp;toutes les réalisations
                            </Link>
                            <h1
                                className="singleWork__title"
                                dangerouslySetInnerHTML={{
                                    __html: project.title.rendered
                                }}
                            ></h1>
                        </div>
                        <img
                            className="singleWork__image"
                            src={project.acf.project_img}
                            alt={project.slug}
                        />
                    </div>
                    <div
                        className="singleWork__content"
                        dangerouslySetInnerHTML={{
                            __html: project.acf.project_description
                        }}
                    ></div>
                    {project.acf.project_link && (
                        <a
                            className="singleWork__projectLink underlineLink"
                            href={project.acf.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Voir le site&nbsp;&rarr;
                        </a>
                    )}
                </React.Fragment>
            )}
        </section>
    );
};

export default SingleWork;
