import { useEffect, useState } from "react";
import { FetchAsync } from "../helpers/FetchAsync";

export const useFetch = <T = unknown,>(url: string, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<Error | null | unknown>(null);
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      setHasError(null);

      try {
        const data = await FetchAsync<T>(url, options);
        if (isMounted) {
          setResponse(data);
        }
      } catch (error: unknown) {
        if (isMounted) {
          setHasError(error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Función de limpieza
    return () => {
      isMounted = false;
    };
  }, [url, options]); // Dependencias

  return { isLoading, hasError, response };
};
