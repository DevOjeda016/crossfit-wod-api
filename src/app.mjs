import express from 'express'
import v1Router from './v1/routes/workoutRoutes.mjs'

const app = express()

app.use(express.json())
app.use('/api/v1/workouts', v1Router)

export default app