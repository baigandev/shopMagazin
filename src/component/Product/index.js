import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/Reducer";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <div className="mx-auto container w-5/6">
          <div className="flex py-20 flex-wrap gap-14">
              {
                  product.map((el) => (
                    <ProductCard el={el}/>
                  ))
              }
          </div>
        </div>
    );
};

export default Product;