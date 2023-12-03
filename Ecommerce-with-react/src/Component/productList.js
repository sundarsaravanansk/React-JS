import React, { useState } from 'react';
import { Data } from '../Data/Data';
import Card from './Card';
import './Card.css';
import PopupCard from './PopupCard';

const ProductList = (props) => {

    let[plist , setPlist]=useState(Data)

    function handleAddInc(val){
        const newpList = plist.map((data)=>{
            if(data.Name === val ){
                return  {...data, orderedQ : data.orderedQ + 1}
            }else{
                return data;
            }
        })
        setPlist(newpList)
    }

    function handleDec(val){
        const newpList = plist.map((data)=>{
            if(data.Name === val  && data.orderedQ > 0){
                return  {...data, orderedQ : data.orderedQ - 1}
            }else{
                return data;    
            }
        })
        setPlist(newpList)
    }

    function handleHeadercount(name){
        console.log(name)
        const newpList = plist.map((data)=>{
            if(data.Name === name && data.addtocard === 0){
                return  {...data, addtocard : 1}
            }else{
                return data;
            }
        })
        setPlist(newpList)
        checkAddedCount();
    }
    checkAddedCount();
    
    function checkAddedCount(){
        let count = 0;
        plist.forEach((val)=>{
            if(val.addtocard === 1){
                count ++
            }
        })
     
        props.onHeadercount(count)
    }
  
    return (
        <div>
          <div className=''>
       
       <div class="df-w mx-w-s" >
      
       {
           plist.map(val=>{
             if(val.cat.includes(props.status)){
               return<Card cardData={val} onAddInc={(val)=>{handleAddInc(val)}}    onDec={(val)=>{handleDec(val)}} onHeadercount={(val)=>{handleHeadercount(val)}} />
             
 } })
         
       }
        <PopupCard triggerpopup={props.triggerpopup} onclose={props.onclose} plist={plist} />
       </div>
       </div>
        </div>  
    );
}

export default ProductList;
