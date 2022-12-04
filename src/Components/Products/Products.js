import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData()
    return (
        <div className='mx-20 my-20 grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            {
                products.meals.map(product => <Product key={product.idMeal} product={product}></Product>)
            }
        </div>
    );
};

export default Products;