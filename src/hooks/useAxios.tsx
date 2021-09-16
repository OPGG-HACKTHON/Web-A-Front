import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

import api from "lib/customAxios";

interface IUseAxiosParam {
  url: string;
  method: "get" | "delete" | "head" | "options" | "post" | "put" | "patch";
  data?: any | null;
  config?: AxiosRequestConfig;
}

export const useAxios = <R extends any = any>({
  url,
  method,
  data = null,
  config = undefined,
}: IUseAxiosParam) => {
  const [response, setResponse] = useState<R | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    api[method](url, data, config)
      .then((res: AxiosResponse<R>) => {
        setResponse(res.data);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
};
