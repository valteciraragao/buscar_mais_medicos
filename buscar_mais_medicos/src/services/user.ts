import { isAxiosError } from 'axios'
import api from './config'
import { toast } from 'react-toastify'


export async function PostLoginAcess({email, senha}:LoginParams) {
    try {
        const response = await api.post('login',{},{
            params:{
                email: email,
                password: senha
            }
        })
    
        const token = response.data.token
        localStorage.setItem('token', token)
    } catch (error) {
        if(isAxiosError(error)){
            if(error.response?.status === 401){
                toast("Senha incorreta")
            }
            if(error.response?.status === 404){
                toast("Usuário não encontrado")
            }
        }
        toast("Ocorreu um erro em nossos servidores, tente novamente mais tarde")
    }
}