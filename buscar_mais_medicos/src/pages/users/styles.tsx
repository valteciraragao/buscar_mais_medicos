import styled from "styled-components";

const UsersContainer = styled.div`
  background-color: #fcfcfc;
  width: 100vw;
  margin-left: 35px;
  margin-top: 32px;
  h4 {
    color: #212121;
    font-size: 32px;
    font-weight: 600;
  }
  span {
    color: #212121;
    font-size: 32px;
    font-weight: 400;
  }
`;

const FlapContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  UsersContainer,
  FlapContainer,
  TableContainer,
};
