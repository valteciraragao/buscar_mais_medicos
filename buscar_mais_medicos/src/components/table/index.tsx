import { ReactNode } from "react";
import S from "./style";

type TableRow = Record<string, ReactNode>;

type TableProps = {
  columnTitle: string[];
  apiData: TableRow[];
};

const RequestTable = ({ columnTitle, apiData }: TableProps) => {
  return (
    <S.Table>
      <S.TableHeader>
        <tr>
          {columnTitle.map((column) => (
            <S.TitleColumn>{column}</S.TitleColumn>
          ))}
        </tr>
      </S.TableHeader>
      <tbody>
        {apiData.map((rowData) => (
          <tr>
            {Object.values(rowData).map((rowValue) => (
              <td>{rowValue}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export default RequestTable;
