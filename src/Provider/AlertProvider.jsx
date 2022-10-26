import React, { useState } from "react";
import { AlertContext } from "../Context";

function AlertProvider({ children }) {
  const [alert, setAlert] = useState();

  const RemoveAlert = () => {
    setAlert(undefined);
  };

  return (
    <div>
      <AlertContext.Provider value={{ alert, setAlert, RemoveAlert }}>
        {children}
      </AlertContext.Provider>
    </div>
  );
}

export default AlertProvider;
