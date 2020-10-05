import React from 'react';
import './Slider.css';
import SimpleImageSlider from "react-simple-image-slider";
import shop1  from '../images/shop1.jpeg';
import shop2  from '../images/shop2.jpeg';
import shop3  from '../images/shop3.jpeg';
import shop4  from '../images/shop4.jpeg';
import shop5  from '../images/shop5.jpeg';
import shop6  from '../images/shop6.jpeg';
import shop7  from '../images/shop7.jpeg';

class Slider extends React.Component {
    render() {
        const images = [
            { url: shop1 },
            { url: shop2 },
            { url: shop3 },
            { url: shop4 },
            { url: shop5 },
            { url: shop6 },
            { url: shop7 },
        ];

        return (
            <div id='img-slider'>
                <SimpleImageSlider
                    width={596}
                    height={450}
                    images={images}
                />
            </div>
        );
    }
}
export default Slider;