const router = require('express').Router();
const db = require('../models');

async function getAllWorkouts(req, res){
    let workouts = await db.Workout.find();
    return res.json(workouts);
    
}
async function updateWorkout(req, res){
    // update existing workout
    try{
        const workout = await db.Workout.findOne({_id:req.params.id});
        workout.exercises.push(req.body);
        workout.save()
        res.json(workout);
    } catch(e){
        res.status(500).json({msg: "Bad request"}).end();
    }
    
}

async function addWorkout(req, res){
    const newWorkout = await db.Workout.create({exercises:[]});
    console.log(newWorkout); 
    return res.json(newWorkout)
}


// get all workouts
router.get('/workouts', getAllWorkouts)

// update workout
router.put('/workouts/:id',updateWorkout)

// get range

router.get('/workouts/range', getAllWorkouts)

router.post('/workouts',addWorkout )

module.exports = router;