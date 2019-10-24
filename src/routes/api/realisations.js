const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

// Model realisation
const Realisation = require('../../models/Realisation');

// @route   GET api/realisations
// @desc    Get All Realisations
// @access  Public
router.get('/', (req, res) => {
    Realisation.find()
        .sort({ date: -1 })
        .then(realisations => res.json(realisations))
});

// @route   POST api/realisations
// @desc    POST a realisation
// @access  Public
router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'APQM1234', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            const newReal = new Realisation({
                title: req.body.title,
                content: req.body.content,
                authData
            }); 

            newReal.save()
                .then(realisation => res.json(realisation))     
        }
    });
})

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if(typeof authHeader !== 'undefined') {
        req.token = authHeader.split(' ')[1];
        next();
    } else {
        res.sendStatus(403)
    }
}

module.exports = router;
