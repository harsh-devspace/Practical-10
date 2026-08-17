import React from 'react';

// FormatToggle component to switch between 12-hour and 24-hour clocks
const FormatToggle = ({ is24Hour, setIs24Hour }) => {
  return (
    <div className="flex items-center justify-center space-x-3 text-xs bg-slate-800/80 p-2 rounded-2xl border border-slate-700 w-fit mx-auto">
      <span className={`font-semibold ${!is24Hour ? 'text-indigo-400' : 'text-slate-400'}`}>
        12-Hour
      </span>
      <button
        onClick={() => setIs24Hour(!is24Hour)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          is24Hour ? 'bg-indigo-600' : 'bg-slate-700'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            is24Hour ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`font-semibold ${is24Hour ? 'text-indigo-400' : 'text-slate-400'}`}>
        24-Hour
      </span>
    </div>
  );
};

export default FormatToggle;
