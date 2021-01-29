import React from "react";
import {
  StyledHeaderCell,
  StyledHeadRow,
  StyledPriceTd,
  StyledTable,
  StyledTr,
} from "./styledComponents";
import { COLUM_NAMES, ROW_THEME } from "./constants";


interface instrument {
  assetClass: string,
  ticker: string,
  price: number,
}

interface Props {
  data: instrument[],
  handleSort: (event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => void;
  sortByColumn: string | null | undefined;
}

export const Table: React.FC<Props> = ({ data, handleSort, sortByColumn }) => {
  return (
    <StyledTable>
      <caption>Financial details</caption>
      <thead>
        <StyledHeadRow>
          {COLUM_NAMES.map((name) => (
            <StyledHeaderCell
              key={name}
              onClick={handleSort}
              data-active={sortByColumn === name}
              // tabindex="0"
            >
              {name}
              {/* {sortByColumn === name ? (
                <StyledSpanDownArrow>&#9660;</StyledSpanDownArrow>
              ) : (
                ""
              )} */}
            </StyledHeaderCell>
          ))}
        </StyledHeadRow>
      </thead>
      <tbody>
        {data.map((instrument, index) => (
          <StyledTr key={index} data-theme={ROW_THEME[instrument.assetClass as keyof {} ]}>
            <td>{instrument.assetClass}</td>
            <td>{instrument.ticker}</td>
            <StyledPriceTd
              data-bg={instrument.price >= 0 ? "var(--blue)" : "var(--red)"}
            >
              {instrument.price}
            </StyledPriceTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}
