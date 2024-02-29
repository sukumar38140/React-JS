import Card from 'react-bootstrap/Card';
// import { FaStar } from "react-icons/fa"; <FaStar />
import { Newarrivals } from '../Assets/products';
import { FaRegHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import '../Assets/CSS/Newarrivals.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../action';

function NewArrivals() {

    const dispatch = useDispatch()

    function additemtocart(product) {
        dispatch(addtocart(product))
    }

    return (
        <div className='card-arrival1'>
            <h1 className='fs-1'>New Arrivals</h1>
            <div className='cards-10'>
                {
                    Newarrivals.map(product => (
                        <Card className="cards_6">
                        <Card.Body>
                            <Card.Text className="card-data">
                                <span className="heart-icon1"><FaRegHeart /></span>
                                <img src={product.imgUrl} alt="" />
                                <h3>{product.productName}</h3>
                                <p className="fs-4">⭐⭐⭐⭐⭐</p>
                                <div className="plus-btn">
                                    <p>${product.price}</p>
                                    <button onClick={()=> additemtocart(product)} className="round "><FaPlus /></button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default NewArrivals;
