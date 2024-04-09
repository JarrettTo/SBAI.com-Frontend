import React from 'react';
import classNames from 'classnames';

const Pagination = ({ totalCount, currentPage, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination" style={{display: 'flex', marginTop: 'auto', padding: '20px 0px'}}>
        <button
            className={classNames('page-button', { disabled: currentPage === 1 })}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            style={{padding: '0px 10px'}}
        >
        &lt; {/* Left arrow */}
        </button>


        {pageNumbers.map((page) => (
            <button
            key={page}
            className={classNames('page-button', { active: page === currentPage })}
            onClick={() => onPageChange(page)}
            style={{padding: '0px 10px'}}
            >
            {page}
            </button>
        ))}

        <button
            className={classNames('page-button', { disabled: currentPage === totalPages })}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            style={{padding: '0px 10px'}}
        >
            &gt; {/* Right arrow */}
        </button>
    </div>
  );
};

export default Pagination;