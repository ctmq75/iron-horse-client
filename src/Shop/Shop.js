import React, { Component } from "react";
import './Shop.css';
import shop1  from '../images/shop1.jpeg';
import shop2  from '../images/shop2.jpeg';
import shop3  from '../images/shop3.jpeg';
import shop4  from '../images/shop4.jpeg';
import shop5  from '../images/shop5.jpeg';
import shop6  from '../images/shop6.jpeg';
import shop7  from '../images/shop7.jpeg';


export default class Shop extends Component {
    render() {
        return (
            <div>
                <p>*The Shop*</p>
                <section id="shop-top">
                <div className='shop-address'>
                    <p>Roscoe Woodstock Antique Mall <br />
                    890  Lake Avenue <br />
                    Woodstock, IL 60098<br />
                    815.334.8960</p>
                </div>
                <div className='shop-address'>
                    <p>Open 7 days a week <br />
                    *Booth #M7<br />
                    NO REPRODUCTIONS - NO CRAFTS<br />
                    35,000 Sq. Ft. Of QUALITY ANTIQUES!</p>
                </div>
                </section>
                <section>
                    <img src={shop1} alt="shop item" />
                    <img src={shop2} alt="shop item" />
                    <img src={shop3} alt="shop item" />
                    <img src={shop4} alt="shop item" />
                    <img src={shop5} alt="shop item" />
                    <img src={shop6} alt="shop item" />
                    <img src={shop7} alt="shop item" />
                </section>
            </div>
        )
    }
}