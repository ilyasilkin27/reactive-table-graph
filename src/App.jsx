import React, { useState } from "react";
import Table from "./components/Table";
import { data } from "./data";
import "./App.css";

const App = () => {
  const [chartState, setChartState] = useState({
    visibleRowIndex: null,
    data: null,
  });

  const handleRowClick = (index, rowData) => {
    if (chartState.visibleRowIndex === index) {
      setChartState({ visibleRowIndex: null, data: null });
    } else {
      setChartState({ visibleRowIndex: index, data: rowData });
    }
  };

  return (
    <div className="app">
      <Table
        data={data}
        visibleRowIndex={chartState.visibleRowIndex}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default App;
