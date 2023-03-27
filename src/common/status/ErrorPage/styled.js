import styled from "styled-components";
import { ReactComponent as Danger } from "../Images/Danger.svg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DangerIcon = styled(Danger)`
  margin: 14px;
  width: 100px;
  height: 100px;
`

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({theme}) => theme.colors.smoke};
`

export const Content = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.smoke};
`

export const Button = styled.button`
  margin-top: 24px;
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  gap: 10px;
  background-color: ${({theme}) => theme.colors.scienceBlue};
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.white};
  :hover{
    filter: brightness(110%);
  };
  :active{
    filter: brightness(120%);
  };
`