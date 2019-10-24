const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
var md5 = require("md5");

// @route   POST api/login
// @desc    POST login
// @access  Public
router.post("/", (req, res) => {
    const user = {
        id: 1,
        username: "iamfayy",
        email: "contact@faycalhammoudi.fr",
        password: "PASSWORD"
    };

    console.log(req.body);

    if (
        req.body.username !== undefined &&
        req.body.username == user.username &&
        req.body.password == user.password
    ) {
        jwt.sign({ user }, "PASSWORD", { expiresIn: "10m" }, (err, token) => {
            res.json({ token });
        });
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;
