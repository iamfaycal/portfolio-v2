const express = require("express");
const router = express.Router();
const sendgrid = require("@sendgrid/mail");
const fetch = require("node-fetch");

router.post("/", (req, res) => {
    // Empty fields verification
    if (
        req.body.name &&
        req.body.email &&
        req.body.message &&
        req.body.dataConsent &&
        req.body.recaptcha
    ) {
        // ReCaptcha verification
        fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:
                "secret=" +
                process.env.RECAPTCHA_API_KEY +
                "&response=" +
                req.body.recaptcha +
                "&remoteip=" +
                req.ip
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    // Email validation
                    if (emailIsValid(req.body.email)) {
                        // Sending the email
                        sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
                        const email = {
                            to: "contact@faycalhammoudi.fr",
                            from: req.body.name + " <" + req.body.email + ">",
                            subject:
                                "Message reçu de la part de " + req.body.name,
                            text: req.body.message
                        };
                        sendgrid
                            .send(email)
                            .then(() => {
                                res.status(200);
                                res.send(
                                    "Votre message a bien été envoyé, je vous réponderai dans les plus bref délai !"
                                );
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(400);
                                res.send(
                                    "Votre message n'a pas pu être envoyé, veuillez reessayer plus tard"
                                );
                            });
                    } else {
                        res.status(400);
                        res.send("Veuillez entrer une adresse email valide");
                    }
                } else {
                    res.status(400);
                    res.send("ReCaptcha incorrect");
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400);
                res.send(
                    "Un erreur est survenue, veuillez essayer ulterieurement"
                );
            });
    } else {
        res.status(400);
        res.send(
            "Veuillez renseigner tous les champs du formulaire ainsi que la verification ReCaptcha"
        );
    }
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = router;
