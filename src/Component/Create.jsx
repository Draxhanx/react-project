import React, { useContext, useState } from "react";
import {ProductsContetxt } from "../utils/contex";

function Create() {
  const [title, setTitle] = useState("e");
  const [image, setimage] = useState("e");
  const [price, setprice] = useState("e");
  const [category, setcategory] = useState("e");
  const [description, setdescription] = useState("e");

  const[products , setproducts] = useContext(ProductsContetxt)

 
//   console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
     title,
     image,
     price,
     category,
    description,
 
}

setproducts([...products , product])

  };
console.log(products)
  return (
    <form  onSubmit={handleSubmit}
    className="w-[40%] text-center ml-[30%] mt-[5%] gap-5 flex flex-col  ">
      <h1 className="text-xl font-semibold">Add New Items</h1>
      <input
      onChange={(e)=>setTitle(e.target.value)}
        className="p-3 w-full rounded-md  border-black border"
        type="text"
        placeholder="Add title"
      />
      <input
      onChange={(e)=>setimage(e.target.value)}
        className="p-3 w-full rounded-md border-black border "
        type="url"
        placeholder="image"
      />
      <div className="flex gap-4">
        <input
        onChange={(e)=>setprice(e.target.value)}
          className="p-3 w-full rounded-md border-black border "
          type="number"
          placeholder="price"
        />

        <input
        onChange={(e)=>setcategory(e.target.value)}
          className="p-3 w-full rounded-md border-black border "
          type="text"
          placeholder="Category"
        />
      </div>
      <textarea
         onChange={(e)=>setdescription(e.target.value)}
        className=" w-full rounded-md border-black border"
        rows="10"
        placeholder="Enter Product Desciption"
      ></textarea>

      <button 
       className="p-2 bg-red-300 rounded-md hover:bg-red-400">Submit</button>
    </form>
  );
}

export default Create;
