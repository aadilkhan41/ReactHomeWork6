import styles from "./styles.module.css";
import cartIcon from "../../assets/shopping-cart.svg";

function Navigation(props){
    return (
        <header className={styles.header}>
            <nav>
                <h2>ReactCart.com</h2>
                <div className={styles.cartButton}>
                    <img src={cartIcon} alt="Cart"/>
                    <p>{props.items}</p>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;