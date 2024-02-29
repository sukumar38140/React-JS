import Card from 'react-bootstrap/Card';
import { FaPlus } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Assets/CSS/Shop.css";
import { Link } from 'react-router-dom';
import { discountProducts, Newarrivals, products, Watches } from '../Assets/products';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../action';

function Shop() {

        let completeproducts = discountProducts.concat(Newarrivals, products, Watches)
    
        const [items, setprods] = useState(completeproducts)
    
        const dispatch = useDispatch()
    
        let sofasfilter = completeproducts.filter(item => item.category === 'sofa')
        let mobilesfilter = completeproducts.filter(item => item.category == "mobile")
        let chairfilter = completeproducts.filter(item => item.category == "chair")
        let watchfilter = completeproducts.filter(item => item.category == "watch")
        let wirelessfilter = completeproducts.filter(item => item.category == "wireless")
    
    
        function togglesofas() {
            setprods(sofasfilter)
       }
    
       function togglemobile() {
            setprods(mobilesfilter)
       }
    
       function togglechair() {
            setprods(chairfilter)
       }
    
       function togglewatch() {
            setprods(watchfilter)
       }
    
       function togglewireless() {
            setprods(wirelessfilter)
       }
    
       const [searchTerm, setSearchTerm] = useState('');
    
       function handleSearchChange(event) {
           const term = event.target.value.toLowerCase();
           setSearchTerm(term);
           const filteredProducts = completeproducts.filter(item =>
               item.productName.toLowerCase().includes(term)
           );
           setprods(filteredProducts);
    }

    function additemtocart(product) {
        dispatch(addtocart(product))
    }

    return (
        <>
            <Navbar />
            <div className="shop_main_div">
                <h6 className="product">product</h6>
            </div>

            <div className='dropdown_div'>
                <div className="dropdown">
                    <button className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter By Category
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => togglewatch('watch')}>Watches</a></li>
                        <li><a className="dropdown-item" onClick={() =>  togglewireless('wireless')}>Wireless</a></li>
                        <li><a className="dropdown-item" onClick={() => togglechair('chair')}>Chairs</a></li>
                        <li><a className="dropdown-item" onClick={() => togglemobile('mobile')}>Mobiles</a></li>
                        <li><a className="dropdown-item" onClick={() => togglesofas('sofa')}>Sofas</a></li>
                    </ul>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className="card-container">
                <div className="cards-6">
                    {items.map(product => (
                        <Card className="cards_6" >
                            
                            <Card.Body>
                                <Card.Text className="card-data">
                                <Link to={`/Shop/${product.id}`}> <img src={product.imgUrl} alt="" />    </Link>
                                    <h3>{product.productName}</h3>
                                    <p className="fs-4">⭐⭐⭐⭐⭐</p>
                                    <div className="plus-btn">
                                        <p>${product.price}</p>
                                        <button onClick={()=> additemtocart(product)} className="round "><FaPlus /></button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        
                        </Card>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Shop;























// import React, { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import { FaPlus } from "react-icons/fa6";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { discountProducts, Newarrivals, products, Watches } from '../Assets/products';
// import { Link } from 'react-router-dom';
// import "../Assets/CSS/Shop.css";

// function Shop() {
//     const completeproducts = discountProducts.concat(Newarrivals, products, Watches);
//     const [Items, setItems] = useState(completeproducts);

//     const filterByCategory = (category) => {
//         const filteredProducts = completeproducts.filter(item => item.category === category);
//         setItems(filteredProducts);
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="shop_main_div">
//                 <h6 className="product">product</h6>
//             </div>

//             <div className='dropdown_div'>
//                 <div className="dropdown">
//                     <button className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                         Filter By Category
//                     </button>
//                     <ul className="dropdown-menu">
//                         <li><a className="dropdown-item" onClick={() => filterByCategory("watch")}>Watches</a></li>
//                         <li><a className="dropdown-item" onClick={() => filterByCategory("wireless")}>Wireless</a></li>
//                         <li><a className="dropdown-item" onClick={() => filterByCategory("chair")}>Chairs</a></li>
//                         <li><a className="dropdown-item" onClick={() => filterByCategory("mobile")}>Mobiles</a></li>
//                         <li><a className="dropdown-item" onClick={() => filterByCategory("sofa")}>Sofas</a></li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="card-container">
//                 <div className="cards-6">
//                     {Items.map(product => (
//                         <Card className="cards_24">
//                             <Link to={`/Shop/${product.id}`}>
//                                 <Card.Body>
//                                     <Card.Text className="card-data">
//                                         <img src={product.imgUrl} alt="" />
//                                         <h3>{product.productName}</h3>
//                                         <p className="fs-4">⭐⭐⭐⭐⭐</p>
//                                         <div className="plus-btn">
//                                             <p>${product.price}</p>
//                                             <button className="round "><FaPlus /></button>
//                                         </div>
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Link>
//                         </Card>
//                     ))}
//                 </div>
//             </div>

//             <Footer />
//         </>
//     );
// }

// export default Shop;


