import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

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
                        console.log(text);
                    });
                } else {
                    res.text().then(text => {
                        console.log(text);
                    });
                }
            })
            .catch(err => console.log(err));

        setFormData(initialState);
    };

    return (
        <section id="contact">
            <h2 className="contact__title">restons en contact</h2>
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
                />
                <input
                    className="contactForm__submit SourceSansPro"
                    type="submit"
                />
            </form>
        </section>
    );
};

export default Contact;
