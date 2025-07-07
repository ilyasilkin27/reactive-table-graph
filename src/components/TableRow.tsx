import type { FC } from 'react';
import type { DataRow } from '../data';

export interface TableRowProps {
  row: DataRow;
  index: number;
  onClick: (index: number, row: TableRowProps['row']) => void;
  isSelected: boolean;
}

const calculateDifference = (current: number, previous: number) => {
  const diff = current - previous;
  const percent = previous !== 0 ? ((diff / previous) * 100).toFixed(1) : '0.0';
  if (diff > 0) return { value: `+${percent}%`, className: 'positive' };
  if (diff < 0) return { value: `${percent}%`, className: 'negative' };
  return { value: '0%', className: 'neutral' };
};

const TableRow: FC<TableRowProps> = ({ row, index, onClick, isSelected }) => {
  const todayVsYesterday = calculateDifference(row.today, row.yesterday);
  const todayVsWeek = calculateDifference(row.today, row.week);

  return (
    <tr
      onClick={() => onClick(index, row)}
      className={isSelected ? 'selected' : ''}
    >
      <td>{row.category}</td>
      <td>{row.today.toLocaleString()}</td>
      <td className={todayVsYesterday.className}>
        {row.yesterday.toLocaleString()}
        <span className="difference">{todayVsYesterday.value}</span>
      </td>
      <td className={todayVsWeek.className}>
        {row.week.toLocaleString()}
        <span className="difference">{todayVsWeek.value}</span>
      </td>
    </tr>
  );
};

export default TableRow; 