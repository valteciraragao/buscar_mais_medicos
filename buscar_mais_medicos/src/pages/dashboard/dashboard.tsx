import { useEffect, useState } from "react";
import RequestTable from "../../components/table";
import { GetLoginAcess } from "../../services/user";
import S from "./style";
import { Link } from "react-router-dom";
import seta from "../../assets/images/dashboard/Arrows/right-small.svg";

type UserDataProps = {
  name: string;
  profiles: string;
  phone: string;
  email: string;
};

const columns = ["Usuário", "E-mail", "Wathsapp", "Tipo de usuário"];

const Dashboard = () => {
  const [users, setUsers] = useState<UserDataProps[]>([]);

  useEffect(() => {
    const responseUsers = async () => {
      const result = await GetLoginAcess();
      console.log(result);
      const userEdited = result?.content.reduce((acumulator, updateValue) => {
        const user = {
          name: updateValue.firstName + " " + updateValue.lastName,
          email: updateValue.email,
          phone: updateValue.phone,
          profiles:
            updateValue.profiles.length > 0 ? updateValue.profiles[0] : "",
        };
        return [...acumulator, user];
      }, [] as UserDataProps[]);
      setUsers(userEdited ?? []);
    };

    responseUsers();
  }, []);
  return (
    <div>
      <div></div>
      <S.TableContainer>
        <S.Header>
          <p>Últimos usuários cadastrados</p>
          <Link to={"users"}>
            Ver tudo <img src={seta} alt="seta" />
          </Link>
        </S.Header>
        <S.Table>
          <RequestTable columnTitle={columns} apiData={users} />
        </S.Table>
      </S.TableContainer>
    </div>
  );
};

export default Dashboard;
