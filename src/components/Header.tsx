import React from 'react';
import { ASSETS } from '../data/mockData';

export type TabType = 'home' | 'expeditions' | 'plan-trip' | 'community';

interface HeaderProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenWeather: () => void;
  onOpenProfile: () => void;
  deviceMode: 'mobile' | 'responsive';
  onToggleDeviceMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenWeather,
  onOpenProfile,
  deviceMode,
  onToggleDeviceMode,
}) => {
  const getTabLabel = () => {
    switch (activeTab) {
      case 'home':
        return 'Home';
      case 'expeditions':
        return 'Expeditions';
      case 'plan-trip':
        return 'Plan Trip';
      case 'community':
        return 'Community';
      default:
        return 'Home';
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#f7faf6]/90 backdrop-blur-xl pt-safe border-b border-[#ecefeb] shadow-[0_1px_12px_rgba(30,63,32,0.04)]">
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-2">
        {/* Logo and Brand */}
        <div
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2.5 min-w-0 cursor-pointer select-none group"
        >
          <img
            alt="Qaafirana Vibes Logo"
            className="h-8 w-auto object-contain flex-shrink-0 transition-transform group-hover:scale-105"
            src={ASSETS.logo}
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-headline text-[21px] font-semibold text-[#07290c] tracking-tight truncate leading-snug">
                Qaafirana Vibes
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-semibold text-[#8f4e00] uppercase tracking-wider text-[10px]">
                Soulful Wandering
              </span>
              <span className="text-[#737970]/50">•</span>
              <span className="text-[#424840] font-medium truncate text-[11px]">
                {getTabLabel()}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links (Visible on larger screens) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#ecefeb]/70 p-1 rounded-full text-xs font-semibold text-[#424840]">
          <button
            onClick={() => onSelectTab('home')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'home'
                ? 'bg-white text-[#07290c] shadow-sm font-bold'
                : 'hover:text-[#07290c]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onSelectTab('expeditions')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'expeditions'
                ? 'bg-white text-[#07290c] shadow-sm font-bold'
                : 'hover:text-[#07290c]'
            }`}
          >
            Expeditions
          </button>
          <button
            onClick={() => onSelectTab('plan-trip')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'plan-trip'
                ? 'bg-white text-[#07290c] shadow-sm font-bold'
                : 'hover:text-[#07290c]'
            }`}
          >
            Plan Trip
          </button>
          <button
            onClick={() => onSelectTab('community')}
            className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
              activeTab === 'community'
                ? 'bg-white text-[#07290c] shadow-sm font-bold'
                : 'hover:text-[#07290c]'
            }`}
          >
            Community
          </button>
        </nav>

        {/* Right Action Icons & Badges */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Kashmir Live Badge */}
          <button
            onClick={onOpenWeather}
            title="View Live Kashmir Weather & Trail Report"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffdcc2]/70 text-[#8f4e00] hover:bg-[#ffdcc2] active:scale-95 transition-all text-xs font-bold shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8f4e00] animate-pulse"></span>
            <span className="material-symbols-outlined text-[14px]">explore</span>
            <span className="tracking-wide">Kashmir Live</span>
          </button>

          {/* Device Mockup Toggle for previewing exact mobile screen */}
          <button
            onClick={onToggleDeviceMode}
            title={
              deviceMode === 'mobile'
                ? 'Switch to Fluid Desktop Layout'
                : 'Switch to Authentic Mobile Screen Layout'
            }
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[#ecefeb] text-[#424840] hover:bg-[#e0e3e0] active:scale-95 transition-all text-xs"
          >
            <span className="material-symbols-outlined text-[18px]">
              {deviceMode === 'mobile' ? 'stay_current_portrait' : 'desktop_windows'}
            </span>
          </button>

          {/* Traveler Profile */}
          <button
            onClick={onOpenProfile}
            aria-label="Traveler Profile & Saved Journeys"
            className="relative flex items-center justify-center p-1 rounded-full active:scale-95 transition-transform min-w-[44px] min-h-[44px] hover:ring-2 hover:ring-[#1e3f20]/20"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
              src={ASSETS.profile}
            />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#fea049] ring-2 ring-[#f7faf6]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
