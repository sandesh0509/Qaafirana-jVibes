import React, { useState, useMemo } from 'react';
import { ASSETS } from '../data/mockData';

interface PlanTripScreenProps {
  onShowToast: (title: string, message: string) => void;
  onOpenWhatsApp: () => void;
}

interface VibeOption {
  id: string;
  label: string;
  icon: string;
  costDelta: number;
}

export const PlanTripScreen: React.FC<PlanTripScreenProps> = ({
  onShowToast,
  onOpenWhatsApp,
}) => {
  // Step 1: Companion
  const [companion, setCompanion] = useState<'solo' | 'couple' | 'group' | 'retreat'>('couple');

  // Step 2: Vibes (multi-select)
  const [selectedVibes, setSelectedVibes] = useState<string[]>([
    'houseboat',
    'snow',
    'offbeat',
    'photo',
    'culture',
  ]);

  // Step 3: Duration & Season
  const [days, setDays] = useState<number>(6);
  const [season, setSeason] = useState<'spring' | 'summer' | 'autumn'>('spring');

  // Step 4: Accommodation
  const [stay, setStay] = useState<'heritage' | 'glamping' | 'houseboat'>('heritage');

  // Contact info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const vibeList: VibeOption[] = [
    { id: 'houseboat', label: 'Houseboat & Lake Serenity', icon: 'houseboat', costDelta: 1200 },
    { id: 'snow', label: 'Snow & High Peaks (Gulmarg)', icon: 'ac_unit', costDelta: 1800 },
    { id: 'offbeat', label: 'Offbeat Valleys (Gurez & Lolab)', icon: 'terrain', costDelta: 2200 },
    { id: 'photo', label: 'Photography & Golden Hour', icon: 'photo_camera', costDelta: 800 },
    { id: 'rafting', label: 'River Rafting & Alpine Treks', icon: 'kayaking', costDelta: 1500 },
    { id: 'culture', label: 'Local Wazwan & Harissa Trails', icon: 'restaurant', costDelta: 900 },
    { id: 'stars', label: 'Meadow Campfires & Stars', icon: 'nights_stay', costDelta: 1000 },
  ];

  const toggleVibe = (id: string) => {
    if (selectedVibes.includes(id)) {
      if (selectedVibes.length > 1) {
        setSelectedVibes(selectedVibes.filter((v) => v !== id));
      }
    } else {
      setSelectedVibes([...selectedVibes, id]);
    }
  };

  // Dynamic budget calculation engine
  const budgetRange = useMemo(() => {
    const companionFactors = {
      solo: 1.0,
      couple: 1.25,
      group: 0.9,
      retreat: 1.15,
    };
    const stayMultipliers = {
      heritage: 1.15,
      glamping: 1.3,
      houseboat: 1.0,
    };
    const vibesBonus = vibeList
      .filter((v) => selectedVibes.includes(v.id))
      .reduce((sum, v) => sum + v.costDelta, 0);

    const baseDailyCost = 2800;
    const factor = companionFactors[companion];
    const mult = stayMultipliers[stay];

    const raw = days * baseDailyCost * factor * mult + vibesBonus;
    const low = Math.round(raw / 500) * 500;
    const high = Math.round((raw * 1.32) / 500) * 500;

    return {
      low: '₹' + low.toLocaleString('en-IN'),
      high: '₹' + high.toLocaleString('en-IN'),
    };
  }, [companion, stay, days, selectedVibes]);

  // Dynamic progress calculation
  const progressPercent = useMemo(() => {
    let p = 25; // step 1 is answered
    if (selectedVibes.length > 0) p = 50;
    if (days && season) p = 75;
    if (name.trim() || phone.trim()) p = 90;
    if (name.trim() && phone.trim() && city.trim()) p = 100;
    return p;
  }, [selectedVibes, days, season, name, phone, city]);

  const paceTag = useMemo(() => {
    if (days <= 4) return 'Brisk & Scenic';
    if (days <= 7) return 'Relaxed Pace';
    return 'Deep Odyssey';
  }, [days]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      onShowToast('Phone Required', 'Please enter your WhatsApp number to receive your dossier.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(
        'Custom Blueprint Dispatched!',
        `We have sent your personalized ${days}-day Kashmir itinerary to ${phone}.`
      );
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full pb-28">
      <div className="px-4 sm:px-6 py-3 flex flex-col gap-6">
        {/* Header Section with Poetical Intro & Dynamic Step Tracker */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-[#ffdcc2] text-[#8f4e00]">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Curated Bespoke Escape
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl text-[#07290c] font-semibold tracking-tight">
            Tailor Your Soulful Escape
          </h1>
          <p className="text-xs sm:text-sm text-[#424840] leading-relaxed">
            Answer 4 intuitive questions and our mountain storytellers will weave an intimate, offbeat itinerary just for you.
          </p>

          {/* Visual Step Progress Tracker */}
          <div className="mt-2 p-3.5 rounded-2xl bg-[#ecefeb] flex flex-col gap-2 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#07290c] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">
                  compass_calibration
                </span>
                <span>Step {progressPercent < 50 ? '1' : progressPercent < 75 ? '2' : progressPercent < 90 ? '3' : '4'} of 4:</span>
                <span className="font-bold text-[#181c1a]">
                  {progressPercent < 50
                    ? 'Travel Companions'
                    : progressPercent < 75
                    ? 'Desired Vibes'
                    : progressPercent < 90
                    ? 'Length & Season'
                    : 'Dispatch Itinerary'}
                </span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#c5edc1] text-[#012106]">
                {progressPercent}% Done
              </span>
            </div>

            {/* Progress Track */}
            <div className="w-full bg-[#e0e3e0] h-2 rounded-full overflow-hidden flex">
              <div
                className="bg-[#fea049] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Live Ambient Kashmiri Quote Pill */}
        <div className="p-3 rounded-xl bg-[#f1f4f1] border border-[#e0e3e0] flex items-center gap-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#ffdcc2] flex items-center justify-center flex-shrink-0 text-[#8f4e00]">
            <span className="material-symbols-outlined text-[18px]">format_quote</span>
          </div>
          <p className="text-xs text-[#424840] italic leading-snug">
            "Gar firdaus bar roo-e zameen ast, hameen ast-o hameen ast..." (If heaven is on earth, it is here.)
          </p>
        </div>

        {/* STEP 1: TRAVEL COMPANIONS */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#1e3f20] text-white flex items-center justify-center text-xs font-bold">
              1
            </span>
            <h2 className="font-headline text-xl text-[#07290c] font-semibold">
              Who are you wandering with?
            </h2>
          </div>
          <p className="text-xs text-[#424840]">
            Select your journey rhythm to calibrate safety, stays, and shared moments.
          </p>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Solo Card */}
            <div
              onClick={() => setCompanion('solo')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                companion === 'solo'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-start gap-3`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center flex-shrink-0 text-[#07290c]">
                <span className="material-symbols-outlined text-[24px]">hiking</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">Solo Wanderer</h3>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      companion === 'solo' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        companion === 'solo' ? 'bg-white' : 'bg-transparent'
                      }`}
                    ></span>
                  </span>
                </div>
                <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
                  Curated verified homestays, vetted local mountain guides, and warm fireside chats.
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Private/Shared Room
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Solo Friendly
                  </span>
                </div>
              </div>
            </div>

            {/* Couple Card */}
            <div
              onClick={() => setCompanion('couple')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                companion === 'couple'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-start gap-3`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#ffdcc2] flex items-center justify-center flex-shrink-0 text-[#8f4e00]">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">Couple Romantic</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-[#fea049] text-[#6e3a00]">
                      Popular
                    </span>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      companion === 'couple' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        companion === 'couple' ? 'bg-white' : 'bg-transparent'
                      }`}
                    ></span>
                  </span>
                </div>
                <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
                  Honeymoon moments, private shikara twilight dinners, cozy pine cottages &amp; heated walnut-wood stays.
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Private SUV
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Candlelight Stays
                  </span>
                </div>
              </div>
            </div>

            {/* Friends / Family Circle */}
            <div
              onClick={() => setCompanion('group')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                companion === 'group'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-start gap-3`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center flex-shrink-0 text-[#07290c]">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">
                    Friends / Family Circle
                  </h3>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      companion === 'group' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        companion === 'group' ? 'bg-white' : 'bg-transparent'
                      }`}
                    ></span>
                  </span>
                </div>
                <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
                  Dedicated high-chassis Tempo/Innova, family interconnecting suites, leisurely scenic drives.
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Flexible Pace
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Best Value
                  </span>
                </div>
              </div>
            </div>

            {/* Corporate / Retreat */}
            <div
              onClick={() => setCompanion('retreat')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                companion === 'retreat'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-start gap-3`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center flex-shrink-0 text-[#07290c]">
                <span className="material-symbols-outlined text-[24px]">psychology_alt</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">
                    Corporate / Creative Retreat
                  </h3>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      companion === 'retreat' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        companion === 'retreat' ? 'bg-white' : 'bg-transparent'
                      }`}
                    ></span>
                  </span>
                </div>
                <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
                  High-speed WiFi workations, valley keynote setups, alpine team bonding, and wellness sessions.
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Dedicated Host
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ecefeb] text-[#424840]">
                    Curated Workshops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Divider with Kashmiri Floral Accent Motif */}
        <div className="flex items-center justify-center gap-2 text-[#737970]/30 my-2">
          <div className="h-[1px] bg-[#c2c8be] flex-1"></div>
          <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">yard</span>
          <div className="h-[1px] bg-[#c2c8be] flex-1"></div>
        </div>

        {/* STEP 2: KASHMIR VIBES & INTERESTS */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#1e3f20] text-white flex items-center justify-center text-xs font-bold">
              2
            </span>
            <h2 className="font-headline text-xl text-[#07290c] font-semibold">
              Desired Kashmir Vibes
            </h2>
          </div>
          <p className="text-xs text-[#424840]">
            Tap the soul-calling experiences you would love to integrate (multi-select).
          </p>

          <div className="flex flex-wrap gap-2">
            {vibeList.map((vibe) => {
              const active = selectedVibes.includes(vibe.id);
              return (
                <button
                  key={vibe.id}
                  type="button"
                  onClick={() => toggleVibe(vibe.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-xs ${
                    active
                      ? 'bg-[#07290c] text-white'
                      : 'bg-[#ecefeb] text-[#181c1a] hover:bg-[#e0e3e0]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{vibe.icon}</span>
                  <span>{vibe.label}</span>
                  {active && (
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Visual Storytelling Card */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-4">
          <img
            src={ASSETS.planGurez}
            alt="Gurez Valley & Habba Khatoon Peak"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07290c]/90 via-[#07290c]/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffdcc2]">
              Untouched Serenity
            </span>
            <h4 className="font-headline text-lg font-semibold leading-tight mt-0.5">
              Gurez Valley &amp; The Habba Khatoon Peak
            </h4>
            <p className="text-xs text-white/90 line-clamp-1 mt-0.5">
              Every custom itinerary includes one secret local viewpoint away from commercial tourist crowds.
            </p>
          </div>
        </div>

        {/* STEP 3: DURATION & DATES */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#1e3f20] text-white flex items-center justify-center text-xs font-bold">
              3
            </span>
            <h2 className="font-headline text-xl text-[#07290c] font-semibold">
              Trip Duration &amp; Season
            </h2>
          </div>

          {/* Slider Card */}
          <div className="p-4 rounded-2xl bg-white border border-[#ecefeb] shadow-xs flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f4e00]">
                  Ideal Expedition Length
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="font-headline text-2xl text-[#07290c] font-bold font-mono">
                    {days}
                  </span>
                  <span className="text-xs font-semibold text-[#181c1a]">
                    Days / {days - 1} Nights
                  </span>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-[#c5edc1] text-[#012106] text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">pace</span>
                <span>{paceTag}</span>
              </div>
            </div>

            {/* Range Slider */}
            <div className="flex flex-col gap-1.5">
              <input
                type="range"
                min="4"
                max="10"
                step="1"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value, 10))}
                className="w-full accent-[#07290c] cursor-pointer h-2 bg-[#ecefeb] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-bold text-[#737970]">
                <span>4 Days (Quick Escape)</span>
                <span>6 Days (Standard)</span>
                <span>10 Days (Deep Odyssey)</span>
              </div>
            </div>

            {/* Month Pill Selector */}
            <div className="flex flex-col gap-2 pt-1 border-t border-[#ecefeb]">
              <label className="text-xs text-[#181c1a] font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#8f4e00]">
                  calendar_month
                </span>
                <span>Planned Travel Window</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSeason('spring')}
                  className={`py-2 px-1 rounded-xl text-center flex flex-col items-center transition-all ${
                    season === 'spring'
                      ? 'bg-[#07290c] text-white shadow-xs font-bold'
                      : 'bg-[#ecefeb] text-[#181c1a] hover:bg-[#e0e3e0]'
                  }`}
                >
                  <span className="text-xs font-semibold">Apr - May</span>
                  <span className="text-[10px] opacity-80">Tulips &amp; Meadows</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSeason('summer')}
                  className={`py-2 px-1 rounded-xl text-center flex flex-col items-center transition-all ${
                    season === 'summer'
                      ? 'bg-[#07290c] text-white shadow-xs font-bold'
                      : 'bg-[#ecefeb] text-[#181c1a] hover:bg-[#e0e3e0]'
                  }`}
                >
                  <span className="text-xs font-semibold">Jun - Aug</span>
                  <span className="text-[10px] opacity-80">Alpine Lakes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSeason('autumn')}
                  className={`py-2 px-1 rounded-xl text-center flex flex-col items-center transition-all ${
                    season === 'autumn'
                      ? 'bg-[#07290c] text-white shadow-xs font-bold'
                      : 'bg-[#ecefeb] text-[#181c1a] hover:bg-[#e0e3e0]'
                  }`}
                >
                  <span className="text-xs font-semibold">Sep - Nov</span>
                  <span className="text-[10px] opacity-80">Chinar Gold</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 4: ACCOMMODATION PREFERENCE */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#1e3f20] text-white flex items-center justify-center text-xs font-bold">
              4
            </span>
            <h2 className="font-headline text-xl text-[#07290c] font-semibold">
              Accommodation Vibe
            </h2>
          </div>
          <p className="text-xs text-[#424840]">
            Every stay is hand-vetted by our local founders for warmth, cleanliness, and character.
          </p>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Boutique Heritage Cottages */}
            <div
              onClick={() => setStay('heritage')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                stay === 'heritage'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#ffdcc2] text-[#8f4e00] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">chalet</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">
                    Boutique Heritage Cottages
                  </h3>
                  <p className="text-xs text-[#424840]">
                    Carved walnut interiors, bukhari heaters, apple orchards.
                  </p>
                </div>
              </div>
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ml-2 flex-shrink-0 ${
                  stay === 'heritage' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    stay === 'heritage' ? 'bg-white' : 'bg-transparent'
                  }`}
                ></span>
              </span>
            </div>

            {/* Luxury River Glamping */}
            <div
              onClick={() => setStay('glamping')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                stay === 'glamping'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] text-[#07290c] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">camping</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">
                    Luxury River Glamping
                  </h3>
                  <p className="text-xs text-[#424840]">
                    Insulated geodome pods right on the Lidder River bank.
                  </p>
                </div>
              </div>
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ml-2 flex-shrink-0 ${
                  stay === 'glamping' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    stay === 'glamping' ? 'bg-white' : 'bg-transparent'
                  }`}
                ></span>
              </span>
            </div>

            {/* Traditional Cedar Houseboat */}
            <div
              onClick={() => setStay('houseboat')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                stay === 'houseboat'
                  ? 'bg-white border-[#1e3f20] shadow-sm ring-1 ring-[#1e3f20]/20'
                  : 'bg-white border-[#ecefeb] hover:border-[#1e3f20]/30'
              } flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] text-[#07290c] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">deck</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xs sm:text-sm font-bold text-[#181c1a]">
                    Royal Cedar Houseboat
                  </h3>
                  <p className="text-xs text-[#424840]">
                    Vintage Dal / Nigeen quiet mooring with butler kahwa service.
                  </p>
                </div>
              </div>
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center ml-2 flex-shrink-0 ${
                  stay === 'houseboat' ? 'bg-[#1e3f20]' : 'bg-[#e0e3e0]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    stay === 'houseboat' ? 'bg-white' : 'bg-transparent'
                  }`}
                ></span>
              </span>
            </div>
          </div>
        </section>

        {/* DYNAMIC BUDGET ESTIMATOR WIDGET */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#07290c] text-white flex flex-col gap-2.5 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#fea049] text-[20px]">
                calculate
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffdcc2]">
                Dynamic Estimation Engine
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
              All inclusive
            </span>
          </div>

          <div className="flex items-baseline justify-between pt-1">
            <div className="flex flex-col">
              <span className="text-xs text-[#86ab83]">Estimated Cost Range</span>
              <span className="font-headline text-2xl sm:text-3xl text-white font-bold font-mono">
                {budgetRange.low} – {budgetRange.high}
              </span>
            </div>
            <span className="text-xs text-[#86ab83]">per traveler</span>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[#86ab83] text-xs">
            <span className="material-symbols-outlined text-[16px] text-[#fea049]">
              check_circle
            </span>
            <span>Covers: Private Cab, Selected Stays, Daily Breakfast &amp; Dinner, Shikara &amp; Local Concierge</span>
          </div>
        </div>

        {/* QUICK CONTACT & DISPATCH */}
        <section className="flex flex-col gap-3 mt-1">
          <div className="flex flex-col">
            <h2 className="font-headline text-2xl text-[#07290c] font-semibold">
              Where shall we send your blueprint?
            </h2>
            <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
              No spam, ever. Our mountain trip curator will send your PDF itinerary with batch dates directly via WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ecefeb] shadow-xs flex flex-col gap-3.5"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#181c1a]" htmlFor="traveler-name">
                Your Full Name
              </label>
              <div className="flex items-center px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1e3f20]/20 transition-all">
                <span className="material-symbols-outlined text-[#737970] text-[18px] mr-2">
                  badge
                </span>
                <input
                  id="traveler-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Zoya Akhtar"
                  required
                  className="bg-transparent w-full text-xs sm:text-sm text-[#181c1a] focus:outline-none placeholder:text-[#737970]"
                />
              </div>
            </div>

            {/* WhatsApp Number Input */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold text-[#181c1a] flex items-center justify-between"
                htmlFor="traveler-phone"
              >
                <span>WhatsApp Number</span>
                <span className="text-[#8f4e00] font-semibold text-[10px]">For Quick Draft</span>
              </label>
              <div className="flex items-center px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1e3f20]/20 transition-all">
                <span className="material-symbols-outlined text-[#8f4e00] text-[18px] mr-2">
                  chat
                </span>
                <input
                  id="traveler-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  className="bg-transparent w-full text-xs sm:text-sm text-[#181c1a] focus:outline-none placeholder:text-[#737970]"
                />
              </div>
            </div>

            {/* City of Origin */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#181c1a]" htmlFor="traveler-city">
                Starting City / Airport
              </label>
              <div className="flex items-center px-3.5 py-2.5 rounded-xl bg-[#f1f4f1] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#1e3f20]/20 transition-all">
                <span className="material-symbols-outlined text-[#737970] text-[18px] mr-2">
                  flight_takeoff
                </span>
                <input
                  id="traveler-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, Delhi, Bengaluru"
                  className="bg-transparent w-full text-xs sm:text-sm text-[#181c1a] focus:outline-none placeholder:text-[#737970]"
                />
              </div>
            </div>

            {/* Big Action CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-all ${
                submitted
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#fea049] hover:bg-[#e58c36] text-[#6e3a00]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    progress_activity
                  </span>
                  <span>Weaving Your Custom Trail...</span>
                </>
              ) : submitted ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">done_all</span>
                  <span>Sent to Curators! Check WhatsApp.</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>Get Custom Itinerary on WhatsApp</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-[#737970] flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-[#07290c]">
                verified_user
              </span>
              <span>Response within 2 Hours • 100% Free Consultation • No Spam</span>
            </p>
          </form>
        </section>

        {/* Founder Note & Assurance */}
        <div className="p-4 rounded-2xl bg-[#ecefeb] flex items-start gap-3.5 shadow-xs mb-4">
          <img
            src={ASSETS.planGuide}
            alt="Kashmiri Local Guide"
            className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-[#07290c]">
              Personal Assurance from Qaafirana Vibes
            </span>
            <p className="text-xs text-[#424840] mt-0.5 leading-relaxed">
              "We do not run commercial sheep herds. Each route is tailored by wanderers who know every secret Chinar glade and chai shop in the valley."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
