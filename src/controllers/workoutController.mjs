import workoutService from "../services/workoutService.mjs"
const getAllWorkouts = async (req ,res) => {
    try {
        const workouts = await workoutService.getAllWorkouts()
        res.status(200).json(workouts)
    } catch (err) {
        res.status(500).send('Error getting workouts')
    }
}

const getWorkout = async (req, res) => {
    try {
        const workoutId = req.params.workoutId
        const workout = await workoutService.getWorkout(workoutId)
        if (!workout) {
            return res.status(404).json({ message: `Workout not found` })
        }
        res.status(200).json(workout)
    } catch (err) {
        res.status(500).json({ message: 'Error getting workout', err })
    }
}

const createWorkout = async (req, res) => {
    try {
        const { body } = req
        if (
            !body.name ||
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
        ) {
            return
        }
        const newWorkout = await workoutService.createWorkout(req.body)
        res.status(201).json(newWorkout)
    } catch (err) {
        res.status(500).json({ message: 'Error creating workout', err })
    }
}

const updateWorkout = async (req, res) => {
    try {
        const {
            body,
            params: { workoutId }
        } = req 
        if (!workoutId) {
            return
        }
        const workoutUpdated = await workoutService.updateWorkout(workoutId, body)
        if (!workoutUpdated) {
            return res.status(404).json({ message: 'Workout not found'})
        }
        res.status(200).json(workoutUpdated)
    } catch (err) {
        res.status(500).json({ message: 'Error updating workout', err})
    }
}

const deleteWorkout = async (req, res) => {
    try {
        const { params: { workoutId } } = req
        const workoutDeleted = await workoutService.deleteWorkout(workoutId)
    if (!workoutDeleted) {
        return res.status(404).json({ message: 'Workout not found'})
    }
    res.status(200).json(workoutDeleted)
    } catch (err) {
        res.status(500).json({ message: 'Error deleting workout', err})
    }
}

export default {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}