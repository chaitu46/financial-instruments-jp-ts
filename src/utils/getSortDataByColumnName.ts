import {
  ASSERT_CUSTOM_ORDER,
  ASSERT_ID,
  PRICE_ID,
  TICKER_ID,
} from "../constants";
import { Instrument, SortByColumnType } from "../interfaces";

export function getSortDataByColumnName(
  sortByColumn: SortByColumnType,
  initialData: Instrument[]
) {
  switch (sortByColumn) {
    case ASSERT_ID: {
      return [
        ...initialData.sort(
          (a: Instrument, b: Instrument) =>
            ASSERT_CUSTOM_ORDER.indexOf(a.assetClass) -
            ASSERT_CUSTOM_ORDER.indexOf(b.assetClass)
        ),
      ];
    }
    case PRICE_ID: {
      return [
        ...initialData.sort(
          (a: Instrument, b: Instrument) => b.price - a.price
        ),
      ];
    }
    case TICKER_ID: {
      return [
        ...initialData.sort((a: Instrument, b: Instrument) => {
          if (a.ticker < b.ticker) return -1;
          if (a.ticker > b.ticker) return 1;
          return 0;
        }),
      ];
    }
    default:
      return initialData;
  }
}
