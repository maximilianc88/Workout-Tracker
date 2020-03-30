const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workout", ({ body }, res) => {
    Workout.create({
        exercises: [req.body]
    }).then(newWorkout => {
        res.send(newWorkout);
    });
});

router.put("/api/workout/id:", function(req, res) {
    const id = req.params.id;
    const workout = req.body;
    Workout.findOneAndUpdate(
        { _id: id },
        { $push: { exercisess: workout } },
        { new: true }
    ).then(results => {
        res.send(results);
    });
});

router.get("/api/workout/range", function(req, res) {
    Workout.find({})
    .then(workouts => {
        res.send(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;