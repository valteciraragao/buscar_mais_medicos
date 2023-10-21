import styled from "styled-components"
import background from '../../assets/images/Login.png'

export const OuterContainer = styled.div`
  background: url(${background});
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background: #FFFFFF;
  width: 550px;
  height: 650px;
  border-radius: 24px;
  box-shadow: 0px 0px 10px 0px #6161614D;
`

export const Container = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins;
`
export const Checkbox = styled.div`
  display: flex;
  gap: 4px;
  label{
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: .2px;
    color: #212121;
  }
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  button{
    background: #046639;
    width: 100%;
    height: 56px;
    border-radius: 16px;
    padding: 12px, 64px, 12px, 64px;
    gap: 10px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`

export const Logo = styled.div`
  margin-bottom: 60px;
  
  p{
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: .2px;
    color: #424242;
  }

  h3{
    font-size: 36px;
    font-weight: 700;
    line-height: 50.4px;
    color: #212121;
  }
`