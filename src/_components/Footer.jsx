import React, {useState}from 'react';
import BeatLoader from "react-spinners/BeatLoader";

function Footer() {


    return (
        
        <footer>

        <div className="footer-widget-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="img/logo/footer.png" alt=""/></a>
                            </div>
                            <p>There are many variations of passg of Lorem Ipsum available, but thmajority have suffered altem, </p>
                            <div className="social-icons">
                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="#"><i className="zmdi zmdi-rss"></i></a>
                                <a href="#"><i className="zmdi zmdi-google-plus"></i></a>
                                <a href="#"><i className="zmdi zmdi-pinterest"></i></a>
                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>GET IN TOUCH</h3>
                            <a href="tel:555-555-1212"><i className="fa fa-phone"></i>555-555-1212</a>
                            <span><i className="fa fa-envelope"></i>info@example.com</span>
                            <span><i className="fa fa-globe"></i>www.educat.com</span>
                            <span><i className="fa fa-map-marker"></i>ur address goes here,street.</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Useful Links</h3>
                            <ul className="footer-list">
                                <li><a href="#">Teachers &amp; Staff</a></li>
                                <li><a href="#">Our Courses</a></li>
                                <li><a href="#">Courses Categories</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Instagram</h3>
                            <ul id="Instafeed"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 col-12">
                        <span>Copyright © Educat 2017.All right reserved.Created by <a href="#">Edubuzz</a></span>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="column-right">
                            <span>Privacy Policy , Terms &amp; Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
    
}


export {Footer};
