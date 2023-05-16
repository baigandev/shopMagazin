import React from 'react';
import {BsBasketFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiTwotoneHeart} from "react-icons/ai";
import favorite from "../../Favorite";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()

    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }
    const {basket} = useSelector(state => state.basket)
    const {favorite} = useSelector(state => state.favorite)
    const bus = basket.some(some => some.id === el.id)
    const heart = favorite.some(some => some.id === el.id)
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el})
    }

    return (

        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/product/details/${el.id}`}>
                <img className="rounded-t-lg" src={el.image} alt=""/>
            </Link>

            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}
                    </p>

                {
                    bus ?
                        <Link to={"/basket"}>
                            <button
                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <BsBasketFill/></button>
                        </Link>

                        :
                    <button onClick={addToBasket}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {el.price} $
                    </button>
                }
                <button onClick={addToFavorite} class="mx-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <AiTwotoneHeart className={heart ? "text-red-600" : "text-white"}/></button>

            </div>
        </div>

    );
};

export default ProductCard;
