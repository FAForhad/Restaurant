import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = product;
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-300">{strMeal}</h2>
                    <p>{strInstructions.slice(0, 50)}</p>
                    <div className="card-actions">
                        <Link to={`/product/${idMeal}`}><button className="btn btn-info">Instruction</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;