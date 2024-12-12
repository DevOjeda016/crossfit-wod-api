import express from "express"
const router = express.Router()
import workoutController from "../../controllers/workoutController.mjs"

router
    .get("/", workoutController.getAllWorkouts)
    .get("/:workoutId", workoutController.getWorkout)
    .post("/", workoutController.createWorkout)
    .patch("/:workoutId", workoutController.updateWorkout)
    .delete("/:workoutId", workoutController.deleteWorkout)
    
export default router