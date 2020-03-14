import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./ContactSmartphone.css";
import "./ContactDesktop.css";

const Contact = () => {
    const recaptchaRef = React.createRef();

    const initialState = {
        name: "",
        email: "",
        message: "",
        dataConsent: false,
        recaptcha: ""
    };
    const [formData, setFormData] = useState(initialState);

    const onUpdate = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onConsent = e => {
        setFormData({
            ...formData,
            dataConsent: e.target.checked
        });
    };

    const onCaptchaUpdate = val => {
        setFormData({
            ...formData,
            recaptcha: val
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        recaptchaRef.current.reset();

        fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.status !== 200) {
                    res.text().then(text => {
                        setAlert(text, "error");
                        console.log(text);
                    });
                } else {
                    res.text().then(text => {
                        setAlert(text, "success");
                        console.log(text);
                    });
                    setFormData(initialState);
                }
            })
            .catch(err => console.log(err));
    };

    const setAlert = (text, type) => {
        document.querySelector(".contactForm__alert").innerHTML = text;
        document
            .querySelector(".contactForm__alert")
            .classList.add("contactForm__alert--" + type);
        setTimeout(() => {
            document
                .querySelector(".contactForm__alert")
                .classList.remove("contactForm__alert--" + type);
            document.querySelector(".contactForm__alert").innerHTML = "";
        }, 5000);
    };

    return (
        <section id="contact">
            <h2 className="sectionTitle">restons en contact</h2>
            <form className="contactForm" onSubmit={onSubmit}>
                <input
                    className="contactForm__input SourceSansPro"
                    type="text"
                    name="name"
                    placeholder="votre nom & prenom"
                    onChange={e => onUpdate(e)}
                    value={formData.name}
                />
                <input
                    className="contactForm__input SourceSansPro"
                    type="email"
                    name="email"
                    placeholder="votre adresse email"
                    onChange={e => onUpdate(e)}
                    value={formData.email}
                />
                <textarea
                    className="contactForm__textarea SourceSansPro"
                    name="message"
                    placeholder="votre message"
                    onChange={e => onUpdate(e)}
                    value={formData.message}
                ></textarea>
                <div className="contactForm__consent">
                    <input
                        className="contactForm__consentOriginalCheckbox"
                        type="checkbox"
                        name="dataConsent"
                        id="dataConsent"
                        onChange={e => onConsent(e)}
                        checked={formData.dataConsent}
                    />
                    <span className="contactForm__consentCheckbox"></span>
                    <label
                        className="contactForm__consentLabel"
                        htmlFor="dataConsent"
                    >
                        En validant ce formulaire j'accepte que les informations
                        saisies soit enregistrés par Fayçal HAMMOUDI et utilisés
                        pour me recontacter. En aucun cas ces informations ne
                        seront vendus où cédées (c'est promis).
                    </label>
                </div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    className="contactForm__reCaptcha"
                    sitekey="6Lc7WBIUAAAAAOmttgxELEfmxOaXgXd-MdGrqVSa"
                    theme="dark"
                    onChange={onCaptchaUpdate}
                    size="normal"
                />
                <div className="contactForm_submitGroup">
                    <input
                        className="contactForm__submit SourceSansPro"
                        type="submit"
                    />
                    <span className="contactForm__alert"></span>
                </div>
            </form>
        </section>
    );
};

export default Contact;
