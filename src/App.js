import React from 'react';
import TableWrapper from './components/TableWrapper';
import PieChart from './components/PieChart';
import {useSelector} from "react-redux";

function App() {
  const { activeDataChart } = useSelector((state) => state);
  return (
    <div className="App">
      <PieChart data={activeDataChart} />
      <TableWrapper />
    </div>
  );
}

export default App;
