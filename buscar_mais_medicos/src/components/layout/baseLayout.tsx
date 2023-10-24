import S from "./style";
import logo from "../../assets/images/dashboard/logoMaisMedicos.svg";
import logoDash from "../../assets/images/dashboard/dashIcon.svg";
import userDash from "../../assets/images/dashboard/userIcon.svg";
import plansDash from "../../assets/images/dashboard/planosIcon.svg";
import specialtiesDash from "../../assets/images/dashboard/especialidadeIcon.svg";
import notificationDash from "../../assets/images/dashboard/notIcon.svg";
import faqDash from "../../assets/images/dashboard/faqIcon.svg";
import menuDash from "../../assets/images/dashboard/menu.svg";
import userOnDash from "../../assets/images/dashboard/user.svg";
import expandDash from "../../assets/images/dashboard/chevron down.svg";
import { Outlet, useNavigate } from "react-router-dom";

const BaseLayout = () => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.Menu>
        <S.Img src={logo} alt="logo mais medicos" />
        <S.Icon onClick={() => navigate("dashboard")}>
          <img src={logoDash} alt="logo dashboard" />
          <p>Dashboard</p>
        </S.Icon>
        <S.Icon onClick={() => navigate("users")}>
          <img src={userDash} alt="logo usuários cadastrados" />
          <p>Usuários cadastrados</p>
        </S.Icon>
        <S.Icon onClick={() => navigate("plans")}>
          <img src={plansDash} alt="logo planos" />
          <p>Planos</p>
        </S.Icon>
        <S.Icon onClick={() => navigate("specialties")}>
          <img src={specialtiesDash} alt="logo especialidades" />
          <p>Especialidades</p>
        </S.Icon>
        <S.Icon onClick={() => navigate("notification")}>
          <img src={notificationDash} alt="logo notificações" />
          <p>Notificações</p>
        </S.Icon>
        <S.Icon onClick={() => navigate("faq")}>
          <img src={faqDash} alt="logo FAQ" />
          <p>FAQ</p>
        </S.Icon>
      </S.Menu>
      <S.Container>
        <S.Header>
          <img src={menuDash} alt="Logo Menu" />
          <S.Box>
            <img className="user" src={userOnDash} alt="Logo usuário logado" />
            <div>
              <h4>Izabel</h4>
              <p>izabel@gmail.com</p>
            </div>
            <img className="expand" src={expandDash} alt="seta para baixo" />
          </S.Box>
        </S.Header>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Container>
    </S.Layout>
  );
};

export default BaseLayout;
