import React from 'react';

// ClockCard component presenting time digits in digital display boxes
const ClockCard = ({ hours, minutes, seconds, period, is24Hour }) => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-8">
      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="w-18 sm:w-24 h-20 sm:h-28 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-3xl sm:text-5xl font-mono font-bold text-indigo-400">
            {hours}
          </span>
        </div>
        <span className="text-[10px] uppercase font-semibold text-slate-400 mt-2 tracking-wider">
          Hours
        </span>
      </div>

      <span className="text-3xl sm:text-5xl font-bold text-slate-600 animate-pulse">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="w-18 sm:w-24 h-20 sm:h-28 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-3xl sm:text-5xl font-mono font-bold text-indigo-400">
            {minutes}
          </span>
        </div>
        <span className="text-[10px] uppercase font-semibold text-slate-400 mt-2 tracking-wider">
          Minutes
        </span>
      </div>

      <span className="text-3xl sm:text-5xl font-bold text-slate-600 animate-pulse">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="w-18 sm:w-24 h-20 sm:h-28 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-3xl sm:text-5xl font-mono font-bold text-emerald-400">
            {seconds}
          </span>
        </div>
        <span className="text-[10px] uppercase font-semibold text-slate-400 mt-2 tracking-wider">
          Seconds
        </span>
      </div>

      {/* AM/PM Pill for 12-hour format */}
      {!is24Hour && (
        <div className="flex flex-col items-center ml-1 sm:ml-2">
          <div className="h-20 sm:h-28 flex flex-col justify-center gap-1.5">
            <span
              className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase transition-all ${
                period === 'AM'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-500 border border-slate-700'
              }`}
            >
              AM
            </span>
            <span
              className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase transition-all ${
                period === 'PM'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-500 border border-slate-700'
              }`}
            >
              PM
            </span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-transparent mt-2">.</span>
        </div>
      )}
    </div>
  );
};

export default ClockCard;
