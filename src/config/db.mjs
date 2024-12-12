import mongoose from 'mongoose'
import 'dotenv/config'

const user = process.env.DB_USER
const pass = process.env.DB_PASS
const host = process.env.DB_HOST
const dbName = process.env.DB_NAME
const options = process.env.DB_OPTIONS
const uri = `mongodb+srv://${user}:${pass}@${host}/${dbName}?${options}`;
mongoose.set('strictQuery', false)

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('Conexión exitosa a MongoDB')
    } catch (err) {
        console.error(`Error al conectar a MongoDB ${err}`)
        process.exit(1)
    }
}

export default connectDB
