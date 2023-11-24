import { useState } from 'react';

const usePagination = ({ minNumber, maxNumber }: { minNumber: number; maxNumber: number }) => {
  const [currentPage, setCurrentPage] = useState(minNumber);

  const onClickPageNumber = (pageNumber: number) => () => {
    setCurrentPage(pageNumber);
  };

  const onClickPre = () => {
    setCurrentPage((pre) => {
      if (pre > 0) {
        return pre - 1;
      }
      return pre;
    });
  };

  const onClickNext = () => {
    setCurrentPage((pre) => {
      if (pre < maxNumber - 1) {
        return pre + 1;
      }
      return pre;
    });
  };

  const onChangeCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    onClickPageNumber,
    onClickPre,
    onClickNext,
    onChangeCurrentPage,
  };
};

export default usePagination;
