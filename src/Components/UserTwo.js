import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

function UserTwo() {
  // Must be in correct order
  const [handleIsOnline, isOnline] = useOnlineStatus();

  return (
    <div>
      <h4>User Twos status is: {isOnline ? "Online" : "Offline"}</h4>
      <button onClick={handleIsOnline}>Change status</button>
    </div>
  );
}

export default UserTwo;
