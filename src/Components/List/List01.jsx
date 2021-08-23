import React, { useEffect } from 'react'
import { useTodoLayerValue } from '../../Context/TodoContext'
import Button01 from '../Button/Button01'
import Select01 from '../Select/Select01'
import '../../styles/Components/List/List01.css'
import ListCart01 from '../ListCart/ListCart01'
import { ascCompare, descCompare } from '../../Helper/Ordering';
import Pagination from '../Pagination/Pagination'


const List01 = () => {

    const [{ data, filterApplied, type, currentPage }, dispatch] = useTodoLayerValue()


    const startIndex = currentPage * 5 - 5;
    const endIndex = startIndex + 5;
    const paginatedDatas = data.slice(startIndex, endIndex);

    useEffect(() => {
        let orderedData = null;

        if (filterApplied) {
            if (type == "asc") {
                orderedData = data.sort(ascCompare);


            } else {
                orderedData = data.sort(descCompare);

            }
            dispatch({
                type: "CHANGE_ORDER",
                payload: orderedData
            })
        }
    }, []);


    return (
        <>
            <Button01 />
            <hr className="hr-01" />
            <Select01 />
            <div>
                {


                    paginatedDatas && paginatedDatas.map(d => (

                        <ListCart01 key={d.id} datas={d} />
                    ))
                }
            </div>
            <Pagination />

        </>
    )
}

export default List01
