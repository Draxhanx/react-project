import React, { createContext, useEffect, useState } from 'react'
import axios from '../utils/axios'


export const ProductsContetxt = createContext()


const Context = (props)=>{

   const [products, setProducts] = useState(null)




   const getProducts = async()=>{
    try{
        const {data} = await axios("/products")
        setProducts(data)

    }catch(err){
        console.log(err)
    }
   }

  useEffect(()=>{
    getProducts()
  },[])

  console.log(products)


    return (

<ProductsContetxt.Provider value={[products, setProducts]}>
    {props.children}
</ProductsContetxt.Provider>


    )

}

export default Context;