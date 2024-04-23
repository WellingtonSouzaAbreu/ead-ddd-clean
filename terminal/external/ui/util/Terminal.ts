import { terminal } from "terminal-kit";
import { InputFieldOptions } from "terminal-kit/Terminal";

export class Terminal {
    static title(text: string) {
        terminal.clear()
        terminal.bold.magenta(`${text}\n`)
        terminal.bold.magenta('-'.repeat(text.length))
    }

    static async menu(title: string, options: string[]) {
        Terminal.title(title)
        const selectedOption = await terminal.singleColumnMenu(options).promise
        return [selectedOption.selectedIndex, selectedOption.selectedText]
    }

    static async awaitEnter(): Promise<void> {
        terminal.white('\nPress enter to continue...')
        await terminal.inputField({ echo: false }).promise
    }

    static async requiredInput(label: string, options?: InputFieldOptions): Promise<string> {
        terminal.gray(`\n${label}: `)
        const value = await terminal.inputField(options).promise
        if (value && value.trim()) return value
        return Terminal.requiredInput(label, options)
    }

    static success(text: string) {
        terminal.green(`\n${text}`)
    }

    static error(text: string) {
        terminal.red(`\n${text}`)
    }
}