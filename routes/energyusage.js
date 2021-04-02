const express = require('express');
const router = express.Router();
const EnergyUsage = require('../models/EnergyUsage');
const Joi = require('@hapi/joi');

router.get('/', async (req, res) => {

    const energyUsageList = await EnergyUsage
        .find()

    res.send(energyUsageList);
});


router.post('/', async (req, res) => {
    let { error } = energyUsageSchemaValidation.validate(req.body);
    if (error) { console.log(error); return res.status(400).send(error.details[0].message) }
    try {

        energyUsage = new EnergyUsage({
            id: req.body.id,
            Kwh: req.body.Kwh,
            date: req.body.date,
            price: req.body.price
        });

        await energyUsage.save();

        res.status(200).send(energyUsage);
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Error');
    }
});
// Schema Validation 
const energyUsageSchemaValidation = Joi.object({
    id: Joi.string().required(),
    Kwh: Joi.number().required(),
    date: Joi.string().required().max(300),
    price: Joi.number().required(),

});
module.exports = router;