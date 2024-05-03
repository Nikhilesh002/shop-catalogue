import { useState,useEffect } from 'react';
import {ProductsContext} from './ProductsContext';

function ProductsStore({children}) {

  let [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(productsList=>setProducts(productsList))
    .catch(err=>console.log(err));
  },[])
  
  //console.log(products);

  return (
    <ProductsContext.Provider value={[products]}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsStore;