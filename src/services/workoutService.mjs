import Workout from "../models/workoutModel.mjs"
const getAllWorkouts = async () => {
    //Returns all workouts
    return await Workout.find()
}

const getWorkout = async (id) => { 
    //Returns workout by ID
    return await Workout.findById(id)
}

const createWorkout = async (data) => {
    const newData = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    const newWorkout = new Workout(newData)
    return await newWorkout.save()
}

const updateWorkout = async (id, data) => {
    const newData = {
        ...data,
        updatedAt: new Date()
    }
    return await Workout.findByIdAndUpdate(id, newData, { new: true })
}

const deleteWorkout = async (id) => {
    return await Workout.findByIdAndDelete(id)
}

export default {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}