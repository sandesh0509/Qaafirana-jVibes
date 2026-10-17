import React from 'react';

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeatherModal: React.FC<WeatherModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const valleys = [
    {
      name: 'Gulmarg High Altitude',
      temp: '8°C / -1°C',
      status: 'Phase 1 & Phase 2 Gondola Open',
      condition: 'Snow Dusting & Sunshine',
      icon: 'ac_unit',
      highlight: true,
    },
    {
      name: 'Srinagar & Dal Lake',
      temp: '17°C / 6°C',
      status: 'Shikara Cruising Normal',
      condition: 'Pleasant & Mild Breeze',
      icon: 'wb_sunny',
      highlight: false,
    },
    {
      name: 'Pahalgam & Aru Valley',
      temp: '13°C / 3°C',
      status: 'Betaab Valley Trails Open',
      condition: 'Clear Skies & Riverside Melt',
      icon: 'water_drop',
      highlight: false,
    },
    {
      name: 'Gurez Valley & Razdan Pass',
      temp: '10°C / 0°C',
      status: 'Inner-Line Passes Cleared',
      condition: 'Crisp Mountain Wind',
      icon: 'terrain',
      highlight: false,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#181c1a]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom-6 duration-300 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#ecefeb]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#ffdcc2] text-[#8f4e00] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">explore</span>
            </div>
            <div>
              <h3 className="font-headline text-[20px] font-semibold text-[#07290c]">
                Kashmir Live Report
              </h3>
              <p className="text-[11px] text-[#737970]">Ground data verified by local guides</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#ecefeb] flex items-center justify-center text-[#424840] hover:bg-[#e0e3e0] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {valleys.map((valley, index) => (
            <div
              key={index}
              className={`p-3.5 rounded-xl border transition-all ${
                valley.highlight
                  ? 'bg-[#1e3f20]/5 border-[#1e3f20]/30 shadow-sm'
                  : 'bg-[#f1f4f1] border-[#e0e3e0]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#07290c] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">
                    {valley.icon}
                  </span>
                  {valley.name}
                </span>
                <span className="text-xs font-bold text-[#07290c] font-mono">{valley.temp}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs">
                <span className="text-[#424840]">{valley.condition}</span>
                <span className="text-[10px] text-emerald-800 font-bold bg-[#c5edc1] px-2 py-0.5 rounded-full">
                  {valley.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-[#ffdcc2]/50 border border-[#ffdcc2] text-xs text-[#8f4e00] leading-relaxed">
          <p className="font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Curator Advisory:
          </p>
          <p className="mt-0.5 text-[11px]">
            Spring 2025 has arrived with crisp alpine sunshine. Tulip Gardens in Srinagar are in bloom. Gulmarg Gondola Phase 2 is operating smoothly.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#07290c] text-white text-xs font-semibold active:scale-95 transition-all"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  );
};
