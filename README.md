[![Лайв](https://img.shields.io/badge/Лайв-pink)](https://ilyasilkin27.github.io/reactive-table-graph/)

# Reactive Table Graph

Таблица с показателями и графиками на современном стеке (Vite + React + TypeScript + Bun) с feature-based структурой.

## Стек
- **React** + **TypeScript**
- **Vite** (frontend)
- **Bun** (runtime & package manager)
- **Highcharts** (графики)

## Структура проекта (Feature-Sliced Design)
```
src/
  app/                # Точка входа, глобальные стили, App.tsx
    App.tsx
    main.tsx
    index.css
    App.css
  shared/             # Общие компоненты, типы, ассеты
    assets/
      react.svg
    types/
      index.ts
  features/           # Фичи (бизнес-модули)
    TableWithChart/
      components/
        Table.tsx
        TableRow.tsx
        ChartRow.tsx
      model/
        data.ts
        types.ts
      styles/
        Table.css
      index.ts
```

## Запуск проекта

1. Установите зависимости (в директории проекта):
   ```bash
   bun install
   ```
2. Запустите dev-сервер:
   ```bash
   bun run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Описание
- Все бизнес-фичи лежат в `src/features/` (каждая — в своей папке)
- Общие компоненты, ассеты и типы — в `src/shared/`
- Точка входа и глобальные стили — в `src/app/`

## Зависимости
- React, TypeScript, Vite, Bun
- highcharts, highcharts-react-official
