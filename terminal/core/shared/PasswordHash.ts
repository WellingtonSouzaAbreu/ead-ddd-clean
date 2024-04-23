export class PasswordHash {
    constructor(
        readonly value: string
    ) {
        if (value.length < 8) throw new Error("Senha teve ter pelo menos 8 caracteres")
    }
}