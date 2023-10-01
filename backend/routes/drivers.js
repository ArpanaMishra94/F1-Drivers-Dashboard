const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/driver', (req, res) => {
    const query = "SELECT * FROM f1Drivers.`f1-drivers`";
    connection.query(query,(err, results) => {
        if(!err) {
            return res.send(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
});


router.get('/read', (req, res, next) => {
    var query = "SELECT * FROM f1Drivers.`f1-drivers`";
    connection.query(query,(err, results) => {
        if(!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;
