const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workouts => {
        console.log(workouts);
        return res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post(`/api/workouts`, ({ body }, res) => {
    Workout.create(body)
      .then(workouts => res.json(workouts))
      .catch(err => res.status(400).json(err));
  });

  router.put(`/api/workouts/:id`, ({ body, params }, res) => {
    Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } })
      .then(dbExercise => res.json(dbExercise))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.get(`/api/workouts/range`, (req, res) => {
    Workout.find({})
      .then(dbExercise => res.json(dbExercise))
      .catch(err => res.status(404).json(err));
  });

module.exports = router;