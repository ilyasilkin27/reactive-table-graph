import type { FC } from 'react';
import TableRow from './TableRow';
import ChartRow from './ChartRow';
import type { DataRow } from '../data';
import React from 'react';

export interface TableProps {
  data: DataRow[];
  visibleRowIndex: number | null;
  onRowClick: (index: number, row: DataRow) => void;
}

const Table: FC<TableProps> = ({ data, visibleRowIndex, onRowClick }) => (
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
        <React.Fragment key={row.category}>
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