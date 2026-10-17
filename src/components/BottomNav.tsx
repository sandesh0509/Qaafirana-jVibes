import React from 'react';
import { TabType } from './Header';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'explore' },
    { id: 'expeditions', label: 'Expeditions', icon: 'terrain' },
    { id: 'plan-trip', label: 'Plan Trip', icon: 'auto_awesome' },
    { id: 'community', label: 'Community', icon: 'local_see' },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full z-40 pb-safe bg-[#f7faf6]/95 backdrop-blur-xl border-t border-[#ecefeb] shadow-[0_-4px_20px_-2px_rgba(26,30,28,0.06)]"
      aria-label="Bottom Navigation"
    >
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 transition-colors relative select-none ${
                isActive ? 'text-[#07290c] font-bold' : 'text-[#424840]/80 hover:text-[#07290c]'
              }`}
            >
              {isActive && (
                <span className="absolute top-1 w-7 h-0.5 rounded-full bg-[#07290c] transition-all"></span>
              )}
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="text-[11px] font-medium tracking-wide mt-1">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
