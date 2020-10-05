import React from "react";
import ironhorse from "../images/ironhorse.jpeg";
import "./Email.css";
import SignupForm from "../SignupForm/SignupForm.js";
import MapContainer from "../Map/Map.js";

export default class Email extends React.Component {
  render() {
    return (
      <div id="homepage">
        <img id="ironhorse-flyer" src={ironhorse} alt="iron horse flyer" />
        <p>
          <small>
            Above Graphics Designed by Prairie Wind: pwindesign@aol.com
          </small>
        </p>
       <div id='blurb-container'>
        <p id='lilblurb'>
          <em>
            <b>Iron Horse Antiques & Appraisers</b>
          </em>
          , established in 1978 by Jim and Debbie McArdle, specializes in
          pre-1900 American & European antiques and currently sells at various
          antiques shows around the country. In addition we are auction agents,
          we buy entire estates, and we also buy gold, silver / sterling and
          platinum.{" "}
        </p>
        </div>
        <div id='mail-form'>
        <SignupForm />
        </div>
       

      </div>
    );
  }
}
