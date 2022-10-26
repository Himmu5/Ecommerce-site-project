import React, { useContext } from "react";
import { UserContext } from "./Context";

function WithUser(IncomingComponent) {
  function OutgoingComponent(propes) {
    const ContextData = useContext(UserContext);
    return <IncomingComponent {...propes} {...ContextData} />;
  }
  return OutgoingComponent;
}

export default WithUser;
