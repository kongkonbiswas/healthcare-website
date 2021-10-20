import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1>United Hospital</h1>

                  <p className="mt-4 ">
                    <small>
                      State of the art technology and expertise combined with
                      the support of our friendly staff, we strive each day to
                      be the top healthcare provider, not only in Bangladesh but
                      within the Asia-Pacific region.
                    </small>
                  </p>

                  <p className="mt-5">
                    <small>
                      Copyright © 2017 United Hospital Limited. All Rights
                      Reserved. Design & Developed by Kongkon Biswas.
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Experts</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the Registation</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div>
                      <h5>Cell: 01914 001211</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    {/* location */}
                    <div>
                      <p>
                        23/A, M M Ali Road, Golpahar Moor Mehdibag, Chittagong.
                        <br />
                        plot 15, Road 71, Gulshan Dhaka 1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;