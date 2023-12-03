
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import ProductList from './Component/productList';
import Footer from './Footer';


function App(props) {

  let[status , setStatus]=useState('all');
  function handleData(data){
    setStatus(data);
  }
  function trigerpopup(){
    setTriggerpopup(true);
  }
  let[triggerpopup , setTriggerpopup]=useState(false)
  let[headerCount , setHeadercount]=useState(0);

  function setClosepopup(){
    setTriggerpopup(false);
  }



 
  return (
      <div>
        <Header headerCount={headerCount} onData={(data)=>{handleData(data)}} onTriggerpopup={trigerpopup} />
       <ProductList  onHeadercount={(count)=>{setHeadercount(count)}} status={status}  triggerpopup={triggerpopup} onclose={()=>setClosepopup(false)} />
       <Footer/>
      </div>
  );
}

export default App;
