import { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (url, method = "GET", data) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    //try {
    let response;
    await axios({
      method,
      url,
      data,
      signal: httpAbortCtrl.signal,
    }).then( (res) => {
      response = res
    })       
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message)
        throw err;
      });

    activeHttpRequests.current = activeHttpRequests.current.filter(
      (reqCtrl) => reqCtrl !== httpAbortCtrl
    );

    setIsLoading(false);
    return response;
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
