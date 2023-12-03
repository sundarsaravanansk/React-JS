import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div>
             <div class="footer">
        <div class="mx-w df jcsb ">
            <div class="grid-item ">
                <h5>ABOUT</h5>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Flipkart Stories</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Flipkart Wholesale</a></li>
                    <li><a href="">Cleartrip</a></li>
                    <li><a href="">Corporate Information</a></li>
                </ul>
            </div>
            <div class="grid-item">
                <h5>HELP</h5>
                <ul>
                    <li><a href="">payments</a></li>
                    <li><a href="">Shipping</a></li>
                    <li><a href="">Cancellation&Returns</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Report Infringement</a></li>
                </ul>
            </div>
            <div class="grid-item">
                <h5>CONSUMER POLICY</h5>
                <ul>
                    <li><a href="">Cancellation&Returns</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Security</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Sitemap</a></li>
                    <li><a href="">Grievance Redressal</a></li>
                    <li><a href="">EPR Compliance</a></li>

                </ul>
            </div>
            <div class="grid-item">
                <h5>SOCIAL</h5>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">YouTupe</a></li>
                </ul>
            </div>

            <div class="grid-item vl">

                <h5>Mail Us:</h5>
                <ul>
                    <li><a href="">Flipkart Internet Private Limited,</a></li>
                    <li><a href="">Buildings Alyssa, Begonia &</a></li>
                    <li><a href="">Clove Embassy Tech Village,</a></li>
                    <li><a href="">Outer Ring Road, Devarabeesanahalli Village,</a></li>
                    <li><a href="">Bengaluru, 560103,</a></li>
                    <li><a href="">Karnataka, India</a></li>
                </ul>
            </div>
            <div class="grid-item">
                <h5>Registered Office Address:</h5>
                <ul>
                    <li><a href="">Flipkart Internet Private Limited,</a></li>
                    <li><a href="">Buildings Alyssa, Begonia &</a></li>
                    <li><a href="">Clove Embassy Tech Village,</a></li>
                    <li><a href="">Outer Ring Road, Devarabeesanahalli Village,</a></li>
                    <li><a href="">Bengaluru, 560103,</a></li>
                    <li><a href="">Karnataka, India</a></li>
                    <li><a href="">CIN : U51109KA2012PTC066107</a></li>
                    <li><a href="">Telephone: 044-45614700</a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="mx-w"/>
    <div class="ft ">
        <div class="mx-w df jcsb ">
            <div class="link df ">
                <ul>
           
                    <li><a href=""><FontAwesomeIcon icon={faStore} style={{color: "yellow", paddingRight : '6px'}} />Become a Seller</a></li>
                    <li><a href=""><FontAwesomeIcon icon={faWandMagicSparkles} style={{color: "yellow", paddingRight : '6px'}} />Advertise</a></li>
                    <li><a href=""><FontAwesomeIcon icon={faGift} style={{color: "yellow", paddingRight : '6px'}}/>Gift Cards</a></li>
                    <li><a href=""><FontAwesomeIcon icon={faCircleQuestion} style={{color: "yellow", paddingRight : '6px'}} />Help Center</a></li>
                    <li><a href="">© 2007-2023 Flipkart.com</a></li>
                </ul>
            </div>
            <div class="img-link">
                <ul>
                    <li><img src="../image/container-img7/img-1.svg" alt=""/></li>
                </ul>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Footer;
