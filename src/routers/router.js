const express = require("express");
const router = express.Router();
const MenAthlete = require('../models/model');

// get route
router.get("/", async(req, res) => {
    res.send('Hello there, I am under the water')
});

// add new athlete
router.post('/athlete', async(req, res) => {
    try{
        const newAthlete = new MenAthlete(req.body);
        const saveAthlete = await newAthlete.save();
        return res.status(201).send(saveAthlete);
    } catch (e) {
        return res.status(400).send(e);
    }
});

// get data of athletes
router.get('/athlete', async(req, res) => {
    try{
        const athletes = await MenAthlete.find();
        return res.send(athletes);
    } catch (e) {
        return res.send(e);
    }
});

// get data of an individual athlete by its id
router.get('/athlete/:id', async(req, res) => {
    try{
        const _id = req.params.id;
        const athlete = await MenAthlete.findById(_id);
        if(!athlete){
            res.send(404).send();
        }
        return res.send(athlete);
    } catch (e) {
        return res.status(500).send(e);
    }
});

/* get data of an individual athlete by its COUNTRY
router.get('/athlete/:country', async(req, res) => {
    try{
        const country = req.params.country;
        const athlete = await MenAthlete.find({"country": country}).exec();
        if(!athlete){
            res.send(404).send();
        }
        return res.send(athlete);
    } catch (e) {
        return res.status(500).send(e);
    }
});
*/

// update the data of an athlete by its id
router.patch("/athlete/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const athlete = await MenAthlete.findByIdAndUpdate(_id, req.body, {new: true});
        return res.status(200).send(athlete);
    } catch (e) {
        return res.status(404).send(e);
    }
});

// delete the data of an athlete by its id
router.delete("/athlete/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const deleteAthlete = await MenAthlete.findByIdAndDelete(_id);
        if(!deleteAthlete) {
            return res.status(404).send();
        }
        return res.send(deleteAthlete);
    } catch (e) {
        return res.status(500).send(e);
    }
});

module.exports = router;