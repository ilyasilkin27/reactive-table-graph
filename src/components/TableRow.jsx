import React from "react";

const calculateDifference = (current, previous) => {
  const diff = current - previous;
  const percent = ((diff / previous) * 100).toFixed(1);
  if (diff > 0) return { value: `+${percent}%`, className: "positive" };
  if (diff < 0) return { value: `${percent}%`, className: "negative" };
  return { value: "0%", className: "neutral" };
};

const TableRow = ({ row, index, onClick, isSelected }) => {
  const todayVsYesterday = calculateDifference(row.today, row.yesterday);
  const todayVsWeek = calculateDifference(row.today, row.week);

  return (
    <tr
      onClick={() => onClick(index, row)}
      className={isSelected ? "selected" : ""}
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
