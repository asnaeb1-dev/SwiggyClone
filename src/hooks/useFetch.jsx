import { useEffect, useState } from "react";

const useFetch = (url = "", options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAPIResponse = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error on new fetch
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    getAPIResponse();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
