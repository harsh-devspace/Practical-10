import React, { useState, useEffect } from 'react';
import ClockCard from './components/ClockCard';
import FormatToggle from './components/FormatToggle';

function App() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  // useEffect Hook to update time every second
  useEffect(() => {
    // Set up a 1-second interval timer
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function: runs when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect runs once upon mounting

  // Time parsing and formatting logic
  let rawHours = time.getHours();
  const period = rawHours >= 12 ? 'PM' : 'AM';

  if (!is24Hour) {
    rawHours = rawHours % 12 || 12;
  }

  const hours = String(rawHours).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  // Formatted date string
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center space-y-6">
        {/* Header */}
        <div>
          <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/20 mb-2">
            Practical 10: useEffect & Lifecycle
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight">Live Digital Clock</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time timer synchronized with the system clock.
          </p>
        </div>

        {/* Date Display */}
        <div className="bg-slate-800/50 py-2.5 px-4 rounded-xl border border-slate-800 text-sm font-medium text-slate-300">
          📅 {formattedDate}
        </div>

        {/* Clock Digits Display */}
        <ClockCard
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          period={period}
          is24Hour={is24Hour}
        />

        {/* 12hr / 24hr Toggle */}
        <FormatToggle is24Hour={is24Hour} setIs24Hour={setIs24Hour} />

        {/* Educational Note on Cleanup */}
        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          ℹ️ The <code>useEffect</code> hook starts <code>setInterval()</code> and cleans it up via <code>clearInterval()</code> when unmounting to prevent memory leaks.
        </div>
      </div>
    </div>
  );
}

export default App;
