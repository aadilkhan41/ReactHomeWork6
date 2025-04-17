import styles from "./styles.module.css";

function Item(props){
    return (
        <section className={styles.section}>
            <div className={styles.details}>
                <div>
                    <img src={props.item.picture} alt="Product"/>
                </div>
                <div>
                    <h3>{props.item.title}</h3>
                    <p>${props.item.price}</p>
                    <button className={styles.remove} onClick={()=>{props.dispatch({ type: 'remove', payload: props.item.key })}}>Remove</button>
                </div>
            </div>
            <div className={styles.operations}>
                <div>
                    <button className={styles.increment} onClick={()=>{props.dispatch({ type: 'increment', payload: props.item.key })}}></button>
                    <p>{props.item.qty}</p>
                    <button className={styles.decrement} onClick={()=>{props.dispatch({ type: 'decrement', payload: props.item.key })}}></button>
                </div>
            </div>
        </section>
    );
}

export default Item;