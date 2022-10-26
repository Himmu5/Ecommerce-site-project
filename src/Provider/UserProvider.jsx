import React, { useState, useEffect } from "react";
import { UserContext } from "../Context";
import Loading from "../Component/Cards/Loading";
import axios from "axios";

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const localToken = localStorage.getItem("token");
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
          console.log("user Data from api", user);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <UserContext.Provider value={{ isLoggedIn : !!localToken, user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
