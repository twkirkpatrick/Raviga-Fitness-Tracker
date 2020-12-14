const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app){

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
    })

    

    
}