import { DangerIcon, Header, Wrapper } from "./styled";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <DangerIcon />
        <Header>
          Ooops! Something went wrong... 
        </Header>
    </Wrapper>
  )
};