import React, { useState } from 'react';
import {
  ASSETS,
  DEPARTURE_BATCHES,
  ITINERARY_DAYS,
  INCLUSIONS,
  EXCLUSIONS,
  Batch,
} from '../data/mockData';

interface ExpeditionsScreenProps {
  onOpenInquiry: (batchTitle: string) => void;
  onOpenReservation: (batch: Batch) => void;
  onShowToast: (title: string, message: string) => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export const ExpeditionsScreen: React.FC<ExpeditionsScreenProps> = ({
  onOpenInquiry,
  onOpenReservation,
  onShowToast,
  isSaved,
  onToggleSave,
}) => {
  const [selectedBatch, setSelectedBatch] = useState<Batch>(DEPARTURE_BATCHES[0]);
  const [expandedDays, setExpandedDays] = useState<number[]>([1]); // Day 1 expanded by default
  const [activeInclusionsTab, setActiveInclusionsTab] = useState<'included' | 'excluded'>('included');

  const toggleDay = (dayNum: number) => {
    if (expandedDays.includes(dayNum)) {
      setExpandedDays(expandedDays.filter((d) => d !== dayNum));
    } else {
      setExpandedDays([...expandedDays, dayNum]);
    }
  };

  const areAllExpanded = expandedDays.length === ITINERARY_DAYS.length;

  const handleToggleAllDays = () => {
    if (areAllExpanded) {
      setExpandedDays([1]); // keep day 1 open
    } else {
      setExpandedDays(ITINERARY_DAYS.map((d) => d.day));
    }
  };

  const handleSelectBatch = (batch: Batch) => {
    setSelectedBatch(batch);
    onShowToast('Batch Selected', `Updated expedition dates to ${batch.date}`);
  };

  return (
    <div className="flex flex-col w-full pb-32">
      {/* Immersive Expedition Media & Cover Card */}
      <div className="px-4 sm:px-6 pt-2">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-[#ecefeb]">
          <div
            className="w-full h-80 sm:h-96 bg-cover bg-center relative"
            style={{ backgroundImage: `url('${ASSETS.expeditionCover}')` }}
          >
            {/* Dual atmospheric gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07290c]/70 via-transparent to-[#07290c]/95 pointer-events-none"></div>

            {/* Top bar pills */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fea049] animate-pulse"></span>
                <span className="text-[11px] font-bold text-[#181c1a] uppercase tracking-wider">
                  Signature Voyage
                </span>
              </div>
              <button
                onClick={onToggleSave}
                aria-label="Save Expedition"
                className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center active:scale-90 transition-all shadow-sm ${
                  isSaved
                    ? 'bg-[#fea049] text-white'
                    : 'bg-white/85 text-[#181c1a] hover:bg-white'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[19px]"
                  style={isSaved ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {isSaved ? 'bookmark' : 'bookmark_border'}
                </span>
              </button>
            </div>

            {/* Bottom details on image */}
            <div className="absolute bottom-4 inset-x-4 z-10 flex flex-col gap-1 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#fea049] text-[#6e3a00] text-[11px] font-bold uppercase tracking-wide">
                  6D • 5N
                </span>
                <span className="text-white/90 text-xs flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[15px] text-[#ffdcc2]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  4.9 (148 souls)
                </span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl text-white font-semibold leading-tight">
                Soul of Kashmir
              </h1>
              <p className="text-xs sm:text-sm text-white/90 line-clamp-1">
                From mystic houseboats to alpine meadow dreams
              </p>
            </div>
          </div>

          {/* Feature Metadata Badges */}
          <div className="p-4 bg-[#f1f4f1] flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#07290c] text-xs font-semibold shadow-xs">
              <span className="material-symbols-outlined text-[15px] text-[#8f4e00]">group</span>
              Group &amp; Couple Friendly
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#07290c] text-xs font-semibold shadow-xs">
              <span className="material-symbols-outlined text-[15px] text-[#8f4e00]">hiking</span>
              Moderate Pace
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#07290c] text-xs font-semibold shadow-xs">
              <span className="material-symbols-outlined text-[15px] text-[#8f4e00]">
                hotel_class
              </span>
              All-Inclusive Stays &amp; 4x4
            </span>
          </div>
        </div>
      </div>

      {/* Batches Selection Container */}
      <section className="mt-6 px-4 sm:px-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8f4e00] text-[20px]">
              calendar_month
            </span>
            <h2 className="font-headline text-xl text-[#07290c] font-semibold">
              Upcoming Departure Batches
            </h2>
          </div>
          <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
            Spring/Summer '25
          </span>
        </div>

        {/* Interactive Batch Cards */}
        <div className="flex flex-col gap-2.5">
          {DEPARTURE_BATCHES.map((batch) => {
            const isSelected = selectedBatch.id === batch.id;
            return (
              <div
                key={batch.id}
                onClick={() => handleSelectBatch(batch)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                    : 'bg-[#f1f4f1] border-transparent hover:bg-white hover:border-[#ecefeb]'
                }`}
                role="button"
                tabIndex={0}
              >
                <div className="flex items-center justify-between min-w-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#1e3f20] text-white'
                          : 'bg-[#ecefeb] text-[#737970]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {isSelected ? 'check' : 'circle'}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`font-headline text-[17px] font-semibold truncate ${
                          isSelected ? 'text-[#07290c]' : 'text-[#181c1a]'
                        }`}
                      >
                        {batch.date}
                      </span>
                      <span className="text-xs text-[#424840] truncate">{batch.subtitle}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end flex-shrink-0 pl-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide flex items-center gap-1 ${
                        batch.statusType === 'limited'
                          ? 'bg-[#ffdbcf] text-[#451000]'
                          : 'bg-[#c5edc1] text-[#012106]'
                      }`}
                    >
                      {batch.statusType === 'limited' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#451000] animate-ping"></span>
                      )}
                      {batch.status}
                    </span>
                    <span className="text-sm font-bold text-[#07290c] mt-1 font-mono">
                      {batch.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Day-by-Day Trekking Trail Itinerary */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
              Curated Daily Trail
            </span>
            <h2 className="font-headline text-2xl text-[#07290c] font-semibold">
              The 6-Day Odyssey
            </h2>
          </div>
          <button
            onClick={handleToggleAllDays}
            className="text-xs font-semibold text-[#8f4e00] hover:text-[#07290c] transition-colors flex items-center gap-1"
          >
            <span>{areAllExpanded ? 'Collapse' : 'Expand All'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {areAllExpanded ? 'unfold_less' : 'unfold_more'}
            </span>
          </button>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative pl-6 flex flex-col gap-3">
          {/* Vertical Trek Path Line */}
          <div className="absolute left-2.5 top-3 bottom-6 w-0.5 bg-gradient-to-b from-[#fea049] via-[#1e3f20] to-[#c2c8be]"></div>

          {ITINERARY_DAYS.map((day) => {
            const isExpanded = expandedDays.includes(day.day);
            return (
              <div key={day.day} className="relative group">
                {/* Trail Marker Dot */}
                <div
                  className={`absolute -left-6 top-3 w-5 h-5 rounded-full flex items-center justify-center shadow-sm z-10 ring-4 ring-[#f7faf6] transition-colors ${
                    isExpanded
                      ? 'bg-[#fea049] text-[#6e3a00]'
                      : 'bg-[#1e3f20] text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[12px]">{day.icon}</span>
                </div>

                {/* Day Card */}
                <div
                  className={`rounded-2xl p-4 transition-all duration-300 border ${
                    isExpanded
                      ? 'bg-white border-[#ecefeb] shadow-sm'
                      : 'bg-[#f1f4f1] border-transparent hover:bg-white'
                  }`}
                >
                  <div
                    onClick={() => toggleDay(day.day)}
                    className="flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex flex-col pr-2">
                      <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-wider">
                        {day.tag}
                      </span>
                      <h3 className="font-headline text-[17px] sm:text-[18px] text-[#07290c] font-semibold mt-0.5">
                        {day.title}
                      </h3>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[#07290c] text-[20px] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-[#ecefeb] flex flex-col gap-3 animate-in fade-in duration-200">
                      {day.image && (
                        <div
                          className="w-full h-44 rounded-xl bg-cover bg-center shadow-xs"
                          style={{ backgroundImage: `url('${day.image}')` }}
                        ></div>
                      )}
                      <p className="text-xs sm:text-sm text-[#424840] leading-relaxed">
                        {day.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {day.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#181c1a] text-xs font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Included / Excluded Tabs */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#f1f4f1] border border-[#ecefeb]">
          {/* Toggle Tabs Bar */}
          <div className="flex rounded-full bg-[#ecefeb] p-1 gap-1 mb-4">
            <button
              onClick={() => setActiveInclusionsTab('included')}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeInclusionsTab === 'included'
                  ? 'bg-white text-[#07290c] shadow-sm'
                  : 'text-[#424840] hover:text-[#07290c]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-[#07290c]">
                check_circle
              </span>
              <span>What's Included</span>
            </button>
            <button
              onClick={() => setActiveInclusionsTab('excluded')}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeInclusionsTab === 'excluded'
                  ? 'bg-white text-[#07290c] shadow-sm'
                  : 'text-[#424840] hover:text-[#07290c]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">cancel</span>
              <span>What's Not Included</span>
            </button>
          </div>

          {/* Included Content */}
          {activeInclusionsTab === 'included' ? (
            <div className="flex flex-col gap-2.5">
              {INCLUSIONS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#ecefeb] shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#07290c] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#181c1a]">{item.title}</span>
                    <span className="text-xs text-[#424840] mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              {EXCLUSIONS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#ecefeb] shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#737970] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#181c1a]">{item.title}</span>
                    <span className="text-xs text-[#424840] mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Storyteller Testimonial Micro-Card */}
      <section className="mt-6 px-4 sm:px-6">
        <div className="p-4 rounded-2xl bg-[#ecefeb] text-[#181c1a] flex items-center gap-3.5 shadow-xs">
          <div className="w-13 h-13 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white">
            <img
              src={ASSETS.wandererPriya}
              alt="Priya Nair"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 text-[#8f4e00]">
              <span className="material-symbols-outlined text-[14px]">format_quote</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Wanderer Note
              </span>
            </div>
            <p className="text-xs font-medium text-[#181c1a] italic truncate mt-0.5">
              "Didn't just visit Kashmir, I lived its warmth with Qaafirana."
            </p>
            <span className="text-[11px] text-[#737970] mt-0.5">
              — Priya Nair, April Batch Alumni
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Pricing & Booking Card (Elevated Level 3) */}
      <div className="fixed bottom-16 sm:bottom-18 left-0 right-0 z-30 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-md mx-auto rounded-2xl bg-white p-4 shadow-[0_20px_48px_-8px_rgba(20,40,22,0.22)] border border-[#ecefeb] pointer-events-auto flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f4e00]">
                  Per Traveler
                </span>
                <span className="px-1.5 py-0.2 rounded bg-[#ffdcc2] text-[#8f4e00] text-[9px] font-bold">
                  ALL INCLUSIVE
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="font-headline text-2xl text-[#07290c] font-bold font-mono">
                  {selectedBatch.price}
                </span>
                <span className="text-xs text-[#737970] line-through font-mono">₹22,999</span>
              </div>
              <span className="text-[11px] text-[#424840]">
                Selected: {selectedBatch.date}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-bold text-[#451000] flex items-center justify-end gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#451000] animate-ping"></span>
                Instant Seat Lock
              </span>
              <span className="text-[10px] text-[#737970] block mt-0.5">
                Pay balance 10 days before
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => onOpenInquiry(`Soul of Kashmir (${selectedBatch.date})`)}
              className="col-span-2 py-3 px-2 rounded-xl bg-[#ecefeb] hover:bg-[#e0e3e0] text-[#07290c] text-xs font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[17px]">help_outline</span>
              <span>Inquire</span>
            </button>
            <button
              onClick={() => onOpenReservation(selectedBatch)}
              className="col-span-3 py-3 px-4 rounded-xl bg-[#07290c] hover:bg-[#1e3f20] text-white text-xs sm:text-sm font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Reserve with ₹3,000</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="flex items-center justify-between text-[#737970] text-[10px] pt-0.5 border-t border-[#ecefeb]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-[#07290c]">
                verified_user
              </span>
              100% Refundable Deposit*
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px] text-[#07290c]">
                diversity_3
              </span>
              Solo Traveler Friendly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
