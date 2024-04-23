import { Terminal } from "../util/Terminal";

import { RegisterUserAdapter } from "../../../adapter/controller/RegisterUser";

import { Email } from "../../../core/shared/Email";
import { Name } from "../../../core/shared/Name";
import { StrongPassword } from "../../../core/shared/StrongPassword";
import { Cripto } from "../../auth/Cripto";
import { UserRepo } from "../../db/Repo";

export async function registerUser() {
    Terminal.title('Registrar usuário')

    try {
        const name = await Terminal.requiredInput('Digite seu nome', { default: 'Keila' })
        new Name(name)

        const email = await Terminal.requiredInput('Digite seu email', { default: 'default@gmail.com' })
        new Email(email)

        const password = await Terminal.requiredInput('Digite sua senha', { default: 'default123' })
        new StrongPassword(password)

        const criptoProvider = new Cripto()
        const repoProvider = new UserRepo()
        const registerUser = new RegisterUserAdapter(criptoProvider, repoProvider, { name, email, password })
        const res = await registerUser.exec()

        Terminal.success(`Usuário ${res.validationCode} cadastrado com sucesso!`)
    } catch (error: any) {
        Terminal.error(error.message)
    }

    await Terminal.awaitEnter()
}