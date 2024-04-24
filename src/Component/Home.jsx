import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import {ProductsContetxt } from "../utils/contex";

// import Farzi from "./Farzi";
import Loading from "./Loading";
import axios from "../utils/axios";
import { useState } from "react";

function Home() {
  const [products] = useContext(ProductsContetxt);

  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1])

  // console.log(category)

  // let getCategorydata = products ;

 const[getCategorydata , setgetCategorydata] =  useState(null)

  let getProductsCategory = async () =>{
    try {
       const {data} = await axios.get(`/products/category/${category}`)

       setgetCategorydata(data)

       console.log(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    if(!getCategorydata || category == 'undefined') setgetCategorydata(products)
    if(category != "undefined") getProductsCategory()
  },[category,products])



  return products  ? (
    <>
      <Nav />
      <div className=" navkebaad w-[85%] p-3 pt-[3%] h-full flex flex-wrap overflow-x-hidden overflow-y-auto ">
        {getCategorydata && getCategorydata.map((i, p) => {  
          return   ( 
            <Link
              to={`/details/${i.id}`}
              className="card mr-3 mt-3  flex flex-col  items-center justify-center m-2 w-[18%] h-[35vh] border shadow"
            >
              <div
                className="w-full hover:scale-125 transition ease-in-out  bg-center h-[80%] bg-contain bg-no-repeat  "
                style={{
                  backgroundImage:
                    `url(${i.image})`,
                }}
              ></div>
              <h1>{i.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
  <Loading />
  );
}

export default Home;
