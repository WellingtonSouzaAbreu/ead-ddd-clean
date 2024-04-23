export class Name {
    constructor(
        readonly full: string,
        private readonly attribute?: string,
        private min: number = 3,
        private max: number = 20
    ) {
        if (!full) throw new Error(`O atributo ${attribute} não pode ser vazio!`)
        if (min > max) throw new Error("O valor mínimo não pode ser maior que o máximo!")
        if (full.length < min || full.length > max) throw new Error("O tamanho do nome deve estar entre o mínio e o máximo");
    }
}