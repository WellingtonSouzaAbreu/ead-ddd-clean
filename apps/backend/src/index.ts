import cors from 'cors'
import express, { Request, Response } from "express"
import { UserRepository } from './services/database/UserRepository'

import dotenv from "dotenv"
dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: ["http://localhost:544", "http://localhost:3000"],
        optionsSuccessStatus: 200,
    }),
)

app.get('/', async (req: Request, res: Response) => {
    /*  const { database } = new MongoDatabase()
     console.log(database.createCollection('teste')) */

    const { saveUser } = new UserRepository()
    await saveUser({ name: 'Test' })

    res.status(200).send('Source endpoint...')
})

const serverPort = process.env.SERVER_PORT || 3000
app.listen(serverPort, () => console.log(`🔥 Server running on port ${serverPort}...`))
