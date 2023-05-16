import React from 'react';
import ProductCard from "../Product/ProductCard";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(s => s.favorite)

    return (

            <div className="mx-auto container w-5/6">
                {
                    favorite.length === 0 ?  <div>
                        <h1 className="text-center text-5xl bg-blue-500 p-5 text-white  rounded-0">CART IS EMPTY:</h1>
                    </div>:
                        <div className="flex py-20 flex-wrap gap-14">
                        {
                            favorite.map((el) => (
                                <ProductCard el={el}/>
                            ))
                        }
                    </div>
                }

            </div>

    );
};

export default Favorite;