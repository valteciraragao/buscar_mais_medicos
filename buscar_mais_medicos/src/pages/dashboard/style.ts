import styled from "styled-components";

const TableContainer = styled.div`
  max-width: 1582px;
  height: 530px;
  margin-top: 20px;
  margin-left: 35px;
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
  table {
    width: 1534px;
  }
`;

export default {
  TableContainer,
  Header,
  Table,
};
