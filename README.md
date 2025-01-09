[![Лайв](https://img.shields.io/badge/Лайв-pink)](https://ilyasilkin27.github.io/reactive-table-graph/)

# Проект "Таблица с графиками"

Таблица с показателями и графиками на основе данных. В таблице отображаются значения за текущий день, вчера и за неделю, с возможностью отображения графика для каждого показателя.

## Структура проекта

Проект состоит из нескольких компонентов, каждый из которых отвечает за свою часть:

- **App.js** — главный компонент, который управляет состоянием и передает данные в дочерние компоненты.
- **Table.js** — компонент, отображающий таблицу с данными.
- **TableRow.js** — компонент, отвечающий за отображение строки таблицы с данными.
- **ChartRow.js** — компонент, который отображает график для выбранной строки.
- **data.js** — файл с данными для отображения.

## Запуск проекта

1. Клонирование репозитория:
   ```bash
   git clone <ссылка на репозиторий>
   ```

2. Установка зависимостей:
   ```bash
   npm install
   ```

3. Запуск проекта:
   ```bash
   npm start
   ```

Проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Структура данных

Каждый элемент в массиве `data` представляет собой объект с полями:

- **category** — название показателя (например, "Выручка, руб").
- **today** — значение показателя за текущий день.
- **yesterday** — значение показателя за вчерашний день.
- **week** — значение показателя за текущую неделю.
- **chartData** — массив данных для отображения графика.

## Описание компонентов

### **App.js**
Главный компонент, который управляет состоянием и отслеживает, какой ряд выбран для отображения графика.

### **Table.js**
Компонент, который отображает саму таблицу. Для каждой строки таблицы отображаются данные за текущий день, вчера и за неделю, а также разница между ними.

### **TableRow.js**
Компонент для рендеринга одной строки таблицы. Вычисляет разницу между значениями и отображает её в виде процента.

### **ChartRow.js**
Компонент, который отображает график для выбранной строки. Использует библиотеку **Highcharts** для отображения данных.

### **data.js**
Файл, в котором хранится набор данных для отображения в таблице.

## Библиотеки

В проекте используются следующие библиотеки:

- **React** — библиотека для построения пользовательских интерфейсов.
- **Highcharts** — библиотека для отображения графиков.
- **Highcharts React** — обертка для использования Highcharts в React-приложениях.
