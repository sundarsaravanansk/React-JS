import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Component1 from "./Component1";
import Component2 from "./Component2";

const Header = (props) => {
  function handleclick(a){
    props.onData(a);
  }
  return (
    <div>
      <div className="header">
        <div class="head">
          <div class="mx-w-d  df ">
            <div class="img">
              <img src="./image/flipkart-logo.png" style={{ width: "70px" }} />
              <p>
                Explore <span>Plus</span>
              </p>
            </div>

            <div className="input a-tag ">
              <input type="text" placeholder="Search for products,brands" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  color: "#0652ea",
                  position: "relative",
                  right: "30px",
                }}
              />
            </div>

            <div className="a-tag btns">
              <button type="button">Login</button>
            </div>

            <div className="df side">
              <div className="pd-lft">
                <FontAwesomeIcon
                  icon={faStore}
                  style={{ color: "#fff", paddingRight: "6px" }}
                />
                <a href="">Become a Seller</a>
              </div>
              <div class="dropdown-2 pd-lft">
                <a href="">products</a>

                <div class="dropdown-content-2">
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('all')}}
                  >
                    All
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('fruit')}}
                  >
                   Fruits
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('veg')}}
                  >
                   Vegtables
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('chilli')}}
                  >
                   Chilli Powder
                  </a>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{
                  color: "#ebeef4",
                  paddingLeft: "3px",
                  paddingTop: "3px",
                }}
              />
              <div className="pd-lft">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{
                    color: "#e6efec",
                    paddingRight: "5px",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                />

                 <button
                  href=""
                  class="cart-btn"
                  role="button"
                   onClick={props.onTriggerpopup}
                > 
                  Cart {props.headerCount}
                </button>

                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#fff" }} className=""></div>
      </div>
      <div>
        <Component1/>
      </div>
      <div>
        <Component2/>
      </div>
    </div>
  );
};

export default Header;
