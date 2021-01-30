import { useEffect, useReducer } from "react";
import { FetchActions, InitialState } from "../interfaces";

const getInitialState = (initialData: []) => ({
  isLoading: true,
  isError: false,
  data: initialData,
});

const fetchReducer = (state: InitialState, action: FetchActions) => {
  switch (action.type) {
    case "DATA_FETCH_INIT":
      return {
        ...state,
      };
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export const useFetchData = (url: string, initialData: []) => {
  const [state, dispatch] = useReducer(
    fetchReducer,
    getInitialState(initialData)
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "DATA_FETCH_INIT" });
      try {
        const data = await fetch(url).then((data) => data.json());
        dispatch({ type: "DATA_FETCH_SUCCESS", data });
      } catch (error) {
        dispatch({ type: "DATA_FETCH_FAILURE" });
      }
    };
    fetchData();
  }, [url]);
  return state;
};
