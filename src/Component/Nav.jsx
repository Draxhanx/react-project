import React, { useContext } from "react";
import { ProductsContetxt } from "../utils/contex";
import { Link } from "react-router-dom";

function Nav(){

  const [products] = useContext(ProductsContetxt);
  
   let distinctCategory = products ? 
   products.map((item)=> item.category
  ) : "unknown";

  distinctCategory = [...new Set(distinctCategory)]


  


    return (
        <>
        <nav className="w-[15%] h-screen bg-zinc-200">
          <div className="flex items-center flex-col">
            <a
              className=" font-medium  p-3 border-blue-300 hover:border-blue-500 m-1 rounded-full border-2"
              href="/create"
            >
              Add Product
            </a>
            <hr className="w-full h-[1.3px] bg-red-600 " />
            <h1 className="font-semibold w-[80%]">Catageries</h1>

            {distinctCategory.map((item, index)=><div className="w-full mt-2">
              <Link to={`/?category=${item}`} className=" flex items-center gap-1 w-full hover:font-semibold mb-1 capitalize ">
                <span className="w-[15px] h-[15px] rounded-full inline-block hover:bg-black ml-3 bg-blue-300">
                  
                </span>
                {item}
              </Link>
            </div>)}
            
          </div>
        </nav>
        </>
    )
}

export default Nav;