import dotenv from "dotenv"
dotenv.config()

import { MongoClient, Db } from 'mongodb'

const databaseUrl = process.env.DATABASE_URL || ''
const databaseName = process.env.DATABASE_NAME

export class MongoDatabase {
    private client: MongoClient
    public database: Db

    constructor() {
        this.client = new MongoClient(databaseUrl)
        this.database = this.client.db(databaseName)

        this.connect()
    }

    async connect() {
        try {
            await this.client.connect()
            console.log('🔥 Client MongoDb is running...')
        } catch (error) {
            console.error('Error connecting to MongoDB:', error)
        }
    }

    private async close() {
        try {
            await this.client.close()
            console.log('🧊 Client MongoDb is stopped...')
        } catch (error) {
            console.error('Error closing MongoDB connection:', error)
        }
    }

    async restart() {
        await this.close()
        await this.connect()
        console.log('🔄 Client MongoDb is restarted...')
    }
}
