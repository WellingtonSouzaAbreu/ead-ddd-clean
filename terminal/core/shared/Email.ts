export class Email {
    constructor(
        readonly value: string,
    ) {
        if (!value) throw new Error('O email é obrigatório')
        if (!value.match(/@/)) throw new Error('O email não é valido')
    }
}