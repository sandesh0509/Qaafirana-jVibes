import React, { useState } from 'react';
import {
  COMMUNITY_REVIEWS,
  SNAPSHOTS,
  FAQS,
  Snapshot,
} from '../data/mockData';

interface CommunityScreenProps {
  onShowToast: (title: string, message: string) => void;
  onOpenWhatsApp: () => void;
}

export const CommunityScreen: React.FC<CommunityScreenProps> = ({
  onShowToast,
  onOpenWhatsApp,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'solo' | 'couples' | 'group'>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');
  const [selectedSnapshot, setSelectedSnapshot] = useState<Snapshot | null>(null);
  const [joinedCommunity, setJoinedCommunity] = useState(false);

  const filteredReviews = COMMUNITY_REVIEWS.filter((review) => {
    if (activeFilter === 'all') return true;
    return review.category === activeFilter;
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  const handleJoinWhatsApp = () => {
    setJoinedCommunity(true);
    onShowToast('Welcome to the Secret Circle', 'Opening WhatsApp invite link...');
    setTimeout(() => {
      onOpenWhatsApp();
    }, 500);
  };

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Visual Hero Banner: The Qaafirana Tribe */}
      <section className="relative w-full overflow-hidden rounded-b-[2rem] bg-[#e6e9e5] px-4 sm:px-6 pt-6 pb-8 shadow-[0_12px_32px_-4px_rgba(30,63,32,0.08)]">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#ffdcc2] px-3 py-1 shadow-xs">
            <span
              className="material-symbols-outlined text-[#8f4e00] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups_3
            </span>
            <span className="text-[10px] font-bold text-[#8f4e00] uppercase tracking-wider">
              Soulful Collective
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="font-headline text-3xl sm:text-4xl text-[#07290c] font-semibold tracking-tight">
              The Qaafirana Tribe
            </h1>
            <p className="text-xs sm:text-sm text-[#424840] leading-relaxed">
              Over 2,400+ soulful wanderers have explored Kashmir with us. Real smiles, real stories, untamed valleys.
            </p>
          </div>

          {/* Trust Matrix Pill Bar */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 shadow-xs">
              <span
                className="material-symbols-outlined text-[18px] text-[#fea049]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-sm font-bold text-[#07290c]">4.9 / 5.0</span>
              <span className="text-xs text-[#737970]">verified</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#07290c]/10 px-3 py-1.5">
              <span
                className="material-symbols-outlined text-[16px] text-[#07290c]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="text-xs font-semibold text-[#07290c]">
                340+ Himalayan Trips
              </span>
            </div>
          </div>
        </div>

        {/* Ambient Mountain Contour SVG Background */}
        <div className="pointer-events-none absolute -right-8 -bottom-6 w-56 h-56 opacity-15 text-[#07290c]">
          <svg fill="currentColor" viewBox="0 0 200 200">
            <path d="M20,170 L80,70 L115,115 L145,55 L190,170 Z"></path>
            <circle cx="155" cy="40" fill="currentColor" opacity="0.8" r="14"></circle>
          </svg>
        </div>
      </section>

      {/* Filterable Tales Tabs */}
      <section className="px-4 sm:px-6 pt-6">
        <div className="flex items-center justify-between pb-3">
          <span className="text-[11px] font-bold uppercase text-[#737970] tracking-wider">
            Filter Tales
          </span>
          <span className="text-xs text-[#8f4e00] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fea049] animate-ping"></span>
            Authentic Reviews
          </span>
        </div>

        {/* Filter Pills Horizontal Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6 no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap active:scale-95 ${
              activeFilter === 'all'
                ? 'bg-[#07290c] text-white shadow-sm'
                : 'bg-[#e6e9e5] text-[#181c1a] hover:bg-[#e0e3e0]'
            }`}
          >
            <span>All Reviews</span>
            <span className="text-[10px] opacity-75 font-normal">(340+)</span>
          </button>

          <button
            onClick={() => setActiveFilter('solo')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap active:scale-95 ${
              activeFilter === 'solo'
                ? 'bg-[#07290c] text-white shadow-sm'
                : 'bg-[#e6e9e5] text-[#181c1a] hover:bg-[#e0e3e0]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#8f4e00]">person</span>
            <span>Solo Women</span>
          </button>

          <button
            onClick={() => setActiveFilter('couples')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap active:scale-95 ${
              activeFilter === 'couples'
                ? 'bg-[#07290c] text-white shadow-sm'
                : 'bg-[#e6e9e5] text-[#181c1a] hover:bg-[#e0e3e0]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#451000]">favorite</span>
            <span>Couples</span>
          </button>

          <button
            onClick={() => setActiveFilter('group')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap active:scale-95 ${
              activeFilter === 'group'
                ? 'bg-[#07290c] text-white shadow-sm'
                : 'bg-[#e6e9e5] text-[#181c1a] hover:bg-[#e0e3e0]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px] text-[#07290c]">diversity_3</span>
            <span>Group Batches</span>
          </button>
        </div>
      </section>

      {/* Real Traveler Stories Section */}
      <section className="px-4 sm:px-6 pt-4 flex flex-col gap-4">
        {filteredReviews.length === 0 ? (
          <div className="p-8 text-center text-[#737970] bg-white rounded-2xl border border-[#ecefeb]">
            <p className="text-sm">No reviews found for this filter.</p>
          </div>
        ) : (
          filteredReviews.map((story) => (
            <article
              key={story.id}
              className="relative flex flex-col rounded-2xl bg-white p-4 sm:p-5 shadow-xs border border-[#ecefeb] transition-transform duration-300"
            >
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#e0e3e0]"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-[#181c1a]">
                      {story.name}
                    </span>
                    <span className="text-[11px] text-[#737970]">
                      {story.role} • {story.city}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#f1f4f1] px-2 py-1 rounded-full">
                  <span
                    className="material-symbols-outlined text-[14px] text-[#fea049]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-xs font-bold text-[#181c1a] font-mono">
                    {story.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Photo preview if present */}
              {story.photo && (
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3">
                  <img
                    src={story.photo}
                    alt={story.locationTag || story.title}
                    className="w-full h-full object-cover"
                  />
                  {story.locationTag && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-[#07290c]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-semibold">
                      <span className="material-symbols-outlined text-[13px]">location_on</span>
                      <span>{story.locationTag}</span>
                    </div>
                  )}
                </div>
              )}

              <h2 className="font-headline text-lg sm:text-xl text-[#07290c] font-semibold mb-1.5 leading-snug">
                {story.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#424840] leading-relaxed">
                {story.quote}
              </p>

              <div className="mt-3.5 pt-3 flex items-center justify-between border-t border-[#ecefeb]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#1e3f20]">
                    shield
                  </span>
                  <span className="text-[10px] font-bold text-[#1e3f20]">
                    {story.verifiedBadge}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#737970] tracking-wider">
                  {story.seasonTag}
                </span>
              </div>
            </article>
          ))
        )}
      </section>

      {/* Community Photo & Video Moments (Tribe Snapshots) */}
      <section className="px-4 sm:px-6 pt-8">
        <div className="flex items-end justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
              Unfiltered Moments
            </span>
            <h3 className="font-headline text-2xl text-[#07290c] font-semibold">
              Tribe Snapshots
            </h3>
          </div>
          <span className="text-xs text-[#737970]">Real Travelers</span>
        </div>

        {/* Visual Grid of Real Kashmir Moments */}
        <div className="grid grid-cols-2 gap-3">
          {SNAPSHOTS.map((snap) => (
            <div
              key={snap.id}
              onClick={() => setSelectedSnapshot(snap)}
              className={`relative flex flex-col rounded-2xl overflow-hidden bg-[#ecefeb] shadow-xs cursor-pointer group ${
                snap.spanCol ? 'col-span-2 h-52' : 'h-44'
              }`}
            >
              <img
                src={snap.image}
                alt={snap.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07290c]/85 via-transparent to-transparent"></div>

              {snap.badge && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#f7faf6]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold shadow-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#8f4e00]">
                    music_note
                  </span>
                  <span className="text-[10px] text-[#07290c]">{snap.badge}</span>
                </div>
              )}

              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[10px] font-bold uppercase text-[#ffdcc2] tracking-wider">
                  {snap.location}
                </span>
                <p className="text-xs sm:text-sm text-white line-clamp-1 font-semibold mt-0.5">
                  {snap.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Kashmir Travel Guide (Interactive Accordions) */}
      <section className="px-4 sm:px-6 pt-8">
        <div className="flex flex-col gap-1 mb-4">
          <div className="inline-flex items-center gap-1 text-[#8f4e00]">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Traveler Handbook
            </span>
          </div>
          <h3 className="font-headline text-2xl text-[#07290c] font-semibold">
            Essential Kashmir Guide
          </h3>
          <p className="text-xs text-[#424840]">
            Everything you need to know before stepping into the valley.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white p-4 shadow-xs border border-[#ecefeb] transition-all"
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-3 focus:outline-none select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#f1f4f1] text-[#07290c] flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">
                        {faq.icon}
                      </span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#181c1a]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[20px] text-[#737970] transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isExpanded && (
                  <div className="pt-3 mt-3 border-t border-[#ecefeb] text-[#424840] text-xs leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Sticky Bottom Community Invite Action Card */}
      <section className="px-4 sm:px-6 pt-8 pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#07290c] p-5 sm:p-6 text-white shadow-[0_12px_32px_-4px_rgba(30,63,32,0.25)]">
          {/* Decorative Backdrop Circles */}
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-[#8f4e00]/20 pointer-events-none"></div>
          <div className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#fea049] text-[#6e3a00] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffdcc2]">
                The Secret Circle
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="font-headline text-xl sm:text-2xl text-white font-semibold">
                Join Our WhatsApp Community
              </h4>
              <p className="text-xs text-[#86ab83] leading-relaxed">
                Get first-access to secret seasonal batches, live road conditions, discounts, and high-altitude trek updates.
              </p>
            </div>

            <button
              onClick={handleJoinWhatsApp}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#fea049] hover:bg-[#e58c36] py-3.5 px-5 text-[#6e3a00] text-xs sm:text-sm font-bold active:scale-95 transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>{joinedCommunity ? '✓ Joined WhatsApp Tribe!' : 'Join WhatsApp Tribe (Free)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Snapshot Lightbox Modal */}
      {selectedSnapshot && (
        <div
          onClick={() => setSelectedSnapshot(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl overflow-hidden bg-[#07290c] text-white shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedSnapshot(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <img
              src={selectedSnapshot.image}
              alt={selectedSnapshot.caption}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 flex flex-col">
              <span className="text-[10px] font-bold uppercase text-[#ffdcc2] tracking-wider">
                {selectedSnapshot.location}
              </span>
              <p className="text-sm font-bold text-white mt-0.5">{selectedSnapshot.caption}</p>
              <span className="text-xs text-[#86ab83] mt-1">Shared by Qaafirana Tribe Wanderer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
