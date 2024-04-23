import { Terminal } from "../util/Terminal";

export async function registerUser() {
    Terminal.title('Registrar usuário')

    const name = await Terminal.requiredInput('Digite seu nome', { default: 'Keila' })
    const email = await Terminal.requiredInput('Digite seu email', { default: 'default@gmail.com' })
    const password = await Terminal.requiredInput('Digite sua senha', { default: 'default123' })

    Terminal.success(`Usuário ${name} com sucesso`)
    Terminal.success(`${email}`)
    Terminal.success(`${password}`)

    await Terminal.awaitEnter()
}