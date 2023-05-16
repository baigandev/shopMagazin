import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {BsBasketFill} from "react-icons/bs";

const ProductDetails = () => {
    const {basket} = useSelector(state => state.basket)
    const [details, setDetails] = useState({})
    const {productId} = useParams()
    const getProductDetails = () => {
        axios(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
        getProductDetails()
    }, [])
    const dispatch = useDispatch()
    const addToBasket = () => {
        dispatch({type: "ADD_TO_BASKET", payload: details})
    }
    const bus = basket.some(some => some.id === details.id)

    const {title, image, category, description, price} = details
    return (
        <div className="mx-auto container w-5/6 flex items-center justify-between py-10">
            <img className="w-[450px] h-[480px] object-contain" src={image} alt="img"/>
            <div className="w-[55%]">
                <h1 className="text-4xl font-black py-16">{title}</h1>
                <h2 className="bg-pink-700 p-5 text-white rounded">{category}</h2>
                <p className="py-20">{description}</p>
                <div className="flex justify-between w-[80%]">
                    {
                        bus ? <Link to={"/basket"}>
                            <button
                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <BsBasketFill/></button>
                        </Link> : <button onClick={addToBasket} className="py-1 px-4 bg-green-400 rounded-lg">{price}%</button>
                    }

                     <Link to="/product"><button className="py-1 px-4 bg-red-700 rounded-lg text-white">return</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;