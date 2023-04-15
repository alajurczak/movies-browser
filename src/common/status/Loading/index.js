import { Header, Loader, Wrapper } from "./styled";
import { Main } from "../../Main";

export const Loading = ({ content }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>{content}</Header>
          <Loader />
        </Wrapper>
      </Main>
    </>
  );
};
