import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { httpPost } from "../services/requests"
/* import { UsuarioDTO } from "adapters"
import useSessao from "../hooks/useSessao"
import useApi from "../hooks/useApi" */

type UsuarioDTO = any

interface AuthContextProps {
    carregando: boolean
    // usuarioAutenticado: UsuarioDTO | null
    register: (usuario: UsuarioDTO) => Promise<void>
    login: (usuario: UsuarioDTO) => Promise<void>
    // logout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as any)

export function AuthProvider(props: any) {
    /* const { httpPost } = useApi()
    const {
        token,
        usuarioAutenticado,
        criar: criarSessao,
        limpar: limparSessao,
    } = useSessao() */

    const [carregando, setCarregando] = useState<boolean>(true)

    /* const iniciarSessao = useCallback(async () => {
        if (!token || !usuarioAutenticado) return setCarregando(false)
        setCarregando(false)
    }, [token, usuarioAutenticado]) */

    /*  useEffect(() => {
         iniciarSessao()    
     }, [iniciarSessao]) */

    async function register(usuario: UsuarioDTO) {
        const resp = await httpPost()
        window.alert(`register: ${resp}`)        // const resp = await await ("/registrar", usuario)
        // if (resp.sucesso) await login(usuario)
    }

    async function login(usuario: UsuarioDTO) {
        const resp = await httpPost()
        window.alert(`login: ${resp}`)
        // const resp = await httpPost("/login", usuario)
        // criarSessao(resp.json)
    }

    //  function logout() {
    //      limparSessao()
    //  }

    return (
        <AuthContext.Provider
            value={{
                carregando,
                //  usuarioAutenticado,
                login,
                //  logout,
                register,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext }
