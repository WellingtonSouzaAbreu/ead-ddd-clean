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
    res.status(200).send('Source endpoint...')
})

app.get('/user/:id', async (req: Request, res: Response) => {
    const { getUserById } = new UserRepository()
    const userData = await getUserById(req.params.id)

    res.status(200).send(userData)
})

const serverPort = process.env.SERVER_PORT || 3000
app.listen(serverPort, () => console.log(`🔥 Server running on port ${serverPort}...`))
