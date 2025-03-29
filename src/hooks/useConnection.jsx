import { useEffect, useState } from "react";

const useConnection = () => {
  const [isConnected, setConnected] = useState(navigator.onLine);
  useEffect(() => {
    const handleConnection = () => {
      setConnected(navigator.onLine);
    };
    const handleDisconnection = () => {
      setConnected(navigator.onLine);
    };
    //detect connection
    window.addEventListener("online", handleConnection);
    window.addEventListener("offline", handleDisconnection);
    return () => {
      window.removeEventListener("online", handleConnection);
      window.removeEventListener("offline", handleDisconnection);
    };
  }, []);

  return isConnected;
};

export default useConnection;
