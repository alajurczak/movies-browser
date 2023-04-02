import { Header, Loader, Wrapper } from "./styled";

export const Loading = ({ content }) => {
  return (
    <>
      <Wrapper>
        <Header>{content}</Header>
        <Loader />
      </Wrapper>
    </>
  );
};
