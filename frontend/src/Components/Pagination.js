import React from 'react'

export const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);

    }
    // console.log(totalPosts)
    return (
        <nav >
            <ul className="pagination ">
                {pageNumber.map(num => (
                    <li key={num} className="page-item">
                        <a onClick={() => paginate(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Pagination;
