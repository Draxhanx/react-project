import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {

  const [products , setProducts] = useState(null)

  const {id} = useParams()

  const getSingleProductsId = async()=>{

    try {
        const {data} = await axios.get(`/products/${id}`)
      setProducts(data)

      console.log(data)
    } catch (error) {
      console.log(error)
      
    }

  }

  useEffect(()=>{
    getSingleProductsId()
  },[])

  
  return products ? (
    <>
      <div className="w-[70%] h-full p-[10%] flex items-center justify-between gap-  m-auto">
          <img
             className=" w-[40%] h-[80%] object-contain"
             src={products.image}
             alt=""
          />

           <div className="w-[50%]   contain">
            <h1 className="text-2xl font-medium">{products.title}</h1>
               <h1 className="text-blue-900"> {products.price}</h1>
               <h1 className="font-semibold uppercase">{products.category}</h1>
                 <p className="text-xm font-semibold mb-5">{products.description}</p>
               <Link className=" font-medium mr-3 p-2 border-blue-300 hover:border-blue-500  rounded-xl border-2" >Edit</Link>
               <Link className=" font-medium mr-3 p-2 border-blue-300 hover:border-blue-500  rounded-xl border-2">Delete</Link>
            </div>
      </div>
    </>
  ):(
    <Loading />
  );
}

export default Details;
