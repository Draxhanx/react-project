import React from "react";
import Home from "./Component/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Component/Details";
import Create from "./Component/Create";

function App() {
  const { search, pathname } = useLocation();

  console.log(pathname, search);
  return (
    <>
      <div className="w-full h-screen flex">
        {search.length > 0 ? (
          <Link to="/" className="bg-red-300 absolute ml-[17%] ">
            Home
          </Link>
        ) : (
          <Link to="/" className="bg-red-300 absolute ml-[17%] ">
            Home
          </Link>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
