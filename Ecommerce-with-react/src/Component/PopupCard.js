import React from "react";
import { useState } from "react";

import "./Popup.css";

const PopupCard = (props) => {
 
  let[change , setChange]=useState(props.plist)

  if (props.triggerpopup) {
    return (
      <div className="popup">
        <div className="popup-in mx-w">
          <button className="close" onClick={props.onclose}>
            X
          </button>
          <div>
        
            <table>
              <thead>
                <tr className="violet">
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Ordered price</th>
                  <th>Kilogram</th>
                  {/* <th>Delete</th> */}
                </tr>
              </thead>
              <tbody>
            {
                props.plist.map((val)=>{
                  if(val.addtocard > 0){
                   return( <tr key={val.id}>
                    <td><img src={val.img}  style={{width:'4rem' , height : '5rem', borderRadius : '20px'}}/></td>
                    <td>{val.Name}</td>
                    <td>RS. {val.From}</td>
                    <td>RS. {val.From * val.orderedQ}</td>
                    <td>{val.Q * val.orderedQ}KG</td>
                    {/* <td className="pop"><button onClick={()=>{setChange(change.filter(a=>a.id !== val.id))}}>Delete</button></td> */}
                </tr>
                 ) }})
            }
        </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Card is Empty</div>;
  }
};

export default PopupCard;
