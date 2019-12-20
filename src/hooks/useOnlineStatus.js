import { useState } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  const handleIsOnline = () => {
    setIsOnline(!isOnline);
  };

  return [handleIsOnline, isOnline];
};
