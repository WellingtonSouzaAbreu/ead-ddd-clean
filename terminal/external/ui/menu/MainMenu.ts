import { registerUser } from "../user/registerUser";
import { Terminal } from "../util/Terminal";

export class MainMenu {
    async render() {
        const [_, text] = await Terminal.menu('Teste de terminal', [
            'Register user',
            'option 2',
            'Sair'
        ])

        switch (text) {
            case 'Register user':
                await registerUser()
                break
            case 'option 2':
                console.log('option 2')
                break
            case 'Sair':
                process.exit(0)
        }

        await this.render()
    }
}