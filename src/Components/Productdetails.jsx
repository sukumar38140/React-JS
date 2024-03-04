import Navbar from "./Navbar";
// import Simpleproducts from '../Componants/Best Sales';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import "../Assets/CSS/Productdetails.css"
import { useDispatch } from 'react-redux';
import { addtocart } from '../action';
import Card from 'react-bootstrap/Card';
import { discountProducts, Newarrivals, products, Watches } from '../Assets/products';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

function Productdetails() {


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


    let completeproducts = discountProducts.concat(Newarrivals, products, Watches)

    let { id } = useParams()

    let item = completeproducts.find(items => items.id == parseInt(id))

    let relatedProducts = completeproducts.filter(product => product.category === item.category && product.id !== item.id)

    return (
        <>
         <ToastContainer />
                <Navbar style={{ position: 'sticky', top: '0', zIndex: '1000' }} />
            
            <div className="shop_main_div">
                <h6 className="product">{item.productName}</h6>
            </div>

            <div className='singlepro-container'>

                <section className="singlepro">
                    <div className="singlepro-sec-div1">
                        <img src={item.imgUrl} alt="" />
                    </div>

                    <div className="singlepro-sec-div2">
                        <h1 className="productname">{item.productName}</h1>
                        <div>
                            <span className="fs-4">⭐⭐⭐⭐⭐</span>
                            <span className="fs-4 ms-5"> {item.avgRating}ratings</span>
                        </div>
                        <div className="price-category">
                            <span className="fs-1">${item.price}</span>
                            <span className="fs-4">Category:{item.category}</span>
                        </div>
                        <p>{item.shortDesc}</p>
                        <input type="number" />
                        <aside className="mt-3"><button onClick={()=>additemtocart(item)}>Add To Cart</button></aside>
                    </div>
                </section>

                <div className="singlepro-div">
                    <h4>Description:</h4>
                    <span>{item.description}</span>
                </div>
                {/* <Card className="cards_6">
                    <Card.Text className="card-data"> */}
                {/* <span className="discount">{item.discount}%Off</span> */}
                {/* <span className="heart-icon"><FaRegHeart /></span> */}
                {/* <img src={item.imgUrl} alt="" />
                        <h3>{item.productName}</h3>
                        <p className="fs-4">⭐⭐⭐⭐⭐</p>
                        <div className="plus-btn">
                            <p>${item.price}</p>
                            <button className="round "><FaPlus /></button>
                        </div>
                    </Card.Text>
                </Card> */}



            </div>

            <div>
                <h2 style={{ textAlign: "center" }}>Related Products</h2>
                <div className="relatedpro-container">
                    <div className='related-products cards-6' >
                        {relatedProducts.map((product, index) => (
                            <Card key={index} className='related-products'>
                                <Link to={`/Shop/${product.id}`}>
                                    <Card.Body>
                                        <Card.Text className="card-data">
                                            {/* <span className="discount">{product.discount}%Off</span> */}
                                            <img src={product.imgUrl} alt="" />
                                            <p>{product.productName}</p>
                                            <p className="fs-4">⭐⭐⭐⭐⭐</p>
                                            <p>${product.price}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Productdetails;
