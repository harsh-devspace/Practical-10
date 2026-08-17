# Practical 10: Digital Clock Using useEffect

## Objective
To demonstrate the use of the `useEffect` hook and React component lifecycle by developing a live digital clock that updates and displays the current time every second, with proper interval cleanup.

## Topics Covered
- `useEffect` Hook (Mounting & Unmounting Lifecycles)
- Interval Timers (`setInterval` & `clearInterval`)
- `useState` Hook for Dynamic Time State
- 12-Hour vs 24-Hour Clock Formatting
- Component Cleanup & Preventing Memory Leaks

## Project Structure
```
Practical-10/
├── src/
│   ├── components/
│   │   ├── ClockCard.jsx
│   │   └── FormatToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Installation & Running Steps
1. Navigate to the project directory:
   ```bash
   cd Practical-10
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`.
