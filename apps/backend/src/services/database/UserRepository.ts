import dotenv from "dotenv"
dotenv.config()

import { MongoClient, Db } from 'mongodb'

const databaseUrl = process.env.DATABASE_URL || ''
const databaseName = process.env.DATABASE_NAME

type User = {
    name: string
}

interface UserRepositoryInterface {
    saveUser: (user: User) => Promise<void>
    getUser: (id: string) => Promise<User>
}

export class UserRepository implements UserRepositoryInterface {
    private client: MongoClient
    public database: Db

    constructor() {
        this.client = new MongoClient(databaseUrl)
        this.database = this.client.db(databaseName)

        this.client.connect()
    }

    public async saveUser(user: User) {
        console.log('save')
        //  await this.database.collection('users').insertOne(user)
    }

    async getUser(id: string) {
        const res = this.database.collection('users').findOne({ id })
        console.log(res)
    }
}