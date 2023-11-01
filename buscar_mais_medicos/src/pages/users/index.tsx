import { ReactNode, useEffect, useState } from "react";
import Flap from "../../components/cards";
import { GetAllUsers, GetCountAllUser } from "../../services/user";
import S from "./styles";
import { BiSearch } from "react-icons/bi";
import RequestTable from "../../components/table";
import { useNavigate } from "react-router-dom";

const columns = [
  "Usuário",
  "E-mail",
  "Wathsapp",
  "Especialidade",
  "Cidade",
  "Estado",
  "Tipo de usuário",
];

type UserAllProps = {
  nameUser: string;
  email: string;
  phone: string;
  specialty: string[];
  userType: string[];
};

const Users = () => {
  const [countUser, setCountUser] = useState({
    total: 0,
    doctors: 0,
    contractor: 0,
  });

  const [users, setUsers] = useState<UserAllProps[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = 0;
  const navigate = useNavigate();

  useEffect(() => {
    async function requestAllUser() {
      try {
        const resultUsers = await GetAllUsers(page);
        const rowUserData = resultUsers?.content.reduce(() => {
          const userData = {
            nameUser: resultUsers.firstName + " " + resultUsers.lastName,
            email: resultUsers.email,
            phone: resultUsers.phone,
            specialty:
              resultUsers.specialties > 0
                ? resultUsers.specialties[0].name
                : "-",
            userType:
              resultUsers.profiles > 0 ? resultUsers.profiles[0].name : "-",
          };
          setUsers(userData);
        }, [] as UserAllProps[]);
        rowUserData();
      } catch (error) {
        throw new Error("Ocorreu um erro ao busca os dados da API");
      }
    }
  }, [page]);

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
          <S.InputUserContainer>
            <input type="search" placeholder="Pesquise uma palavra-chave" />
            <div className="image">
              <BiSearch />
            </div>
            <div className="announcer">
              <p className="name">Total de usuários</p>
              <p className="value">{countUser.total}</p>
            </div>
          </S.InputUserContainer>
          <S.TableUserContainer>
            <RequestTable columnTitle={columns} apiData={[]} />
          </S.TableUserContainer>
          <div>
            <button
              onClick={() => setPage(Math.max(page - 1, 0))}
              disabled={page === 0}
            >
              Página Anterior
            </button>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button key={pageNumber} onClick={() => setPage(pageNumber)}>
                {pageNumber + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
            >
              Próxima Página
            </button>
          </div>
        </div>
      </S.TableContainer>
    </S.UsersContainer>
  );
};

export default Users;
