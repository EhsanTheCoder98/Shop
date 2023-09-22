import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Productsdiv.module.css";


// Helpers
import { isInCart, quantityCount, shorten } from '../Helpers/functions';

// Context
import { CartContextPro } from '../Context/Cartcontext';


const Productsdiv = ({data}) => {
    const {state,dispatch} = useContext(CartContextPro);
    return (
        <div className={styles.container}>
            <img src={data.image} alt='product' className={styles.image}/>
            <h2>{shorten(data.title)}</h2>
            <Link   to={`/products/${data.id}`}>Details</Link>
            <span>Price:{data.price}$</span>
            <div>
                {
                    isInCart(state,data.id)?
                        <button onClick={()=>dispatch({type:"Increase",payload:data})}>+</button>:
                        <button onClick={()=>dispatch({type:"Add_Item",payload:data})}>Add To Cart</button>
                }
                {
                    quantityCount(state,data.id) === 1 &&
                    <button onClick={()=>dispatch({type:"Remove",payload:data})}>REMOVE</button>
                }
                {
                     quantityCount(state,data.id) > 1 &&
                     <button onClick={()=>dispatch({type:"Decrease",payload:data})}>-</button>
                }
            </div>
        </div>
    );
};

export default Productsdiv;