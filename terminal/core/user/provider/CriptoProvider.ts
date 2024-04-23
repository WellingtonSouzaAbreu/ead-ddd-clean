export interface CriptoProvider {
    encrypt: (password: string) => string
    compare: (password: string, hash: string) => boolean
}