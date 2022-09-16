import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import MainContant from "./Component/MainContant";
import Card from "./Component/Cards/Card";
import { Routes, Route } from "react-router-dom";
import Loading from "./Component/Cards/Loading";
import DataNotFound from "./Component/DataNotFound";
import NewCard from "./Component/Cards/NewCard";
import { useEffect, useState } from "react";
import CartPage from "./Component/Cart/CartPage";
import SearchNotFound from "./Component/SearchNotFound";


function App() {

  let oldData=localStorage.getItem('my-cart')||"{}";
  let SavedData=JSON.parse(oldData);

  const [totalproduct, settotalproduct] = useState(SavedData);
  // console.log(totalproduct);

  function addToCart(productId, count) {

    const olddata =totalproduct[productId] || 0;
    const newCart={ ...totalproduct, [productId]: +count + +(olddata) };
    settotalproduct(newCart);
  }
  localStorage.setItem("my-cart", JSON.stringify(totalproduct));
  // console.log(totalproduct);


  let CartTotal= Object.keys(totalproduct).reduce(( output , current  )=>{
    return output + totalproduct[current];
  }, 0);



  return (
    <>
      <div className="bg-gray-100 font-['Poppins'] selection:text-white selection:bg-red-400 ">
        <Nav total={CartTotal}/>

        <div className="">
          <Routes>
            <Route index element={<MainContant />}></Route>
            <Route
              path="/Component/Cards/Card/:id/"
              element={<Card CartValue={addToCart} />}
            ></Route>
            <Route path="*" element={<DataNotFound />}></Route>
            <Route path="/component/Cart/CartPage" element={<CartPage productList={totalproduct}/>}></Route>
            {/* <Route path="/component/Cart/NewCart" element={<NewCart/>}></Route> */}
          </Routes>
        </div>

        <Footer />
      
      </div>
       
    </>
  );
}

export default App;
