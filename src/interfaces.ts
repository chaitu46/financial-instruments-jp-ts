type DATA_FETCH_INIT = "DATA_FETCH_INIT";
type DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
type DATA_FETCH_FAILURE = "DATA_FETCH_FAILURE";

export type FetchActions =
  | { type: DATA_FETCH_INIT }
  | { type: DATA_FETCH_FAILURE }
  | { type: DATA_FETCH_SUCCESS; data: Instrument[] };

export type SortByColumnType = string | null | undefined;

export interface Instrument {
  assetClass: string;
  price: number;
  ticker: string;
}
export interface Meta {
  loading: boolean;
  hasError: boolean;
}
export interface TableProps {
  initialData: Instrument[];
}
export interface InitialState {
  isLoading: boolean;
  isError: boolean;
  data: [] | Instrument[];
}

export interface Theme {
  bg: string;
  color: string;
}
