import React from "react";
import Card from 'react-bootstrap/Card';
import { discountProducts } from "../Assets/products";
// import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import '../Assets/CSS/Discount.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function Discount() {

    const dispatch = useDispatch()

    function additemtocart(product) {
        dispatch(addtocart(product))
        toast.success('Product has been added to cart ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    return (
        <>
        
            <ToastContainer />
            <div className="cards-container">
                <h3 className="text-center fs-1">Big Discount</h3>
                <div className="cards-6">
                    {

                        discountProducts.map(product => (

                            <Card className="cards_6" key={product.id}>
                                {/* <Link to={`/product/${product.productName}`} className="card-link"> */}
                                <Card.Body>
                                    <Card.Text className="card-data">
                                        <span className="discount">{product.discount}%Off</span>
                                        <span className="heart-icon"><FaRegHeart className="heart" /></span>
                                        <img src={product.imgUrl} alt=""/>
                                        <h3>{product.productName}</h3>
                                        <p className="fs-4">⭐⭐⭐⭐⭐</p>
                                        <div className="plus-btn">
                                            <p>${product.price}</p>
                                            <button onClick={()=>additemtocart(product)} className="round "><FaPlus /></button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                {/* </Link> */}
                            </Card>

                        ))
                    }
                </div>

            </div>

        </>
    )
}

export default Discount;

{/* <div className="d-flex" >
                <section>
                    <div>30% Off</div>
                    <div>
                        <img src={Product1} alt="" />
                    </div>
                    <div>
                    <h5>Stone and Beam <br />Westview</h5>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div>
                        <p>$193</p>
                        <span><CiCirclePlus /></span>
                    </div>
                </section>

                <section>
                <div>30% Off</div>
                    <div>
                        <img src={Product2} alt="" />
                    </div>
                    <div>
                    <h5>Stone and Beam <br />Westview</h5>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div>
                        <p>$193</p>
                        <span><CiCirclePlus /></span>
                    </div>
                </section>

                <section>
                <div>30% Off</div>
                    <div>
                        <img src={Product3} alt="" />
                    </div>
                    <div>
                    <h5>Stone and Beam <br />Westview</h5>
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div>
                        <p>$193</p>
                        <span><CiCirclePlus /></span>
                    </div>
                </section>
            </div> */}