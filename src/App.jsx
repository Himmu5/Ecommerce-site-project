import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import MainContant from "./Component/MainContant";
import Card from "./Component/Cards/Card";
import { Routes, Route } from "react-router-dom";
import Loading from "./Component/Cards/Loading";
import DataNotFound from "./Component/DataNotFound";
import { createContext, useEffect, useMemo, useState } from "react";
import SearchNotFound from "./Component/SearchNotFound";
import SignIn from './Validation/SignIn'
import SignUp from "./Validation/SignUp";
import ResetPassword from "./Validation/ResetPassword";
import Cart from "../src/Component/Cart/Cart";

function App() {

  const [oldData,setoldData]=useState(JSON.parse(localStorage.getItem("my-cart") || "{}"));

  let SavedData = oldData;
  const [totalproduct, settotalproduct] = useState(SavedData);

  

  console.log('Total Product',totalproduct);


  function addToCart(productId, count) {
    const olddata = totalproduct[productId] || 0;
    const newCart = { ...totalproduct, [productId]: +count + +olddata };
    settotalproduct(newCart);
  }

  localStorage.setItem("my-cart", JSON.stringify(totalproduct));
  
  // console.log(' T Product ',totalproduct);

  let CartTotal = Object.keys(totalproduct).reduce((output, current) => {
    return output + totalproduct[current];
  }, 0);

  return (
    <>
      <div className="bg-gray-100 font-['Poppins'] selection:text-white selection:bg-red-400 ">
        <Nav total={CartTotal} />

        <div className="">

        

          <Routes>

            <Route index element={<MainContant />}></Route>
            <Route
              path="/Component/Cards/Card/:id/"
              element={<Card CartValue={addToCart} />}
            ></Route>
            <Route path="*" element={<DataNotFound />}></Route>
            <Route
              path="/component/Cart/Cart"
              element={<Cart productData={totalproduct} UpdateCart={settotalproduct} />}
            ></Route>
           

            <Route path="/component/validation/SignIn" element={<SignIn/>}></Route>
            <Route path="/component/validation/SignUp" element={<SignUp/>}></Route>
            <Route path="/component/validation/ResetPassword" element={<ResetPassword/>}></Route>
            
          </Routes>
          
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
