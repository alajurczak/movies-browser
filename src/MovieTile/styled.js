import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./Images/VideoIcon.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  width: 324px;
  height: 650px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px; 
  margin: 24px;
`;

export const Poster = styled.div`
  margin: 16px;
  height: 434px;
  background-color: ${({theme}) => theme.colors.silver};
`

export const StyledVideoIcon = styled(VideoIcon)`
  justify-content: center;
  align-self: center;
  color: white;
  width: 30px;
  height: 30px;
`
