export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export function TextInput(props: InputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-700 rounded p-2 outline-none focus:border border-zinc-500"
        />
    )
}
