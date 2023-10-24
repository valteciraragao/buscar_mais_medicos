import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Content,
  OuterContainer,
  Container,
  Logo,
  MiddleContainer,
} from "./styles";
import Input from "../../components/input/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginAccess } from "../../services/login";

const Login = () => {
  const navigate = useNavigate();
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlerUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await LoginAccess(userValues);
    if (result) {
      navigate("dashboard");
    }
  };

  return (
    <OuterContainer>
      <MiddleContainer>
        <Container onSubmit={handleFormSubmit}>
          <Logo>
            <p>Seja bem vindo!</p>
            <h3>Realize seu login</h3>
          </Logo>
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
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handlerUserChange}
            value={userValues.password}
            icon={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            onIcon={() => setShowPassword(!showPassword)}
          />
          <Content>
            <Checkbox>
              <input type="checkbox" />
              <label htmlFor="lembrar">Lembrar-me</label>
            </Checkbox>
            <p>Esqueci minha senha</p>
          </Content>
          <Button>
            <button type="submit">Entrar</button>
          </Button>
        </Container>
      </MiddleContainer>
    </OuterContainer>
  );
};
export default Login;
