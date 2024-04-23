export class StrongPassword {
    constructor(readonly value: string) {
        if (!value) throw new Error('A senha é obrigatória!')
        if (value.length < 8) throw new Error('A senha deve ter pelo menos 8 caracteres!')
        if (!/[A-Z]/.test(value)) throw new Error('Senha deve ter pelo menos uma letra maiuscula!')
    }
}