import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';
import { TabType } from '../components/Header';

interface HomeScreenProps {
  onNavigateTab: (tab: TabType) => void;
  onSelectRoute: (routeName: string) => void;
  onOpenWeather: () => void;
  onOpenWhatsApp: () => void;
  onShowToast: (title: string, message: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onSelectRoute,
  onOpenWeather,
  onOpenWhatsApp,
  onShowToast,
}) => {
  const [selectedVibe, setSelectedVibe] = useState('group');
  const [selectedMonth, setSelectedMonth] = useState('apr-may');
  const [isSearching, setIsSearching] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);

  const handleSearchJourneys = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      onShowToast(
        'Sacred Routes Found',
        `Showing curated ${selectedVibe === 'group' ? 'Group' : selectedVibe === 'solo' ? 'Solo' : 'Couple'} batches for ${selectedMonth === 'apr-may' ? 'April - May 2025' : selectedMonth.toUpperCase()}`
      );
      onNavigateTab('expeditions');
    }, 600);
  };

  const handleCallbackClick = () => {
    setCallbackRequested(true);
    onShowToast(
      'Callback Requested',
      'Our Himalayan travel architect will call you within 2 hours.'
    );
  };

  return (
    <div className="flex flex-col w-full pb-8">
      {/* Top Atmospheric Storyteller Hero */}
      <section className="px-4 sm:px-6 pt-2 pb-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-[#07290c] text-white">
          <div
            className="bg-cover bg-center w-full min-h-[380px] sm:min-h-[420px] relative flex flex-col justify-between p-5 sm:p-6"
            style={{
              backgroundImage: `url('${ASSETS.heroHome}')`,
            }}
          >
            {/* Gradients for Contrast & Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07290c]/95 via-[#07290c]/50 to-[#07290c]/25 pointer-events-none"></div>

            {/* Floating Top Badges */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fea049] animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#07290c]">
                  Spring &amp; Summer 2025
                </span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1e3f20]/80 backdrop-blur-md text-[#86ab83] text-xs font-semibold">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>Govt. Verified</span>
              </div>
            </div>

            {/* Hero Headline & Poetic Description */}
            <div className="relative z-10 mt-20 mb-2">
              <p className="text-[11px] font-bold text-[#ffdcc2] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">wb_sunny</span>
                Soulful Himalayan Journeys
              </p>
              <h1 className="font-headline text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Wander With A Soul Unbound
              </h1>
              <p className="text-xs sm:text-sm text-[#eef1ee]/90 mt-2 line-clamp-2 max-w-md leading-relaxed">
                Curated group wanderings, mindful solo retreats, and intimate couple hideaways tucked into the sacred pines of Kashmir.
              </p>
            </div>
          </div>

          {/* Quick Interactive Vibe Searcher */}
          <div className="bg-[#f1f4f1] text-[#181c1a] p-4 sm:p-5">
            <div className="text-xs uppercase tracking-wider font-bold text-[#8f4e00] mb-2.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">filter_alt</span>
              <span>Find Your Sacred Route</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
              {/* Travel Vibe Selector */}
              <div className="relative bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-[#e0e3e0] flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#424840] uppercase tracking-wider">
                  Travel Vibe
                </span>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-semibold text-[#07290c] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">
                      {selectedVibe === 'group'
                        ? 'groups'
                        : selectedVibe === 'solo'
                        ? 'person_pin_circle'
                        : 'favorite'}
                    </span>
                    {selectedVibe === 'group'
                      ? 'Group Tribe'
                      : selectedVibe === 'solo'
                      ? 'Solo Soul Searcher'
                      : 'Couple Escape'}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-[#737970]">
                    unfold_more
                  </span>
                </div>
                <select
                  aria-label="Select Travel Vibe"
                  value={selectedVibe}
                  onChange={(e) => setSelectedVibe(e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                >
                  <option value="group">Group Tribe (Ages 21-35)</option>
                  <option value="solo">Solo Soul Searcher</option>
                  <option value="couple">Couple Escape</option>
                </select>
              </div>

              {/* Month Selector */}
              <div className="relative bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-[#e0e3e0] flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#424840] uppercase tracking-wider">
                  Departure Month
                </span>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-semibold text-[#07290c] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">
                      calendar_today
                    </span>
                    {selectedMonth === 'apr-may'
                      ? 'Apr - May 2025'
                      : selectedMonth === 'jun-jul'
                      ? 'Jun - Jul 2025'
                      : selectedMonth === 'aug-sep'
                      ? 'Aug - Sep 2025'
                      : 'Autumn (Oct 2025)'}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-[#737970]">
                    unfold_more
                  </span>
                </div>
                <select
                  aria-label="Select Departure Month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                >
                  <option value="apr-may">Apr - May 2025</option>
                  <option value="jun-jul">Jun - Jul 2025</option>
                  <option value="aug-sep">Aug - Sep 2025</option>
                  <option value="autumn">Autumn (Oct 2025)</option>
                </select>
              </div>
            </div>

            {/* Search Action Button */}
            <button
              onClick={handleSearchJourneys}
              disabled={isSearching}
              className="w-full py-3.5 px-4 bg-[#07290c] hover:bg-[#1e3f20] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all"
            >
              {isSearching ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  <span>Finding Sacred Routes...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  <span>Explore Available Batches</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Curated Travel Formats */}
      <section className="mt-4 px-4 sm:px-6">
        <div className="flex items-end justify-between mb-3">
          <div>
            <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
              Wander Styles
            </span>
            <h2 className="font-headline text-2xl text-[#07290c] font-semibold">
              How Do You Seek Kashmir?
            </h2>
          </div>
          <span className="text-xs text-[#737970]">3 Archetypes</span>
        </div>

        {/* Travel Formats Horizontal Scroller */}
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 sm:-mx-6 px-4 sm:px-6 scroll-smooth no-scrollbar">
          {/* Card 1: Group Expeditions */}
          <div
            onClick={() => onNavigateTab('expeditions')}
            className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#ecefeb] hover:border-[#1e3f20]/30 cursor-pointer flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ffdcc2]/70 flex items-center justify-center text-[#8f4e00] mb-3 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">diversity_3</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8f4e00]"></span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#8f4e00]">
                  Cohort of 14 Max
                </span>
              </div>
              <h3 className="font-headline text-[18px] text-[#181c1a] font-semibold">
                Group Expeditions
              </h3>
              <p className="text-xs text-[#424840] mt-1.5 leading-relaxed">
                Shared bonfire acoustic songs, laughter with kindred strangers, and curated mountain icebreakers in alpine meadows.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#ecefeb] flex items-center justify-between">
              <span className="text-[11px] uppercase text-[#07290c] font-bold tracking-wider">
                Curated Tribe
              </span>
              <span className="material-symbols-outlined text-[18px] text-[#07290c] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 2: Solo Soul Search */}
          <div
            onClick={() => onNavigateTab('expeditions')}
            className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#ecefeb] hover:border-[#1e3f20]/30 cursor-pointer flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#c5edc1]/70 flex items-center justify-center text-[#07290c] mb-3 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">person_pin_circle</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e3f20]"></span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#1e3f20]">
                  Safe &amp; Private
                </span>
              </div>
              <h3 className="font-headline text-[18px] text-[#181c1a] font-semibold">
                Solo Soul Search
              </h3>
              <p className="text-xs text-[#424840] mt-1.5 leading-relaxed">
                Quiet shikara dawns, private rustic wooden chalets, local storyteller accompaniment, and vetted photographer support.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#ecefeb] flex items-center justify-between">
              <span className="text-[11px] uppercase text-[#07290c] font-bold tracking-wider">
                Introspective
              </span>
              <span className="material-symbols-outlined text-[18px] text-[#07290c] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Card 3: Couple Getaways */}
          <div
            onClick={() => onNavigateTab('plan-trip')}
            className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#ecefeb] hover:border-[#1e3f20]/30 cursor-pointer flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#ffdbcf]/70 flex items-center justify-center text-[#451000] mb-3 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">favorite</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#451000]"></span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#451000]">
                  Intimate Luxury
                </span>
              </div>
              <h3 className="font-headline text-[18px] text-[#181c1a] font-semibold">
                Couple Retreats
              </h3>
              <p className="text-xs text-[#424840] mt-1.5 leading-relaxed">
                Private candle-lit dinners nestled in walnut orchards, handcrafted saffron Kahwa ceremonies, and secluded pine log cabins.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#ecefeb] flex items-center justify-between">
              <span className="text-[11px] uppercase text-[#07290c] font-bold tracking-wider">
                Unrushed Romance
              </span>
              <span className="material-symbols-outlined text-[18px] text-[#07290c] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kashmir Highlights / Expeditions */}
      <section className="mt-6 px-4 sm:px-6">
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
              Handcrafted Itineraries
            </span>
            <h2 className="font-headline text-2xl text-[#07290c] font-semibold">
              Featured Kashmir Routes
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('expeditions')}
            className="text-xs text-[#8f4e00] font-bold flex items-center gap-0.5 hover:underline"
          >
            <span>View All</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Expedition Card 1: The Great Kashmir Circuit */}
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ecefeb] mb-4 group">
          <div
            className="bg-cover bg-center w-full h-56 relative p-4 flex flex-col justify-between"
            style={{ backgroundImage: `url('${ASSETS.circuitCard}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#07290c]/90 via-[#07290c]/30 to-transparent pointer-events-none"></div>

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#07290c]">
                6 Days • 5 Nights
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#fea049] text-[#6e3a00] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6e3a00] animate-pulse"></span>
                Selling Fast • April 18
              </span>
            </div>

            {/* Bottom Preview */}
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase text-[#ffdcc2] tracking-wider">
                Classic Circuit
              </span>
              <h3 className="font-headline text-xl text-white font-semibold leading-snug">
                The Great Kashmir Circuit
              </h3>
              <p className="text-xs text-[#eef1ee]/90 line-clamp-1 mt-0.5">
                Srinagar Dal Lake • Gulmarg Heights • Pahalgam • Betaab Valley
              </p>
            </div>
          </div>

          {/* Card Body & Pricing Details */}
          <div className="p-4 bg-white text-[#181c1a]">
            <div className="flex items-center gap-2 mb-3.5 overflow-x-auto pb-1 no-scrollbar">
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">hotel</span> Handcrafted Stays
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">soup_kitchen</span> Authentic Wazwan
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">group</span> Max 14 Folks
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#ecefeb]">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#737970] tracking-wider">
                  All-inclusive per person
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-headline text-2xl text-[#07290c] font-bold">₹18,499</span>
                  <span className="text-xs text-[#737970] line-through">₹22,999</span>
                </div>
              </div>
              <button
                onClick={() => {
                  onSelectRoute('The Great Kashmir Circuit');
                  onNavigateTab('expeditions');
                }}
                className="px-4 py-2.5 bg-[#07290c] hover:bg-[#1e3f20] text-white rounded-xl text-xs sm:text-sm font-semibold active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Reserve Seat</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </button>
            </div>
          </div>
        </article>

        {/* Expedition Card 2: Offbeat Doodhpathri & Gurez Valley */}
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ecefeb] group">
          <div
            className="bg-cover bg-center w-full h-56 relative p-4 flex flex-col justify-between"
            style={{ backgroundImage: `url('${ASSETS.gurezCard}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#07290c]/90 via-[#07290c]/30 to-transparent pointer-events-none"></div>

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-[#07290c]">
                5 Days • 4 Nights
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#c5edc1] text-[#012106] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#07290c]"></span>
                Offbeat Explorer
              </span>
            </div>

            {/* Bottom Preview */}
            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase text-[#ffdcc2] tracking-wider">
                Uncharted Borderland
              </span>
              <h3 className="font-headline text-xl text-white font-semibold leading-snug">
                Offbeat Doodhpathri &amp; Gurez
              </h3>
              <p className="text-xs text-[#eef1ee]/90 line-clamp-1 mt-0.5">
                Milk Valley Cascades • Razdan Pass 11,600ft • Habba Khatoon Peak
              </p>
            </div>
          </div>

          {/* Card Body & Pricing Details */}
          <div className="p-4 bg-white text-[#181c1a]">
            <div className="flex items-center gap-2 mb-3.5 overflow-x-auto pb-1 no-scrollbar">
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">nature_people</span> Pine Trails
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">cabin</span> Riverside Camps
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ecefeb] text-[#424840] text-xs font-semibold flex items-center gap-1 flex-shrink-0">
                <span className="material-symbols-outlined text-[14px]">shield</span> Verified Inner-Line Permits
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#ecefeb]">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#737970] tracking-wider">
                  All-inclusive per person
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-headline text-2xl text-[#07290c] font-bold">₹16,999</span>
                  <span className="text-xs text-[#737970] line-through">₹20,500</span>
                </div>
              </div>
              <button
                onClick={() => {
                  onSelectRoute('Offbeat Doodhpathri & Gurez');
                  onNavigateTab('expeditions');
                }}
                className="px-4 py-2.5 bg-[#07290c] hover:bg-[#1e3f20] text-white rounded-xl text-xs sm:text-sm font-semibold active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Reserve Seat</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </button>
            </div>
          </div>
        </article>
      </section>

      {/* Kashmir Live Weather & Valley Vibe Widget */}
      <section className="mt-6 px-4 sm:px-6">
        <div
          onClick={onOpenWeather}
          className="bg-[#ecefeb] hover:bg-[#e0e3e0] rounded-2xl p-4 shadow-sm flex items-center justify-between cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#8f4e00] shadow-sm flex-shrink-0">
              <span className="material-symbols-outlined text-[26px]">ac_unit</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold uppercase text-[#07290c]">
                  Gulmarg &amp; Srinagar
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#ffdcc2] text-[#2e1500] text-[10px] font-bold">
                  Live Status
                </span>
              </div>
              <p className="text-xs text-[#424840] mt-0.5">
                Sunny &amp; Crisp • 14°C Daytime • Gulmarg Gondola Phase 2 Open
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#737970]">sunny_snowing</span>
        </div>
      </section>

      {/* The Qaafirana Way / Trust Pillars Bento */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="mb-4">
          <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
            Our Promise
          </span>
          <h2 className="font-headline text-2xl text-[#07290c] font-semibold">
            Why Travel With Qaafirana Vibes?
          </h2>
          <p className="text-xs text-[#424840] mt-1 leading-relaxed">
            We are not commercial travel aggregators. We are Kashmiri locals and passionate wanderers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Pillar 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#ecefeb] flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-[#c5edc1]/70 text-[#07290c] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[20px]">villa</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm text-[#07290c] font-bold">
                100% Boutique Stays
              </h4>
              <p className="text-[11px] text-[#424840] mt-1 leading-snug">
                Carved cedar houseboats &amp; heritage walnut chalets, inspected personally.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#ecefeb] flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-[#ffdcc2]/80 text-[#8f4e00] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm text-[#07290c] font-bold">
                Local Storytellers
              </h4>
              <p className="text-[11px] text-[#424840] mt-1 leading-snug">
                Guided by born-and-raised Kashmiri mountain wanderers and poets.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#ecefeb] flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-[#ffdbcf]/80 text-[#451000] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[20px]">lock_reset</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm text-[#07290c] font-bold">
                Zero Hidden Costs
              </h4>
              <p className="text-[11px] text-[#424840] mt-1 leading-snug">
                Gondola passes, toll taxes, shikara rides and airport transfers all clear upfront.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#ecefeb] flex flex-col justify-between">
            <div className="w-9 h-9 rounded-xl bg-[#e6e9e5] text-[#07290c] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[20px]">groups_2</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm text-[#07290c] font-bold">
                Max 14 In A Tribe
              </h4>
              <p className="text-[11px] text-[#424840] mt-1 leading-snug">
                No crowded bus tours. Intimate, unhurried circles that feel like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler Love & Moments of Delight */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="bg-[#07290c] text-white rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-lg">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#fea049]/20 blur-2xl pointer-events-none"></div>
          <div className="flex items-center gap-1 text-[#ffdcc2] mb-2.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span className="text-[11px] font-bold text-white ml-1">
              4.9 / 5 • 820+ Travelers
            </span>
          </div>

          <p className="font-headline text-[18px] sm:text-[20px] italic leading-relaxed text-[#eef1ee]">
            "I arrived in Srinagar as an anxious solo girl. I left with 13 lifelong companions, stories by a roaring Pahalgam pine fire, and peace I hadn't felt in years."
          </p>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#e0e3e0] text-[#07290c] font-bold text-xs uppercase flex items-center justify-center shadow-sm">
                AS
              </div>
              <div>
                <span className="text-xs text-white block font-semibold">Ananya Sengupta</span>
                <span className="text-[10px] text-[#ffdcc2]">Solo Wanderer • Mumbai</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[24px] text-[#ffdcc2]">
              format_quote
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Custom Route Concierge CTA Banner */}
      <section className="mt-8 px-4 sm:px-6">
        <div className="bg-[#e6e9e5] rounded-2xl p-5 shadow-sm text-[#181c1a] flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-[#fea049] text-[#6e3a00] flex items-center justify-center shadow-md mb-3">
            <span className="material-symbols-outlined text-[24px]">support_agent</span>
          </div>
          <span className="text-[11px] font-bold text-[#8f4e00] uppercase tracking-widest">
            Dreaming of a Secret Valley?
          </span>
          <h3 className="font-headline text-2xl text-[#07290c] font-semibold mt-1">
            Talk to Our Kashmir Travel Architect
          </h3>
          <p className="text-xs text-[#424840] mt-1.5 max-w-sm leading-relaxed">
            Honeymoons, private family tempo travellers, or high-altitude alpine lake treks. We craft tailor-made routes within 2 hours.
          </p>

          <div className="w-full mt-4 flex flex-col gap-2">
            <button
              onClick={onOpenWhatsApp}
              className="w-full py-3.5 px-4 bg-[#07290c] hover:bg-[#1e3f20] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={handleCallbackClick}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#07290c] rounded-xl hover:bg-[#ecefeb] active:scale-95 transition-all"
            >
              {callbackRequested
                ? '✓ Our trip architect will call you shortly!'
                : 'Request A Free Call Back Instead'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
