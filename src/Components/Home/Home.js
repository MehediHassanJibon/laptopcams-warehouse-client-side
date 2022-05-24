import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import InventoryItem from '../InventoryItem/InventoryItem';
import Banner from '../Banner/Banner'
const Home = () => {
    const [products]=useProducts();
    return (
        <div>
            <Banner></Banner>
            <div className='container'>
                <h1 className='text-center my-5'>Inventory items</h1>
                <div className='row row-cols-1 row-cols-lg-3 g-4'>

                    {
                        products.slice(0, 6).map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;