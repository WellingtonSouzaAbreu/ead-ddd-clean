import { useState } from "react"

import { Button, TextInput } from "@mantine/core"
import { useAuthContext } from "../context/AuthContext"
// import Mensagens from "@/components/shared/Mensagens" 

export function Auth() {
    const [usuario, setUsuario] = useState<any>({}) // TODO TYpe
    const [modo, setModo] = useState<"login" | "registro">("login")

    const alternarModo = () => setModo(modo === "login" ? "registro" : "login")

    const { /* usuarioAutenticado, */ register, login } = useAuthContext()

    // const router = useRouter()
    // if (usuarioAutenticado) {
    //     router.push("/")
    //     return null
    // }

    function alterarAtributo(atributo: string) {
        return (e: any) => {
            setUsuario({
                ...usuario,
                [atributo]: e?.target?.value ?? e,
            })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen">
            <h1 className="text-3xl font-black self-center">
                {modo === "login" ? "Entre com a sua conta" : "Cadastre-se na plataforma"}
            </h1>
            <div className="flex flex-col gap-1 w-96">
                {modo === "registro" && (
                    <TextInput
                        label="Nome"
                        value={usuario.nome ?? ""}
                        onChange={alterarAtributo("nome")}
                    />
                )}
                <TextInput
                    label="Email"
                    value={usuario.email ?? ""}
                    onChange={alterarAtributo("email")}
                />
                <TextInput
                    label="Senha"
                    type="password"
                    value={usuario.senha ?? ""}
                    onChange={alterarAtributo("senha")}
                />

                <div className={`flex-1 flex flex-col gap-3 mt-5`}>
                    <Button
                        onClick={() =>
                            modo === "registro" ? register(usuario) : login(usuario)
                        }
                    >
                        {modo === "registro" ? "Registrar" : "Login"}
                    </Button>
                    <Button onClick={alternarModo} variant="subtle">
                        {modo === "registro"
                            ? "Já possui conta?"
                            : "Deseja se registrar?"}
                    </Button>
                </div>
            </div>
            <div className="absolute top-4 right-4">
                {/* <Mensagens /> */}
                Mensagens
            </div>
        </div>
    )
}
