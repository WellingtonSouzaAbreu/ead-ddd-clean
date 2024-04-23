import { CriptoProvider } from "./../../core/user/provider/CriptoProvider"
import { UserDTO } from "./../dto/UserDTO"
import { RegisterUser } from "./../../core/user/service/RegisterUser"
import { DbProvider } from "../../core/user/provider/DbProvider"
import { UserProps } from "../../core/user/model/User"

export class RegisterUserAdapter {
    constructor(
        private readonly cripto: CriptoProvider,
        private readonly repo: DbProvider,
        private readonly user: UserProps
    ) { }

    async exec(): Promise<UserDTO> {
        const useCase = new RegisterUser(this.repo, this.cripto)
        await useCase.exec(this.user)
        return {
            ...this.user,
            validationCode: '123456'
        }
    }
}
