"use client";

import { useEffect, useState } from "react";


type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};


export default function useFetch<T>(
  url: string
) {

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });


  useEffect(() => {

    let cancelled = false;


    async function fetchData() {

      try {

        setState({
          data: null,
          loading: true,
          error: null,
        });


        const response =
          await fetch(url);


        if (!response.ok) {
          throw new Error(
            "Failed to fetch data"
          );
        }


        const result =
          await response.json();


        if (!cancelled) {

          setState({
            data: result,
            loading: false,
            error: null,
          });

        }


      } catch (error) {

        if (!cancelled) {

          setState({
            data: null,
            loading: false,
            error:
              error instanceof Error
                ? error.message
                : "Unknown error",
          });

        }

      }

    }


    fetchData();


    return () => {
      cancelled = true;
    };


  }, [url]);


  return state;
}
