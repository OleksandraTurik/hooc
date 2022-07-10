import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      if (resp.status !== 200) {
        setError('Something went wrong');
        setLoading(false);
      } else {
        const result = await resp.json();
        setData(result);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
    return () => {
        setData(null)
        setError('')
        setLoading(false)
    }
  }, []);
  return [data, loading, error];
};

export default useFetch;
