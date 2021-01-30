import React, { useMemo, useState } from "react";
import {
  StyledHeaderButton,
  StyledHeadRow,
  StyledPriceTd,
  StyledTable,
  StyledTr,
} from "./styledComponents";
import { COLORS, COLUMN_IDS, COLUMN_NAMES, ROW_THEME } from "./constants";
import getSortData from "./calculations/getSortData";
import { TableProps } from "./interfaces";


export const Table: React.FC<TableProps> = ({ initialData }) => {
  const [sortByColumn, setSortByColumn] = useState<string>();
  const tableData = useMemo(() => getSortData(sortByColumn, initialData), [sortByColumn, initialData]);
  const handleSort = ({ currentTarget: { id } }: React.MouseEvent<HTMLButtonElement>) => {
    if (id !== sortByColumn) {
      setSortByColumn(id);
    }
  }

  return (
    <StyledTable>
      <caption>Financial details</caption>
      <thead>
        <StyledHeadRow>
          {COLUMN_NAMES.map((name: string, index: number) => (
            <th key={name}>
              <StyledHeaderButton
                onClick={handleSort}
                data-active={COLUMN_IDS[index] === sortByColumn}
                id={COLUMN_IDS[index]}
              >
                {name}
              </StyledHeaderButton>
            </th>
          ))}
        </StyledHeadRow>
      </thead>
      <tbody>
        {tableData.map((instrument, index) => (
          <StyledTr key={index} data-theme={ROW_THEME[instrument.assetClass as keyof {}]}>
            <td>{instrument.assetClass}</td>
            <td>{instrument.ticker}</td>
            <StyledPriceTd
              data-bg={instrument.price >= 0 ? COLORS.blue : COLORS.red}
            >
              {instrument.price}
            </StyledPriceTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}
