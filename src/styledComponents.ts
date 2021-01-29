import styled from "styled-components";

interface theme{
  bg: string;
  color: string;
}

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 50%;
  td,
  th {
    border: 1px solid grey;
    text-align: left;
    padding: 10px;
  }
  @media print {
    tbody td,
    thead th {
      color: black;
    }
  }
`;

export const StyledTr = styled.tr<{'data-theme': theme}>`
  background-color: ${(props) => props["data-theme"].bg};
  color: ${(props) => props["data-theme"].color || "black"};
`;
export const StyledPriceTd = styled.td<{'data-bg': string}>`
  background-color: ${(props) => props["data-bg"]};
  color: var(--white);
`;

export const StyledHeadRow = styled.tr`
  background-color: var(--dark-grey);
  color: var(--white);
  cursor: pointer;
`;

export const StyledHeaderCell = styled.th<{'data-active': boolean}>`
  background-color: ${(props) => (props["data-active"] ? "grey" : "")};
  min-width: 50px;
  max-width: 100px;
  &:hover {
    background-color: grey;
  }
`;
