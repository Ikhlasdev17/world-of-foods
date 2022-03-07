import React from 'react';
import Hero from '../Hero';
import Content from '../Content';
import Categories from '../Categories';
import Footer from "../Footer";
function Home(props) {
    return (
        <>
            <Hero />
            <div className="wrapper">
                <Categories heading={'Categories'} />
                {/*<Content heading={'Features'} url="http://localhost:3001/features" />*/}
                {/*<Content heading={'Customers'} url="http://localhost:3001/customers" />*/}
            </div>
        </>
    );
}

export default Home;