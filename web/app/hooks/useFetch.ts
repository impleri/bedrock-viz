import { useEffect, useState } from "react";

type FetchHookResponse<TData = Record<string, unknown>, TError = string> = {
  data: TData;
  error: TError;
  isLoaded: boolean;
};

export function useFetch<TData = Record<string, unknown>>(url: string): FetchHookResponse<TData> {
  const [error, setError] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<TData>();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status}: ${res.statusText}`);
        }

        return res.json();
      })
      .then(
        (result: TData) => {
          setIsLoaded(true);
          setData(result);
        },
        (error: string) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  return { error, isLoaded, data };
}
