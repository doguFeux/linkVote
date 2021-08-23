import React, { useState } from 'react'
import { useTodoLayerValue } from '../../Context/TodoContext'
import '../../styles/Components/Pagination/Pagination.css'

const Pagination = () => {

    const [{ data, filterApplied, type,currentPage }, dispatch] = useTodoLayerValue()

    const [pages] = useState(Math.round(data.length / 5));

    const goToNextPage = (event) => {
        event.preventDefault();
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: Number(currentPage + 1)
        })
    }

    const goToPreviousPage = (event) => {
        event.preventDefault();
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: Number(currentPage - 1)
        })

    }

    const changePage = (event) => {
        debugger;
        event.preventDefault();
        const pageNumber = Number(event.target.textContent);
        dispatch({
            type: "SET_CURRENT_PAGE",
            payload: Number(pageNumber)
        })
    }

    
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 5) * 5;
        return new Array(pages).fill().map((_, idx) => start + idx + 1);
    };

   

    return (
        <div className="comp-pagination-01">
            <a href="#" onClick={goToPreviousPage}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8284 19.7071L23.1213 16.4142L21.7071 15L17 19.7071L21.7071 24.4142L23.1213 23L19.8284 19.7071Z" fill="#4E4C69" />
                </svg>

            </a>

            {getPaginationGroup().map((item, index) => (
        <a href="#"
          key={index}
          onClick={changePage}
          className={`c-item-01 ${currentPage === item ? 'on' : null}`}
        >
          <span>{item}</span>
        </a>
      ))}


            <a href="#" onClick={goToNextPage}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 16.4142L18.4142 15L23.1213 19.7071L18.4142 24.4142L17 23L20.2929 19.7071L17 16.4142Z" fill="#4E4C69" />
                </svg>
            </a>
        </div>
    )
}

export default Pagination
