import styled from "styled-components";

const Flap = styled.div`
  display: flex;
  align-items: center;
  width: Hug(172.32px);
  height: Hug(64.42px);
  border-radius: 16px 16px 0px 0px;
  padding: 18px;
  gap: 18px;
  background: #f5f5f5;
  .contentP {
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 600;
    color: #212121;
  }
  .contentSpan {
    font-family: "Poppins";
    width: 55.13px;
    height: 28.21px;
    border-radius: 100px;
    padding: 4px 12px 4px 12px;
    gap: 10px;
    background-color: #b4e08e;
    font-size: 14px;
    font-weight: 400;
    color: #212121;
    text-align: center;
  }
  &:active {
    background-color: #ffffff;
    .contentP {
      background-color: #046639;
      font-family: "Poppins";
      font-size: 20px;
      font-weight: 600;
      color: #212121;
    }
    .contentSpan {
      font-family: "Poppins";
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      color: #212121;
      text-align: center;
    }
  }
`;

export default {
  Flap,
};
