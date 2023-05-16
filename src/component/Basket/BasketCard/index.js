import React from 'react';
import {useDispatch} from "react-redux";

const BasketCard = ({el}) => {
    const dispatch = useDispatch()
    const delBasket = () => {
        dispatch({type: "DELETE_BASKET", payload: el})
    }
    const addProduct = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const decProduct = () => {
        dispatch({type: "DEC_BASKET", payload: el})
    }
    return (

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={el.image} width={140} alt=""/>
                </th>
                <td className="px-6 py-4">
                    {el.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex">
                        <button onClick={decProduct}>-</button>
                        <h1 className="mx-3">{el.count}</h1>
                        <button onClick={addProduct}>+</button>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {Math.round(el.price * el.count)}$
                </td>
                <td className="px-6 py-4">
                    <button
                        onClick={delBasket}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Delete
                    </button>

                </td>
            </tr>

    );
};

export default BasketCard;