import React from "react";
import ReactPaginate from "react-paginate";
import '../css/Pagination.css';

const Pagination = (props) => {
    const pageCount = props.pageCount;
    const setPage = props.setPage;
    return (
        <ReactPaginate
            pageCount={pageCount}
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={5}
            onPageChange={(e) => setPage(e.selected + 1)}
            marginPagesDisplayed={1}
            containerClassName="pagination__container"
            pageClassName="pagination__list"
            pageLinkClassName="pagination__link"
            activeClassName="pagination__link__active"
        />
    );
}

export default Pagination;