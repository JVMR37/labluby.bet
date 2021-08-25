import { useState, Fragment, useCallback } from "react";
import {
  PaginationActionButton,
  PaginationDiv,
  PaginationItemButton,
} from "../styles/betPagination.style";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import {
  getGamePagination,
  getGameFilter,
  loadSavedBets,
} from "../store/gamesSlice";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BetPagination: React.FC = (props) => {
  const pagination = useAppSelector(getGamePagination);
  const filter = useAppSelector(getGameFilter);

  const dispatch = useAppDispatch();

  // const [pages] = useState(Math.round(props.children!.length / dataLimit));

  const goToNextPage = useCallback(async () => {
    await dispatch(loadSavedBets({ page: ++pagination!.currentPage, filter }));
  }, [dispatch, filter, pagination]);

  const goToPreviousPage = useCallback(async () => {
    await dispatch(loadSavedBets({ page: --pagination!.currentPage, filter }));
  }, [dispatch, filter, pagination]);

  async function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    await dispatch(loadSavedBets({ page: pageNumber, filter }));
  }

  const getPaginationGroup = () => {
    if (pagination) {
      const pageLimit =
        Math.abs(pagination!.currentPage - pagination.lastPage) < 5
          ? pagination.lastPage
          : 5;
      let start =
        Math.floor((pagination!.currentPage - 1) / pageLimit) * pageLimit;

      return Array.from(
        {
          length: pageLimit,
        },
        (_, i) => start + i + 1
      );
    } else {
      return [];
    }
  };

  return (
    <Fragment>
      {props.children}
      <PaginationDiv>
        <PaginationActionButton
          key={"prev button"}
          onClick={goToPreviousPage}
          disabled={pagination?.currentPage === pagination?.firstPage}
        >
          <FaArrowLeft /> Prev
        </PaginationActionButton>

        {getPaginationGroup().map((item, index) => (
          <PaginationItemButton
            key={index}
            onClick={changePage}
            className={`${pagination!.currentPage === item ? "active" : null}`}
          >
            <span>{item}</span>
          </PaginationItemButton>
        ))}
        <PaginationActionButton
          key={"next button"}
          onClick={goToNextPage}
          disabled={pagination?.currentPage === pagination?.lastPage}
        >
          Next <FaArrowRight />
        </PaginationActionButton>
      </PaginationDiv>
    </Fragment>
  );
};

export default BetPagination;
