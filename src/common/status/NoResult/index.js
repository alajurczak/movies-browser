import { Wrapper, Title, NoSearchImage } from "./styled";

export const NoResult = ({ query }) => {
  return (
    <Wrapper>
      <Title>Sorry, there are no results for “{query}”</Title>
      <NoSearchImage />
    </Wrapper>
  );
};
