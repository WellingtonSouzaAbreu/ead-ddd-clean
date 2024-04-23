import { CriptoProvider } from "../../core/user/provider/CriptoProvider";

export class Cripto implements CriptoProvider {

    encrypt(password: string): string {
        return password.split('').reverse().join('')
    }

    compare(password: string, hash: string): boolean {
        return hash === this.encrypt(password)
    }
}