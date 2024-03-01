import Card from 'react-bootstrap/Card';
// import { FaStar } from "react-icons/fa"; <FaStar />
import { FaRegHeart } from "react-icons/fa6";
import { products } from '../Assets/products';
import { FaPlus } from "react-icons/fa6";
import '../Assets/CSS/Sales.css';
import { useDispatch } from 'react-redux';
import { addtocart } from '../action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function Sales() {

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
        <div className='sales-card'>
            <h2 className='fs-1'>Best Sales</h2>
            <div className='cards-8'>
                {
                    products.map(product => (
                        <Card className="cards_8">
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
        </>
    )
}

export default Sales;
