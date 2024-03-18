import React from "react";
import Slider from "react-slick";
import { SliderData } from "../Assets/products";
import '../Assets/CSS/Slider.css';




function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings} className="slider_sub">
                    {
                     
                        SliderData.map(item => (

                            <div className="slide d-grid">
                                <div className="text">
                                    <h5>{item.title}</h5><br />
                                    <p>{item.desc}</p>
                                    <br />
                                    <a className="border1" href="">Visit Collections</a>
                                </div>
                                <div className="image">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>

                        ))
                    } 
                </Slider>

            </div>
        </>
    );
}

export default SimpleSlider;




{/* <div className="mt-5 justify-content-center align-items-center" id="sections_4">
                <section className="text-center me-3 rounded-section bg-color1 " id="big-section">
                    <span className="rounded-icon">< FaCar /></span>
                    <h5 className="section-title">Free Shipping</h5>
                    <p className="section-text">Lorem ipsum dolor sit amet</p>
                </section>

                <section className="text-center me-3 rounded-section bg-color2 " id="big-section">
                    <span className="rounded-icon"><BsCreditCardFill /> </span>
                    <h5 className="section-title">Safe payment</h5>
                    <p className="section-text">Lorem ipsum dolor sit amet</p>
                </section>

                <section className="text-center me-3 rounded-section bg-color3 " id="big-section">
                    <span className="rounded-icon"><FaShieldAlt /></span>
                    <h5 className="section-title">Secure Payment</h5>
                    <p className="section-text">Lorem ipsum dolor sit amet</p>
                </section>

                <section className="text-center rounded-section bg-color4 " id="big-section">
                    <span className="rounded-icon"><IoHeadsetSharp /></span>
                    <h5 className="section-title">Back Guarantee</h5>
                    <p className="section-text">Lorem ipsum dolor sit amet</p>
                </section>
            </div> */}
