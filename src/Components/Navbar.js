import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <Link to="/products">Products</Link>
            <div>
            <Link to="/Cart">Cart</Link>          
            </div>
        </div>
    );
};

export default Navbar;