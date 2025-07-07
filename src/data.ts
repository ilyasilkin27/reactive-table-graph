export interface DataRow {
  category: string;
  today: number;
  yesterday: number;
  week: number;
  chartData: number[];
}

export const data: DataRow[] = [
  {
    category: 'Выручка, руб',
    today: 500521,
    yesterday: 480521,
    week: 4805121,
    chartData: [100, 200, 300, 400, 500],
  },
  {
    category: 'Наличные',
    today: 300000,
    yesterday: 300000,
    week: 300000,
    chartData: [50, 100, 150, 200, 250],
  },
  {
    category: 'Безналичный расчет',
    today: 100000,
    yesterday: 100000,
    week: 100000,
    chartData: [60, 80, 120, 160, 200],
  },
  {
    category: 'Кредитные карты',
    today: 100521,
    yesterday: 100521,
    week: 100521,
    chartData: [900, 1000, 1100, 1200, 1300],
  },
  {
    category: 'Средний чек, руб',
    today: 1300,
    yesterday: 900,
    week: 900,
    chartData: [60, 80, 120, 160, 200],
  },
  {
    category: 'Средний гость, руб',
    today: 1200,
    yesterday: 800,
    week: 800,
    chartData: [60, 80, 120, 160, 200],
  },
  {
    category: 'Удаления из чека (после оплаты), руб',
    today: 1000,
    yesterday: 1100,
    week: 900,
    chartData: [60, 80, 120, 160, 200],
  },
  {
    category: 'Удаления из чека (до оплаты), руб',
    today: 1300,
    yesterday: 1300,
    week: 900,
    chartData: [60, 80, 120, 160, 200],
  },
  {
    category: 'Количество чеков',
    today: 34,
    yesterday: 36,
    week: 34,
    chartData: [1, 5, 10, 15, 20],
  },
  {
    category: 'Количество гостей',
    today: 34,
    yesterday: 36,
    week: 32,
    chartData: [1, 5, 10, 15, 20],
  },
]; 