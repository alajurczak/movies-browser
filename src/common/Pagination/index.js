import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PageCounter,
  ButtonText,
  ArrowIconPrevious,
  Wrapper,
  PageNumbers,
  Button,
  ArrowIconNext,
} from "./styled";
import { fetchMoviesLoading, selectTotalPages } from "../../features/movies/popularMoviesSlice";

export const Pagination = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchMoviesLoading(page));
  }, [dispatch, page]);

  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
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
        onClick={() => setPage(page + 1)}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button
        next
        disabled={page === (totalPages > 500 ? 500 : totalPages)}
        onClick={() => setPage(totalPages > 500 ? 500 : totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext />
        <ArrowIconNext mobile="true" />
      </Button>
    </Wrapper>
  );
};
