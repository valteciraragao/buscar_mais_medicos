import { useEffect } from "react";
import RequestTable from "../../components/table";
import { GetLoginAcess } from "../../services/user";

const columns = ["Usuário", "E-mail", "Wathsapp", "Tipo de usuário"];

const data = [];

const Dashboard = () => {
  useEffect(() => {
    const responseUsers = async ()=> {
      const result = await GetLoginAcess()}
  }, [])
  return (
    <div>
      <div></div>
      <div>
        <div></div>
        <div>
          <RequestTable columnTitle={columns} apiData={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
