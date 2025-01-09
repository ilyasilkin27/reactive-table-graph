import React from "react";
import TableRow from "./TableRow";
import ChartRow from "./ChartRow";

const Table = ({ data, visibleRowIndex, onRowClick }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Показатель</th>
        <th>Текущий день</th>
        <th>Вчера</th>
        <th>Эта неделя</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <React.Fragment key={index}>
          <TableRow
            row={row}
            index={index}
            onClick={onRowClick}
            isSelected={visibleRowIndex === index}
          />
          {visibleRowIndex === index && <ChartRow row={row} />}
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default Table;
