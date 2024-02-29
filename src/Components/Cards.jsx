import React from "react";
import { serviceData } from "../Assets/products";
import '../Assets/CSS/Cards.css'

function Cards() {
    return (
        <>
            <div className="cards4">
                {
                    serviceData.map(item => (
                        <div className="Cards_container" >
                            <div className="mt-5" id="sections_4">
                                <section className="text-center me-3 rounded-section" id="big-section"  style={{background:`${item.bg}`}}>
                                    <span className="rounded-icon">{item.icon}</span>
                                    <h5 className="section-title">{item.title}</h5>
                                    <p className="section-text">{item.subtitle}</p>
                                </section>
                            </div>
                        </div>
                    ))
                }
            </div>




        </>
    )
}

export default Cards;