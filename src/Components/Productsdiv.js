import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Productsdiv.module.css";


// Helpers
import { shorten } from '../Helpers/functions';

// Context
import { CartContextPro } from '../Context/Cartcontext';


const Productsdiv = ({data}) => {
    const {dispatch} = useContext(CartContextPro);
    return (
        <div className={styles.container}>
            <img src={data.image} alt='product' className={styles.image}/>
            <h2>{shorten(data.title)}</h2>
            <Link   to={`/products/${data.id}`}>Details</Link>
            <span>Price:{data.price}$</span>
            <div>
                <button onClick={()=>dispatch({type:"Add_Item",payload:data})}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Productsdiv;