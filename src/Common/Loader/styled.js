import styled from "styled-components";

export const Loader = styled.div`
  width: 91px;
  height: 91px;
  margin: 40px;
  border: 12px solid ${({theme}) => theme.colors.snuff};
  border-top: 12px solid ${({theme}) => theme.colors.black};
  border-radius: 50%;
  animation: spin 1s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      };
      100% {
        transform: rotate(360deg);
      };
  };
     @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px){
      width: 35px;
      height: 35px;
      border: 4px solid ${({ theme }) => theme.colors.snuff};
      border-top: 4px solid ${({ theme }) => theme.colors.black};
  }
`