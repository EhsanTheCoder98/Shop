import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Productsdiv.module.css";


// Helpers
import { shorten } from '../Helpers/functions';

const Productsdiv = ({data}) => {
    return (
        <div className={styles.container}>
            <img src={data.image} alt='product' className={styles.image}/>
            <h2>{shorten(data.title)}</h2>
            <Link   to={`/products/${data.id}`}>Details</Link>
            <span>Price:{data.price}$</span>
        </div>
    );
};

export default Productsdiv;