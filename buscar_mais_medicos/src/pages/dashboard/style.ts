import styled from "styled-components";

const TableContainer = styled.div`
  width: 100vw;
  height: 530px;
  margin: 20px 35px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0px 7px 30px 0px #bbc0cd66;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  margin-left: 8px;
  margin-right: 8px;

  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Table = styled.div`
  margin: 10px 10px;
  table {
    width: 90vw;
  }
`;

export default {
  TableContainer,
  Header,
  Table,
};
