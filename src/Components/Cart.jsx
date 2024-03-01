import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Assets/CSS/Cart.css';
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { deleteFromCart, increaseQuantity, decreaseQuantity } from '../action';
function Cart() {

    let prods = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const delItem = (item) => {
        dispatch(deleteFromCart(item));
    }

    const incrementQuantity = (item) => {
        dispatch(increaseQuantity(item));
    }

    const decrementQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(decreaseQuantity(item));

        } else {
            console.log("Quantity cannot be less than zero");
            // Or any other action you want to perform
            dispatch(deleteFromCart(item))
        }
    }




    const calculateTotalPrice = () => {
        let totalPrice = 0;
        prods.forEach(item => {
            totalPrice += Number(item.price) *Number( item.quantity);
        });
        return totalPrice;
    }

    return (
        <>
            <Navbar />
            <section className="cart_sec">

                <div className="cart_main_div">
                    <div className="sub_div1">
                        {prods.map(product => (
                            <Card className="cart_cards" >
                                <Card.Body className="cart_card">
                                    <Card.Text className="cart-data">
                                        <div >
                                            <img src={product.imgUrl} alt="" />
                                        </div>
                                        <div className="cartdata-div2">
                                            <h3>{product.productName}</h3>
                                            <p>${product.price}.00*{product.quantity} <span>${product.price*product.quantity}.00</span></p>
                                        </div>
                                        <div className="cartdata-div3">
                                            <button className="xicon" onClick={()=>delItem(product)}><IoClose className="delete-icon" /></button>
                                            <div className="plus-minus">
                                                <button className="border border-info" onClick={()=>incrementQuantity(product)} ><FaPlus /></button>
                                                <button className="bg-light border border-white" onClick={()=>decrementQuantity(product)} ><FaMinus /></button>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    <div className="sub_div2">
                        <h6>Cart summary</h6>
                        <hr />
                        <p>Total Price :
                            <aside className="fw-bold fs-1">${Number(calculateTotalPrice())}.00</aside>
                            
                        </p>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Cart;