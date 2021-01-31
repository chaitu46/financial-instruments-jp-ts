import { SAMPLE_DATA_FETCH_URL } from "./constants";
import { useFetchData } from "./hooks/useFetchData";
import { StyledAppTitle, StyledTableContainer } from "./styledComponents";
import { Table } from "./Table";

export const App: React.FC = () => {
  const { isLoading, isError, data } = useFetchData(SAMPLE_DATA_FETCH_URL, []);

  if (isError) {
    return <StyledAppTitle>Sorry, Somethings gone wrong!</StyledAppTitle>;
  }
  if (isLoading) {
    return <StyledAppTitle>Loading...</StyledAppTitle>;
  }
  return (
    <div>
      <StyledAppTitle>Financial Instruments - Assessment</StyledAppTitle>
      <StyledTableContainer>
        <Table initialData={data} />
      </StyledTableContainer>
    </div>
  );
}

export default App;
