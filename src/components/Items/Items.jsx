import styles from "./styles.module.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";

function Items(props){
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const total = props.cart.reduce((accumulator, item) => {
            const tot = accumulator+ item.price*item.qty;
            return Math.floor(tot * 100) / 100;
          }, 0);
        setTotalPrice(total);
    },[props.cart]);

    return (
        <main className={styles.main}>
            <div className={styles.itemCont}>
                <h1>Your Bag</h1>
                {
                    props.cart.length > 0 ? <>
                        <article>
                            {props.cart.map((item)=>{
                                return <Item key={item.key} item={item} dispatch={props.dispatch}/>;
                            })}
                        </article>
                        <div className={styles.totalCont}>
                            <label>Total</label>
                            <p>${totalPrice}</p>
                        </div>
                        <button className={styles.clearCart} onClick={()=>{props.dispatch({ type: 'clearCart' })}}>Clear Cart</button>
                    </> : <>
                        <p className={styles.empty}>is currently empty</p> 
                    </>
                }
            </div>
        </main>
    );
}

export default Items;