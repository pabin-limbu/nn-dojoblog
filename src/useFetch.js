import { useEffect, useState } from "react";

/**CUSTOM HOOKS */
/**useState hook--> Create State for the component */

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  /**useEffect hook--> Runs a function in every render of the component
   * component render initially and every time after the state changes
   *DependencyArray-->passed in useEffectHook as second arguement-->if empty only run this hook in initial render.after this it wont run if the state chage.
   Dependeny array-->with dependency let us decide when to run this hook.
   */
  useEffect(() => {
    //  console.log("use Effect rran");
    const abbortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abbortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }

          // console.log(err.message);
        });
    }, 1000);

    return () => {
      console.log("aborting fetch !");
      abbortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
