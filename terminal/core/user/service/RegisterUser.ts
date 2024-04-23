import { StrongPassword } from "../../../../terminal/core/shared/StrongPassword";
import { UseCase } from "../../../../terminal/core/shared/UseCase";
import { User, UserProps } from "../model/User";
import { CriptoProvider } from "../provider/CriptoProvider";
import { DbProvider } from "../provider/DbProvider";

type Input = UserProps

export class RegisterUser implements UseCase<Input, void> {
    constructor(
        private repo: DbProvider,
        private cripto: CriptoProvider
    ) { }

    async exec(input: Input): Promise<void> {
        const password = new StrongPassword(input.password!)

        const user = new User({
            name: input.name,
            email: input.email,
            password: this.cripto.encrypt(password.value)
        })

        await this.repo.save(user)
    }
}