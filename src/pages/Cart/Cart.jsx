import React, { useEffect, useReducer, useState } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import Items from "../../components/Items/Items";
import {product1, product2, product3, product4} from "../../components/ProductPics/ProductsPic";
import Loader from '../../components/Loader/Loader';

function Cart(){
    function reducerFunction(state, action) {
        switch (action.type) {
            case 'increment':
                return state.map((ele)=>{
                    return action.payload == ele.key ? {...ele, qty: ele.qty + 1} : ele;
                });
            case 'decrement':
                return state.map((ele)=>{
                    if(action.payload == ele.key){
                        if(ele.qty>1){
                            return {...ele, qty: ele.qty - 1};
                        }else {
                            return null;
                        }
                    }else{
                        return ele;
                    }
                }).filter(Boolean);
            case 'remove':
                return state.filter((ele)=>{
                    return action.payload != ele.key;
                });
            case 'clearCart':
                return [];
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, [
        {
            key: 0,
            picture: product1,
            title: "Samsung Galaxy S8",
            price: 399.99,
            qty: 1,
        },
        {
            key: 1,
            picture: product2,
            title: "Google Pixel",
            price: 499.99,
            qty: 1,
        },
        {
            key: 2,
            picture: product3,
            title: "Xiaomi Redmi Note 2",
            price: 699.99,
            qty: 1,
        },
        {
            key: 3,
            picture: product4,
            title: "Samsung Galaxy S7",
            price: 599.99,
            qty: 1,
        },
    ]);

    const [total, setTotal] = useState(0);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        function handlePageLoad(){
            setloading(false);
        }

        if(document.readyState === 'complete'){
            handlePageLoad();
        }else{
            window.addEventListener('load', handlePageLoad);
            return () => window.removeEventListener('load', handlePageLoad);
        }
    },[]);

    useEffect(()=>{
        const total = state.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.qty;
          }, 0);
        setTotal(total);
    },[state]);

    return (
        <>{loading? 
            <Loader/> :
            <><Navigation items={total}/>
            <Items cart={state} dispatch={dispatch}/></>
        }</>
    );
}

export default Cart;