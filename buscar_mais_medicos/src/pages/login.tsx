import { ChangeEvent, useState } from "react"
//import { useNavigate } from "react-router-dom"
import backgroundLogin from '../assets/images/Login.png'
import { Container } from "../assets/globalStyle/global.style"
import Input from "../components/input/input"
import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'




const Login = () => {
    //const navigate = useNavigate
    const[userValues, setUserValues] = useState({
        email:'',
        password:'',
    })

    const handlerUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setUserValues({
            ...userValues,
            [name]: value
        })
    }

    const[showPassword, setShowPassword] = useState(false)

    return(
        <div>
            <img src={backgroundLogin} alt="Tela de fundo login" />
            <Container>
                <Input 
                    id="email"
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    type="email"
                    name="email"
                    onChange={handlerUserChange}
                    value={userValues.email}
                />
                <Input 
                    id="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    name="password"
                    onChange={handlerUserChange}
                    value={userValues.password}
                    icon= {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} 
                    onIcon={() => setShowPassword(!showPassword)}
                />
            </Container>
        </div>
    )
}
export default Login