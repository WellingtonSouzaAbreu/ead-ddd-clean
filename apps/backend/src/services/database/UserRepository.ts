import dotenv from "dotenv"
dotenv.config()

import { MongoClient, Db, ObjectId, WithId } from 'mongodb'
import { MongoDatabase } from "./config"

const databaseUrl = process.env.DATABASE_URL || ''
const databaseName = process.env.DATABASE_NAME

type User = {
    id: string
    name: string
}

interface UserRepositoryInterface {
    saveUser: (user: User) => Promise<void>
    getUserById: (id: string) => Promise<User | null>
}

export class UserRepository implements UserRepositoryInterface {
    static database: Db

    constructor() {
        UserRepository.database = new MongoDatabase().database
    }

    public async saveUser(user: Omit<User, 'id'>) {
        UserRepository.database.collection('users').insertOne(user)
    }

    static changeIdKey(user: WithId<Omit<User, 'id'>>) {
        const { _id, ...rest } = user
        return { id: user._id.toHexString() as string, ...rest }
    }

    async getUserById(id: string) {
        const userDoc = await UserRepository.database.collection('users').findOne({ _id: new ObjectId(id) })
        if (!userDoc) return null

        console.log(userDoc)

        return UserRepository.changeIdKey(userDoc as WithId<User>)
    }
}