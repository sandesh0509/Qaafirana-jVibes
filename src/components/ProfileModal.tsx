import React from 'react';
import { ASSETS } from '../data/mockData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedExpeditionsCount: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  savedExpeditionsCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#181c1a]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom-6 duration-300 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#ecefeb]">
          <h3 className="font-headline text-[20px] font-semibold text-[#07290c]">
            Traveler Dossier
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-[#ecefeb] flex items-center justify-center text-[#424840] hover:bg-[#e0e3e0] active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#f1f4f1]">
          <div className="relative">
            <img
              src={ASSETS.profile}
              alt="Traveler avatar"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline text-base font-semibold text-[#07290c]">
                Zoya Akhtar
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#c5edc1] text-[#012106] text-[10px] font-bold">
                Tribe Member
              </span>
            </div>
            <span className="text-xs text-[#737970] mt-0.5">sandeshdubey2001@gmail.com</span>
            <span className="text-[11px] text-[#8f4e00] font-semibold mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">military_tech</span>
              Himalayan Wanderer Pass Active
            </span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-xl bg-[#ecefeb]/70 flex flex-col items-center">
            <span className="font-headline text-lg font-bold text-[#07290c]">
              {savedExpeditionsCount}
            </span>
            <span className="text-[10px] text-[#737970] uppercase font-bold tracking-wider mt-0.5">
              Saved Trails
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#ecefeb]/70 flex flex-col items-center">
            <span className="font-headline text-lg font-bold text-[#07290c]">Spring '25</span>
            <span className="text-[10px] text-[#737970] uppercase font-bold tracking-wider mt-0.5">
              Departure
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#ecefeb]/70 flex flex-col items-center">
            <span className="font-headline text-lg font-bold text-[#8f4e00]">4.9</span>
            <span className="text-[10px] text-[#737970] uppercase font-bold tracking-wider mt-0.5">
              Tribe Karma
            </span>
          </div>
        </div>

        {/* Saved Expeditions & Actions */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-[#181c1a] uppercase tracking-wider">
            Your Kashmir Wishlist
          </span>
          <div className="p-3 rounded-xl border border-[#ecefeb] hover:border-[#1e3f20]/30 transition-all flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={ASSETS.expeditionCover}
                alt="Soul of Kashmir"
                className="w-11 h-11 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#07290c]">Soul of Kashmir Circuit</span>
                <span className="text-[11px] text-[#737970]">6 Days • Dal Lake & Gulmarg</span>
              </div>
            </div>
            <span className="text-xs font-bold text-[#8f4e00]">₹18,499</span>
          </div>
        </div>

        {/* Dietary & Travel Preferences */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-[#181c1a] uppercase tracking-wider">
            Curator Preferences
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-[#f1f4f1] text-[#424840] text-xs font-medium">
              🌱 Vegetarian Wazwan
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#f1f4f1] text-[#424840] text-xs font-medium">
              🏔️ High-Altitude Window Seat
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#f1f4f1] text-[#424840] text-xs font-medium">
              ☕ Kashmiri Kahwa Lover
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-2 w-full py-2.5 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-[#181c1a] text-xs font-semibold active:scale-95 transition-all"
        >
          Close Dossier
        </button>
      </div>
    </div>
  );
};
