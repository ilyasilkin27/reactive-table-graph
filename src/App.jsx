import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./App.css";

const App = () => {
  const [chartState, setChartState] = useState({
    visibleRowIndex: null,
    data: null,
  });

  const data = [
    {
      category: "Выручка, руб",
      today: 500521,
      yesterday: 480521,
      week: 4805121,
      chartData: [100, 200, 300, 400, 500],
    },
    {
      category: "Наличные",
      today: 300000,
      yesterday: 300000,
      week: 300000,
      chartData: [50, 100, 150, 200, 250],
    },
    {
      category: "Безналичный расчет",
      today: 100000,
      yesterday: 100000,
      week: 100000,
      chartData: [60, 80, 120, 160, 200],
    },
    {
      category: "Кредитные карты",
      today: 100521,
      yesterday: 100521,
      week: 100521,
      chartData: [900, 1000, 1100, 1200, 1300],
    },
    {
      category: "Средний чек, руб",
      today: 1300,
      yesterday: 900,
      week: 900,
      chartData: [60, 80, 120, 160, 200],
    },
    {
      category: "Средний гость, руб",
      today: 1200,
      yesterday: 800,
      week: 800,
      chartData: [60, 80, 120, 160, 200],
    },
    {
      category: "Удаления из чека (после оплаты), руб",
      today: 1000,
      yesterday: 1100,
      week: 900,
      chartData: [60, 80, 120, 160, 200],
    },
    {
      category: "Удаления из чека (до оплаты), руб",
      today: 1300,
      yesterday: 1300,
      week: 900,
      chartData: [60, 80, 120, 160, 200],
    },
    {
      category: "Количество чеков",
      today: 34,
      yesterday: 36,
      week: 34,
      chartData: [1, 5, 10, 15, 20],
    },
    {
      category: "Количество гостей",
      today: 34,
      yesterday: 36,
      week: 32,
      chartData: [1, 5, 10, 15, 20],
    },
  ];

  const calculateDifference = (current, previous) => {
    const diff = current - previous;
    const percent = ((diff / previous) * 100).toFixed(1);
    if (diff > 0) return { value: `+${percent}%`, className: "positive" };
    if (diff < 0) return { value: `${percent}%`, className: "negative" };
    return { value: "0%", className: "neutral" };
  };

  const handleRowClick = (index, rowData) => {
    if (chartState.visibleRowIndex === index) {
      setChartState({ visibleRowIndex: null, data: null });
    } else {
      setChartState({ visibleRowIndex: index, data: rowData });
    }
  };

  return (
    <div className="app">
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
          {data.map((row, index) => {
            const todayVsYesterday = calculateDifference(row.today, row.yesterday);
            const todayVsWeek = calculateDifference(row.today, row.week);

            return (
              <React.Fragment key={index}>
                <tr
                  onClick={() => handleRowClick(index, row)}
                  className={chartState.visibleRowIndex === index ? "selected" : ""}
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
                {chartState.visibleRowIndex === index && ( 
                  <tr className="chart-row">
                    <td colSpan={4}>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                          title: { text: row.category },
                          xAxis: { categories: ["Пн", "Вт", "Ср", "Чт", "Пт"] },
                          yAxis: { title: { text: "Значения" } },
                          series: [
                            {
                              name: row.category,
                              data: row.chartData,
                            },
                          ],
                        }}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
