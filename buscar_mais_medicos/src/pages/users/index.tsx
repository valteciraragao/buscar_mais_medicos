import { useEffect, useState } from "react";
import Flap from "../../components/cards";
import { GetCountAllUser } from "../../services/user";
import S from "./styles";
import { BiSearch } from "react-icons/bi";

const Users = () => {
  const [countUser, setCountUser] = useState({
    total: 0,
    doctors: 0,
    contractor: 0,
  });

  useEffect(() => {
    const resultValuesCards = async () => {
      try {
        const fetchCountUser = await GetCountAllUser();
        const total = fetchCountUser?.total || 0;
        const doctors = fetchCountUser?.totalDoctors || 0;
        const contractor = fetchCountUser?.totalContractor || 0;

        setCountUser({
          total,
          doctors,
          contractor,
        });
      } catch (error) {
        throw new Error("Erro ao buscar dados da Api");
      }
    };
    resultValuesCards();
  }, []);

  return (
    <S.UsersContainer>
      <h4>
        Usuários Cadastrados | <span>Todos</span>
      </h4>
      <S.FlapContainer>
        <Flap content="Todos" total={countUser.total} />
        <Flap content="Contratantes" total={countUser.doctors} />
        <Flap content="Médicos" total={countUser.contractor} />
      </S.FlapContainer>
      <S.TableContainer>
        <div>
          <div>
            <input type="search" placeholder="Pesquise uma palavra-chave" />
            <BiSearch />
          </div>
        </div>
      </S.TableContainer>
    </S.UsersContainer>
  );
};

export default Users;
