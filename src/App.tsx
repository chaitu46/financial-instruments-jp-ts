import { useEffect, useState } from "react";
import "./App.css";
import { ASSERT_CUSTOM_ORDER } from "./constants";
import { Table } from "./Table";

const getSampleData = () =>
  fetch("./sampleData.json")
    .then((data) => data.json())
    .catch((error) => console.log(error));

    interface instrument {
      assetClass: string,
      price: number,
      ticker: string,
    }


export const App:React.FC = () => {
  const [data, setData] = useState([]);
  const [sortByColumn, setSortByColumn] = useState<string | null>();
  const [meta, setMeta] = useState({ loading: true, hasError: false });

  useEffect(() => {
    getSampleData().then((data) => {
      setMeta((meta) => ({ ...meta, loading: false }));
      setData(data);
    });
  }, []);

  const handleSort = ({ target  }: any) => {
    setSortByColumn(target.textContent);
    switch (target.textContent) {
      case "Asset Class": {
        const sortedData = data.sort(
          (a: instrument, b: instrument) =>
            ASSERT_CUSTOM_ORDER.indexOf(a.assetClass) -
            ASSERT_CUSTOM_ORDER.indexOf(b.assetClass)
        );
        setData([...sortedData]);
        break;
      }
      case "Price": {
        const sortedData = data.sort((a:instrument, b:instrument) => b.price - a.price);
        setData([...sortedData]);
        break;
      }
      case "Ticker": {
        const sortedData = data.sort((a:instrument, b:instrument) => {
          if (a.ticker < b.ticker) return -1;
          if (a.ticker > b.ticker) return 1;
          return 0;
        });
        setData([...sortedData]);
        break;
      }

      default:
        break;
    }
  };

  if (meta.loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Financial Instruments - Assessment</h1>
      <div className="table-container">
        <Table
          data={data}
          handleSort={handleSort}
          sortByColumn={sortByColumn}
        />
      </div>
    </div>
  );
}

export default App;
