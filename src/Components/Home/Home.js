import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1554998171-89445e31c52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">WE OFFER DELICIOUS FOOODS...</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card lg:card-side bg-base-100 shadow-xxl rounded-none m-24">
                <figure><img className='w-full' src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl lg:text-7xl lg:p-12 ">WE OFFER DELICIOUS FOODS, BURGERS, PIZZAS,...</h2>
                    <p className='text-xl lg:text-2xl'>Tasting our food is like heaven in your mouth…Took a 50 kilometres  ride just to get your burger. It was totally worth it. Amazing burgers!</p>
                    <Link to='/products'><button className="btn btn-info">Products</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;