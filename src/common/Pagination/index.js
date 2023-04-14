import {
  PageCounter,
  ButtonText,
  ArrowIconPrevious,
  Wrapper,
  PageNumbers,
  Button,
  ArrowIconNext,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const Pagination = ({ totalPages, page, setPage }) => {
  const navigate = useNavigate();
  const setPageAndUpdateUrl = (pageNumber) => {
    setPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => setPageAndUpdateUrl(1)}>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button
        disabled={page === 1}
        onClick={() => setPageAndUpdateUrl(page - 1)}
      >
        <ArrowIconPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <PageNumbers>{page}</PageNumbers>
        of
        <PageNumbers>{totalPages > 500 ? 500 : totalPages}</PageNumbers>
      </PageCounter>
      <Button
        next
        disabled={page === (totalPages > 500 ? 500 : totalPages)}
        onClick={() => setPageAndUpdateUrl(page + 1)}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button
        next
        disabled={page === (totalPages > 500 ? 500 : totalPages)}
        onClick={() => setPageAndUpdateUrl(totalPages > 500 ? 500 : totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext />
        <ArrowIconNext mobile="true" />
      </Button>
    </Wrapper>
  );
};
