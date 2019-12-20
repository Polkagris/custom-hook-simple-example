import React, { useState } from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

function UserOne() {
  // Must be in correct order
  const [handleIsOnline, isOnline] = useOnlineStatus();

  return (
    <div>
      <h4>User Ones status is: {isOnline ? "Online" : "Offline"}</h4>
      <button onClick={handleIsOnline}>Change status</button>
    </div>
  );
}

export default UserOne;
