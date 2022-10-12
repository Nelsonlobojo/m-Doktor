const express = require('express');
const router = express.Router();
const { Doctor } = require('../models/doctor');

router.get(`/`,async (req, res) => {
    const doctorList = await Doctor.find();

    if(!doctorList) {
        res.status(500).json({success: false})
    }
    res.send(doctorList);
});

router.post(`/`, (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
    });
    doctor.save().then(createdDoctor => {
        res.status(201).json(createdDoctor);
    }).
    catch(error => {
        res.status(500).json({
            error: error,
            success: false
        });
    });
});

module.exports = router;