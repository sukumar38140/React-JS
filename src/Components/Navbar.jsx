import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { IoBag, IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";



function Navbar() {


    const [Value, useValue] = useState(
        {
            Home: 'Home',
            Shop: 'Shop',
            Cart: 'Cart'
        }
    )

    const cartItems=useSelector(state => state.cart);
    let uniqueCartItems=[...new Set(cartItems.map(item=>item.id))];
    let ccount=uniqueCartItems.length


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white" style={{position:'sticky',top:'0',zIndex:'1000',boxShadow:'grey 0px 8px 6px -5px'}}>
                <div className="container-fluid ">
                    <a className="navbar-brand me-lg-5 d-flex align-items-center" href="#" style={{ fontSize: '40px', fontWeight: 'bold', marginLeft: '80px' }}>
                        <IoBag size={40} style={{ verticalAlign: 'middle' }} />
                        Mart
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5" style={{ gap: '30px' }}>
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#" style={{ fontSize: '30px', fontWeight: 'bold' }}>{Value.Home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Shop' className="nav-link active" href="#" style={{ fontSize: '30px', fontWeight: 'bold' }}>{Value.Shop}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Cart' className="nav-link active" href="#" style={{ fontSize: '30px', fontWeight: 'bold' }}>{Value.Cart}</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ fontSize: '29px', fontWeight: 'bold' }}><IoPerson /></a>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cart" className="nav-link" href="#" style={{ fontSize: '29px', fontWeight: 'bold' }}>
                                    <FaShoppingCart />
                                    <span style={{ fontSize: '15px', borderRadius: '50px', backgroundColor: 'Darkblue', padding: '0 6px', verticalAlign: 'super', color: 'white' }}>{ccount}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar;
