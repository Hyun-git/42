import { useState } from "react";

const initialPageOption = {
    statPage: 0,
    currentPage: 1,
    endPage: 0,
}

// pagination event
const usePagination = () => {
    const [pageOption, setPageOption] = useState(initialPageOption);

    const handleChangeCurrentPage = () => {
        setPageOption((prev) => ({ ...prev, currentPage: prev.currentPage + 1}));
    }

    const resetPageOption = () => {
        setPageOption(() => initialPageOption);
    }

    return {
        pageOption,
        handleChangeCurrentPage,
        resetPageOption
    };
};

export default usePagination;