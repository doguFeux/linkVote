import React, {useEffect,useState } from 'react'
import '../../styles/Components/ListCart/ListCart01.css'
import { useTodoLayerValue } from '../../Context/TodoContext'
import { ascCompare, descCompare } from '../../Helper/Ordering';


const ListCart01 = ({ datas }) => {

    const [{ data, filterApplied, type }, dispatch] = useTodoLayerValue()

    const handleDelete = id => e => {

        debugger
        e.preventDefault()


        let newData = data.filter(function (obj) {
            return obj.id != id;
        });

        dispatch({
            type: "DELETE_ITEM",
            payload: newData
        })

    


    }
    const handeUpVote = id => e => {
        let orderedData =null;
        let updatedObj = data.map(function (obj) {
            
            if (obj.id == id) {
                obj.score += 1;
            }
            return obj;
        });

        if (filterApplied) {
            if (type === "asc") {
                orderedData = data.sort(ascCompare);

            } else {
                orderedData = data.sort(descCompare);
            }
        }
        dispatch({
            type: "UPDATE_SCORE",
            payload: orderedData
        })
    }
    const handeDownVote = id => e => {
        let orderedData =null;

        let updatedObj = data.map(function (obj) {
            
            if (obj.id == id) {
                obj.score -= 1;
            }
            return obj;
        });
        if (filterApplied) {
            if (type === "asc") {
                orderedData = data.sort(ascCompare);

            } else {
                orderedData = data.sort(descCompare);
            }
           
        }
        dispatch({
            type: "UPDATE_SCORE",
            payload: orderedData
        })
    }


  

    return (
        <>
        <div className="c-lcart-01">
            <div className="c-item-01">
                <div className="c-unit-01">
                    {datas.score}
                </div>
                <div className="c-unit-02">
                    POINTS
                </div>
            </div>
            <div className="c-item-02">
                <h6 className="c-unit-01">{datas.name}</h6>
                <div className="c-unit-02">("{datas.url}")</div>
                <div className="c-unit-03">
                    <div onClick={handeUpVote(datas.id)} className="c-unit-03-A">Up Vote</div>
                    <div onClick={handeDownVote(datas.id)} className="c-unit-03-B">Down Vote</div>
                </div>
            </div>
            <a href="#" onClick={handleDelete(datas.id)} className="delete-icon">
                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336" /><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa" /></svg>
            </a>
        </div>
        </>
        
    )
}

export default ListCart01
