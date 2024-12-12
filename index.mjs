import connectDB from './src/config/db.mjs'
import app from './src/app.mjs'
import 'dotenv/config'

//Conect DB
connectDB()

//Configure PORT
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`))