const router = require("express").Router();
const Workout = require("../models/workout.js");


// GET all workouts from DB
router.get("/api/workout", (req, res) => {
    Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" }}}])
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// GET workout range from DB for stats for last 7 days
router.get("/api/workout/range", (req, res) => {
    Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" }}}])
    .limit(7)
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});


// POST a new workout to DB
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// UPDATE a workout by ID
router.put("/api/workout/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: { ...req.body }}}
        ).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;