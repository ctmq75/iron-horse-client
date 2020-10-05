import React, { Component } from "react";
import antiques1 from "../images/antiques1.jpeg";
import './About.css'
import MapContainer from '../Map/Map.js'

export default class About extends Component {
  render() {
    return (
      <div id='about-container'>
        <div id='about-inner'>
          <h1 id='our-story'>Our Story</h1>
        <p>
          <b>Debbie McArdle</b> of <b>Iron Horse Antiques & Appraisers</b> has
          been an antiques collector since 1970 and an antiques dealer since
          1978. Her husband, Jim, joined her in the business in 1996. They
          specialize in pre-1900 American antiques and currently sell at{" "}
          <b><a target='_blank' rel='noopener noreferrer' href='http://roscoewoodstockantiquemall.com/'>Roscoe Woodstock Antique Mall</a></b> in Woodstock, Illinois as well as
          at various antiques shows around the country.
        </p>
        <p>
          They are members of the{" "}
          <a type="1" href="https://www.csada.com/" target="_blank" rel="noopener noreferrer">
            Chicago Suburban Antiques Dealers Association
          </a>
          <b>/CSADA,</b> the{" "}
          <a
            type="1"
            href="http://www.wisconsinantiquesdealers.com/"
            target="_blank" rel="noopener noreferrer"
          >
            Wisconsin Antiques Dealers Association
          </a>
          <b>/WADA,</b> and the{" "}
          <a type="1" href="https://www.csada.com/" target="_blank" rel="noopener noreferrer">
            Chicago Suburban Antiques Dealers Association
          </a>
          <b>/CSADA,</b> the{" "}
          <a
            type="1"
            href="http://www.wisconsinantiquesdealers.com/"
            target="_blank" rel="noopener noreferrer"
          >
            Northern Illinois Antiques Dealers Association
          </a>
          <b>/NIADA,</b> Debbie currently serving as President of CSADA and
          Secretary of WADA. As a member of the{" "}
          <b>New England Appraisers Association,</b> Debbie acts as a consultant
          in the appraisal, sale and/or liquidation of personal estates. Jim and
          Debbie frequently participate in appraisal events hosted by local
          groups and libraries, giving advice on values, preservation and
          liquidation of antiques.
        </p>
        <p>
          In addition to buying, selling and appraising antiques, they are also
          auction consultants / brokers as well as gold and sterling silver
          buyers.
        </p>
        <p>
          Debbie has served as a docent at the Graue Mill Museum in Oak Brook,
          Illinois, educating visitors and school groups in spinning and weaving
          techniques, using antique wheels and looms, working with wool and
          flax. (For more credentials, please scroll down below photo . . . )
        </p>
        <img id="about-img" src={antiques1} alt="about-img" />
        <p>
          Serving on the Board of Directors,{" "}
          <b>Friends of the Wisconsin Historical Society</b>, for 12 years
          Debbie co-chaired the{" "}
          <a
            type="1"
            href="http://friendswisconsinhistory.org/2013/02/tax-deductible-donations-of-items-for-auction-fundraiser/"
            target="_blank" rel="noopener noreferrer"
          >
            "30th Star Benefit Antiques Auctions"
          </a>{" "}
          benefiting the Wisconsin Historical Foundation.{" "}
        </p>
        <p>
          Their daughter, <b>Stacy McArdle</b>, heads Iron Horse Estate Sales
          serving northern Illinois & southern Wisconsin. Visit{" "}
          <a
            type="1"
            href="http://www.ironhorseestatesales.com/"
            target="_blank" rel="noopener noreferrer"
          >
            Iron Horse Estate Sales
          </a>{" "}
          or call 815/575-1720.{" "}
        </p>
        <p>
          Their son, <b>Jeff McArdle</b>, heads Iron Horse Military Antiques
          located in Champaign, buying & selling antique documents, letters,
          images & militaria. Jeff can be reached at:
          jeff@ironhorsemilitaryantiques.com or{" "}
          <a
            type="1"
            href="https://www.ironhorsemilitaryantiques.com/"
            target="_blank" rel="noopener noreferrer"
          >
            Iron Horse Millitary Antiques
          </a>
        </p>

        <section id='map'>
          <h4><u>Location:</u></h4>
        <MapContainer />
        </section>
        <br />
        <br />
        <div id='list-div'>
                    <ul id='about-list'>
                    <h2><u>WE BUY, SELL AND TRADE</u> :</h2>

                        <li>Fine Art / including paintings, watercolors & engravings</li>
                        <li>Folk Art</li>
                        <li>Civil War Diaries, Documents, Maps, Weapons</li>
                        <li>American Flags, Parade Flags</li>
                        <li>Quality American & European Furniture</li>
                        <li>Furniture in original surface, original paint or old paint</li>
                        <li>18th-, 19th- & early-20th-Century Lighting</li>
                        <li>Pre-1898 Firearms:  Antique guns / rifles including black powder </li>
                        <li>Edged Weapons  (Swords, bayonets, pocket knives)  </li>
                        <li>Quilts & Textiles including Needlework & Samplers</li>
                        <li>Patent Models</li>
                        <li>Lady's Accessories & Jewelry</li>
                        <li>Early Books & Maps</li>
                        <li>19th Century Photography</li>
                        <li>Pre-1920 Music Boxes: Regina, Olympia, etc.</li>
                        <li>Historical Documents</li>
                        <li>Country Store Furniture, Fixtures & Advertising</li>
                        <li>Spool Cabinets</li>
                        <li>Sewing Instruments / Implements</li>
                        <li>Christmas (pre-1930)</li>
                        <li>Halloween</li>
                        <li>Victorian Pewter-Trimmed Graniteware & common American Graniteware</li>
                        <li>European Graniteware / Enamelware</li>
                        <li>Yellowware & Stoneware</li>
                        <li>Pre-1920 Toys and Games</li>
                        <li>Gold, Silver and Platinum</li>
                        <li>Coins</li>
                        <li>...and much, much more!</li>
                        <h2>GIVE US A CALL AT 815.575.1272</h2>

                    </ul>

                </div>

      </div>
      <div id='youtube-container'>
                <h1><u>Features on NBC Milwaukee's "Morning Blend"</u></h1>
                <div id='youtube-flex'>
                <iframe title='NBC Milwaukees Morning Blend. September 2013' width="560" height="315" src="https://www.youtube.com/embed/y7rt6ssLFaI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title='January 28, 2013' width="560" height="315" src="https://www.youtube.com/embed/E-ZVxk-ee8w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe title='October 1, 2012' width="560" height="315" src="https://www.youtube.com/embed/H31Su_l9P5w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
      </div>
    );
  }
}
