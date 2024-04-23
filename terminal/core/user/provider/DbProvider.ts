import { User } from "../model/User";

export interface DbProvider {
    save(user: User): Promise<void>
}