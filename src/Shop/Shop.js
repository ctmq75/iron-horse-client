import React, { Component } from "react";
import "./Shop.css";

import Slider from '../Slider/Slider.js'

export default class Shop extends Component {
  render() {
    return (
      <div id='shop-container'>
        <section>
        <p id='shop-title'>The Shop</p>
          <section id="shop-top">
            <div className="shop-address">
              <p>
                <b>Roscoe Woodstock Antique Mall </b><br />
                890 Lake Avenue <br />
                Woodstock, IL 60098
                <br />
                815.334.8960
              </p>
            </div>
            <div className="shop-address">
              <p>
                <b>Open 7 days a week!</b> <br />
                *Booth #M7
                <br />
                NO REPRODUCTIONS - NO CRAFTS
                <br />
                35,000 Sq. Ft. Of QUALITY ANTIQUES!
              </p>
            </div>
          </section>
          <section id='img-slider'>
              <Slider />
          </section>


        </section>
      </div>
    );
  }
}


/*
          <section id="map-section">
                    <h3 id='location-title'>Location:</h3>
          <MapContainer />
        </section>



                  <section id='gallery'>
            <Gallery />
          </section>
*/
