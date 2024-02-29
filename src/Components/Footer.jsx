import { IoBag } from "react-icons/io5";
import '../Assets/CSS/Footer.css'


function Footer() {
    return (
        <>
            <section className="footer_sec text-white" style={{display:"grid"}}>
                <div className="d-flex p" style={{flexDirection:'column'}}>
                    <a className="navbar-brand d-flex align-items-center text-white" href="#" style={{ fontSize: '40px', fontWeight: 'bold',marginTop:'-15px'}}>
                        <IoBag size={40} style={{ verticalAlign: 'middle' }} />
                        Mart
                    </a>
                    <p className="foo-para">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Optio nostrum accusantium iste. voluptas cumque <br /> provident!  officiis animi rem tempore voluptate cumque distinctio repudiandae quia quam quos. </p>
                </div>


                <div className="d-flex" style={{flexDirection:'column'}}>
                    <h3>About Us</h3>
                    <a href="">Careers</a>
                    <a href="">Our Stores</a>
                    <a href="">Our Cares</a>
                    <a href="">Terms&Conditions</a>
                    <a href="">Privacy Policy</a>
                </div>


                <div className="d-flex" style={{flexDirection:'column'}}>
                    <h3>Customer Care</h3>
                    <a href="">Help Center</a>
                    <a href="">How To Buy</a>
                    <a href="">Track Your Order</a>
                    <a href="">Corporate&Bulk Purchasing</a>
                    <a href="">Returns&Refunds</a>
                </div>


                <div className="d-flex " style={{flexDirection:'column'}}>
                    <h3>Contact Us</h3>
                    <address>70 Washington Square South,New York,NY 10012,United States</address>
                <span>Email:<a href="">reddychowdam@gmail.com</a></span>
                <span>Phone:<a href="">+1 1123456780</a></span>
                </div>


            </section>
        </>
    )
}

export default Footer;