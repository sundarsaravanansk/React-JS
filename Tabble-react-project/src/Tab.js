import React, { useState } from 'react';
import './table.css'

let nextId=0;

const Tab= () => {

    let[change , setChange]=useState([])
  
    let data =[   
        {
            id:1,
            num : '1',
            product : "Test Product",
            price : "12.5",
            Tags : "TRADE TEST",
            vendor: "Vendor",
            card : " Add To Card"
        }, 
    
    {
        id:2,
        num : '2',
        product : "Test Product",
        price : "6.5",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    },
    {
        id:3,
        num : '3',
        product : "Test Product",
        price : "2.5",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    },
    {
        id:4,
        num : '4',
        product : "Test Product",
        price : "11.3",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    },
    {
        id:5,
        num : '5',
        product : "Test Product",
        price : "1.8",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    }, 
    {
        id:6,
        num : '6',
        product : "Test Product",
        price : "19",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    }, 
    {
        id:7,
        num : '7',
        product : "Test Product",
        price : "120.1",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    }, 
    {
        id:8,
        num : '8',
        product : "Test Product",
        price : "132.4",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    }, 
    {
        id:9,
        num : '9',
        product : "Test Product",
        price : "17",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    },
    {
        id:10,
        num : '10',
        product : "Test Product",
        price : "178",
        Tags : "TRADE TEST",
        vendor: "Vendor",
        card : " Add To Card"
    }, 
]




    return (
        <div>
        <div class="mx-w">
            <h1 className="size get-more-sec pd-bs">PRODUCT TABLE</h1>
  <div className='padgtop'>
    <table>
        <thead>
        <tr className="violet">
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Tags</th>
                        <th>Vendor</th>
                        <th>Card</th>
                    </tr>
        </thead>
        <tbody>
            {
                data.map((val)=>(
                    <tr key={val.id}>
                    <td>{val.num}</td>
                    <td>{val.product}</td>
                    <td>{val.price}</td>
                    <td>{val.Tags}</td>
                    <td>{val.vendor}</td>
                    <td><button onClick={()=>setChange([...change,{id : nextId++ ,num :val.num,product:val.product,price:val.price,Tags:val.Tags,vendor:val.vendor}])}>Add to card</button></td>
                </tr>
                ))
            }
        </tbody>
    </table>
    </div>
    <div className='padgtop'>
    <div class="mx-w">
            <h1 className="size get-more-sec pd-bs">ADD TO CARD</h1>
        <div  className='padgtop'>
        <table>
        <thead >
        <tr className="violet">
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Tags</th>
                        <th>Vendor</th>
                        <th>Card</th>
                    </tr>
        </thead>
        <tbody>
            {
                change.map((val)=>(
                    <tr key={val.id}>
                    <td>{val.num}</td>
                    <td>{val.product}</td>
                    <td>{val.price}</td>
                    <td>{val.Tags}</td>
                    <td>{val.vendor}</td>
                    <td><button onClick={()=>{setChange(change.filter(a=>a.id !== val.id))}}>Delete</button></td>
                </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Tab;
