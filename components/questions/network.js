const express = require("express");
const Model = require("./model");
const router = express.Router();

router.get("/", async function(req, res) {
    try {
        const data = await Model.find()
        const shuffledData = data.sort(() => 0.5 - Math.random());
        res.send(shuffledData)
    } catch (error) {
        res.send("Error getting data")
    }
});

router.post("/create", async function(req, res) {
    const new_question = new Model(req.body);
    try {
        const result = await new_question.save();
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
});



module.exports = router;