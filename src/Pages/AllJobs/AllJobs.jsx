import React from 'react';
import Products from '../../Components/Products/Products';

const productsPromiss = fetch('http://localhost:3000/products')
.then(res => res.json());

const AllJobs = () => {
    return (
        <div>
            <Products productsPromiss={productsPromiss}></Products>
        </div>
    );
};

export default AllJobs;