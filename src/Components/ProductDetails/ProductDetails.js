import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const mealDetails = useLoaderData();
    const meal = mealDetails.meals[0]
    console.log(meal)
    const { strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strInstructions } = meal
    return (
        <div>
            <div className="mockup-window border border-base-300">
                <div className="flex justify-center px-4 py-16 border-t border-base-300">
                    <div className="card w-3/4 bg-base-100 shadow-xl image-full">
                        <figure><img src={strMealThumb} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl text-blue-400">{strMeal}</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mockup-window">
                <div className="text-start px-12 py-16 border-t border-base-300">
                    <p className='text-2xl text-white'>To Create This <span className='text-blue-400'>{strMeal}</span>  Recipe </p>
                    <p className='text-xl text-white py-6'><span className='text-blue-400'> YOU NEED </span> : {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}, {strIngredient7}, {strIngredient8}, {strIngredient9}, {strIngredient10}</p>

                    <p className='p-4 text-5xl text-center text-blue-400'>COOK INTRODUCTION</p>
                    <p className='p-4 text-3xl text-center text-white'>{strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;