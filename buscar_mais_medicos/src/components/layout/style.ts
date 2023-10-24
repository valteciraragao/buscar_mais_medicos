import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Menu = styled.div`
  background: #046639;
  width: 271px;
  height: 100vh;
`;

const Img = styled.img`
  width: 181.49px;
  height: 80px;
  margin-top: 24px;
  margin-left: 46px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 271px;
  height: 72px;
  margin-top: 2px;
  padding-left: 8px;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
  }

  p {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }

  &:focus,
  &:active,
  &:hover {
    background-color: #b4e08e;
    width: 255px;
    height: 56px;
    border-radius: 8px;

    img {
      fill: #046639;
    }

    p {
      color: #046639;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 130px;

  img {
    margin-left: 32px;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-right: 32px;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #212121;
  }

  p {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    color: #757575;
  }

  .user {
    width: 56px;
    height: 56px;
  }
`;

const Content = styled.div`
  background-color: #fcfcfc;
`;

export default {
  Layout,
  Menu,
  Img,
  Icon,
  Container,
  Header,
  Box,
  Content,
};
