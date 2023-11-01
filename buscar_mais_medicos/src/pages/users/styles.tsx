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

const InputUserContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  input {
    position: relative;
    width: 400px;
    height: 56px;
    border-radius: 16px;
    border: 1.5px solid #e0e0e0;
    padding-left: 16px;
    outline: none;
    font-family: "Poppins";

    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #757575;
    }
  }

  .image {
    position: absolute;
    right: 670px;
    top: 50%;
    margin-top: 14px;
    color: #bdbdbd;
  }
  svg {
    width: 24px;
    height: 24px;
  }

  .announcer {
    margin-right: 16px;
    .name {
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 400;
      color: #000000;
    }

    .value {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const TableUserContainer = styled.div`
  margin-top: 20px;
`;

export default {
  UsersContainer,
  FlapContainer,
  TableContainer,
  InputUserContainer,
  TableUserContainer,
};
