
import React from 'react'
import '../../styles/Components/Select/Select01.css'
import { useTodoLayerValue } from '../../Context/TodoContext'
import { ascCompare, descCompare } from '../../Helper/Ordering';

const Select01 = () => {

    const [{ data, filterApplied }, dispatch] = useTodoLayerValue()


    const handleOrder = (event) => {

        debugger;
        var selectedValue = event.target.value;
        if (selectedValue == "asc") {

            let orderedData = data.sort(ascCompare);

            dispatch({
                type: "CHANGE_ORDER",
                payload: orderedData
            })

            dispatch({
                type: "SET_FILTER_PROP",
                payload: "asc"
            })
        } else if (selectedValue == "desc") {

            let orderedData = data.sort(descCompare);

            dispatch({
                type: "CHANGE_ORDER",
                payload: orderedData
            })

            dispatch({
                type: "SET_FILTER_PROP",
                payload: "desc"
            })
        }
    }


    return (
        <>
            <select onChange={handleOrder} className="comp-select-01">
                <option value="0">Order by</option>
                <option value="desc">MOST Voted (Z + A)</option>
                <option value="asc">LESS Voted (A + Z)</option>
            </select>
        </>
    )
}

export default Select01
