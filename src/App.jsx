import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import MainContant from "./Component/MainContant";
import Card from "./Component/Cards/Card";
import { Routes, Route } from "react-router-dom";
import DataNotFound from "./Component/DataNotFound";
import { createContext, useEffect, useMemo, useState } from "react";
import SignIn from "./Validation/SignIn";
import SignUp from "./Validation/SignUp";
import ResetPassword from "./Validation/ResetPassword";
import Cart from "../src/Component/Cart/Cart";
import Loading from "./Component/Cards/Loading";
import axios from "axios";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

const UserContext = createContext();

function App() {
  const localToken = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState();
  useEffect(() => {
    if (localToken) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: localToken,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const [oldData, setoldData] = useState(
    JSON.parse(localStorage.getItem("my-cart") || "{}")
  );

  console.log(user, "User");

  let SavedData = oldData;
  const [totalproduct, settotalproduct] = useState(SavedData);
  console.log("Total Product", totalproduct);

  function addToCart(productId, count) {
    const olddata = totalproduct[productId] || 0;
    const newCart = { ...totalproduct, [productId]: +count + +olddata };
    settotalproduct(newCart);
  }

  localStorage.setItem("my-cart", JSON.stringify(totalproduct));

  function UpdateCart(newCart) {
    settotalproduct(newCart);
    const CartString = newCart;
    localStorage.setItem("my-cart", JSON.stringify(CartString));
  }
  // console.log(' T Product ',totalproduct);

  let CartTotal = Object.keys(totalproduct).reduce((output, current) => {
    return output + totalproduct[current];
  }, 0);

  console.log(user, "user Are this");

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gray-100 font-['Poppins'] selection:text-white selection:bg-red-400 ">
        <Nav total={CartTotal} />
        <UserContext.Provider value={user}>
          <div>
            <Routes>
              <Route
                index
                element={
                  <UserRoute>
                    <MainContant />
                  </UserRoute>
                }
              ></Route>
              <Route
                path="/Component/Cards/Card/:id/"
                element={
                  <UserRoute>
                    <Card CartValue={addToCart} />
                  </UserRoute>
                }
              ></Route>
              <Route path="*" element={<DataNotFound />}></Route>
              <Route
                path="/component/Cart/Cart"
                element={
                  <UserRoute>
                    <Cart
                      productData={totalproduct}
                      UpdateCart={settotalproduct}
                    />
                  </UserRoute>
                }
              ></Route>

              <Route
                path="/component/validation/SignIn"
                element={
                  <AuthRoute>
                    <SignIn setUser={setUser} />
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/component/validation/SignUp"
                element={
                  <AuthRoute>
                    <SignUp />
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/component/validation/ResetPassword"
                element={
                  <AuthRoute>
                    <ResetPassword />
                  </AuthRoute>
                }
              ></Route>
            </Routes>
          </div>
        </UserContext.Provider>
        <Footer />
      </div>
    </>
  );
}
export { UserContext };
export default App;
