import { Content, DangerIcon, Header, Wrapper } from "./styled";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <DangerIcon />
        <Header>
          Ooops! Something went wrong... 
        </Header>
        <Content>
          Please check your network connection<br/>
          and try again
        </Content>
    </Wrapper>
  )
};