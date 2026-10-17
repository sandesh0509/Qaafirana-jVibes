export interface Batch {
  id: string;
  date: string;
  subtitle: string;
  price: string;
  rawPrice: number;
  status: string;
  seatsLeft: number;
  statusType: 'limited' | 'open';
}

export interface ItineraryDay {
  day: number;
  tag: string;
  title: string;
  description: string;
  image?: string;
  badges: string[];
  icon: string;
}

export interface ReviewStory {
  id: string;
  name: string;
  role: string;
  city: string;
  rating: number;
  title: string;
  quote: string;
  avatar: string;
  photo?: string;
  locationTag?: string;
  verifiedBadge: string;
  seasonTag: string;
  category: 'solo' | 'couples' | 'group';
}

export interface Snapshot {
  id: string;
  location: string;
  caption: string;
  image: string;
  badge?: string;
  spanCol?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  icon: string;
  answer: string;
}

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK1xgOjdkY0EyjM5r84OXdYJihsvUOhd8nfT1qK1cEMhH6okx139LI877QeHdZHIjd9dXDs18Kf6wtAWmx-OCza9dgoplPqRk5nlcjb2HVDMMv8ORv_hIL5EcN6zOmnYV53jKK-947WunSNvKmdFUGmGioJgUWTn09kz6m9blVdN-z2UCtqBbKBYLgelH-xPy7U5WJ763Ua3VHuOWTG0rexw4zNV_bcD07STgXAMJhu6ZXlnJ7RR-g',
  profile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCmI0hKHGhgP5iN1SqxxR6Z4gEwuDgTPkjWuGnpQbnvdDYXwQ071-mkjgIfTOvRrK5LPwMaZYGdJi0t0vOT1LkT-85MZgTvviIfigBR-GIARlCw_3uaYIRRxOQM7CrubJpUrJbsJLEH7H9tByDijHCeaj7BKb_qqPHbWgbMWBJBzvl0HZ2EtQUmHwzu9_iVc_F0jhlsUHIUV0qvDRYojb_YSbv-gWLkfeJzgI48UUvU797DSQPz9Df',
  heroHome: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArjRdyks971uGgpXY9ZTacZBQvPGQl88FhHMHOrUUmwffh7JTZDM7dN2XjcRvTUl9XB18KSTiLGySaJut_u9FJf1SBZpXcu_oJj0b6RCXvk9V-5Ytu7zzNbC8-WDd2jgxY3iCkvYSOMa6sW1segqCvq6wmAtKW4_xdSLdUZ_ONTfVbfVI0KCfvFcxteh0h0-JWgBfQRVk1LTomJOY-XFLrVj-BruTFS3LFOAxiGkqVzzPVEArbWDg',
  circuitCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAppx14Lm4QKZIsvu75VpgVjEnVwQ1JG0tCtzlRQGflK1vwU6I_JgHZVyo3n9opWghx6HFZMQVHG5vimIk2wj47oEbWlsC7XPJ9psunGw2hxhnFyJKal2mZg2Wn7K5i0vK2AfeZE996tcn_fC3ErmeMTFNNf_s82lF786RAzKsNQ1rmNNoh1tP7VI08Q9CiO-nkcoBmPCTlv3Yvqp7_0aEnWevaMdLSZJsfNcv8tpv2PTRDwvIT5d4Y',
  gurezCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxaylKOoDUCgpwdaBdGE7E4jJCA591bxPTgpdrJZ3NQDQbkqh39C6Jj-9j5lNqSiFkqgYG95yflqRhBDqgiuRHgYZLE_EQPM4eGQNqXQtINIL-LpNfttpungQFKh1kVCm54bw8Aj8KG0horhgiSOrO92CdygON5cPbDkZBbt2j3qDkpMah6Z-SfluJ7AMtSLmMtMK3lGe0a5LCrbfzFxgnTO-QlvSjbap3mYK9VyE31DIleDJE4m-Y',
  expeditionCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrBeGncEsvvgiSH84C-6NOkjUPqHhkMNORzQZcOJOoyF6Ih1gCMc43Ca_Ph5UMyWv-DvHjBITZIhBn7ozgGxA0gmyq6UTa2WD1gOVRDcbywMHaWdwWq4YwtznfjiivAH315BanGOWorO2DCtLYomLpRzUU2YX1SMnCmaD5wMiBhh3U3tesZTUCIlyTo69WKb2eLpIGVBkaMyvBOpEWyv6Z8_doR1Pj0VNm0s09lPiAMaq8mkrAXXOw',
  day1Houseboat: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAhrXoH5CXnK5kU3AgBkoBVoUjOIooThgpr_NkfcmWOPLq2mCYnuti5FGIgafG0XHueQKSKXwcdZQdRJCETKazwu7TlIukV85zNIzi3fSCGkUnbUj4CWV9ssl1iMU0uXJO-IROwyjORKXh6IMK8P0bgplAVqWnmRGIbVU8UBBzC36Hc4GdEqYomZYFHQpdHcShErQ03gEn7v2Qi_BCXpTEC273kVTwEipYsZEiCG2iVQzhc_txyR_f',
  day2Gulmarg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv0V6ypxkZfnV4crV71WZ4Q3Ngh42jygLNE3RdHt6Z6SW2KZMzny5MhdHq0jv8h9ouGnfRQvo5-KKJV3Iaq1IHCQFXCVeU1qbEsJLRuBFUka0Log_BfPbQfowxlqD3-rGtrhWhaLeiFNEhCqIOwm-Vh7_6fCbL5LbAn4tx_JaAECQwl2_EFBQWtJ7UyrAeowoVygshs_VKOE8ho9NtIIySC93-1Re6sZFVDpGuNpbYw0MuERT_VdKm',
  day3Lidder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoGn4XLYGEaQlRbEVI-bZndGY4ykma0tbLV9Zz_e1KCPZFWO5jtldn5Gue-islvyavl2PSHKJo5eluZpdNnU4Xnj5TeN_4AYFGZJN3yLMgKnw6nHD__ViS8a8puhI9ywaXaGxfbTxD5a9-b_sF-M2gqGTlc8YZaV3rPc3ScaJtj5W7TukFtfqfFwiTadpIbhIWaApoTqUJQxPGRiTCNfClXDJxJFCr0dJIA6qk5tL3OuWz0hDgrdha',
  wandererPriya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05gxk39UcpDurCSxqcgFiH__Ch-6RsKCQatYpgJUke_e3qpRr5DIOj2gEV40KKzxhIhF9JuixlKT-7YbMWAhTiSizWUSdHo22bLZctLKe_2aS4aDwWt3JkcXicLxYMLL-POHZYaDJTdgUUE_rL24_Ps7W4XQZJeqD88ocvaqvwz4db1-lY14BcN7J37tbCZEXIBm9vK9PSSMyE2QGBU3MU3bct3F_i3_yx_jwWz_ngZPQj_qI3W8L',
  planGurez: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQR_4Rz0p7mAi0YdAdX1T97kLL859WASWrUYhsvZVgwXVDjRjHtZrm11O_0Owq1SUVv1MRtzaw8Nj7Tre9PqKlOUXtPtpfAI8PIWKkgesn7Wq5rUsTAZp0hZV-jznpgIpwDOaI6CleyaQjG2AGhL_5ydeRR_tehS6Ov-WbCoR2OYAdwZ0UsiAvTA7PthMgBp2_fAuKNYPFC7xS3NHPunW7DVs8_NFPWl3KQsgg57vCAatnJuZeRd91',
  planGuide: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bsAWjfFq6QyH_zXsWfKt9lsm9Mm2DQCuyv7uhc3T4h6BVlomiPFC0hB2ij25BEDRExX-tl_VFWZoIgUYnHKK-BSD2qmb5wyuSwgrdcofBalUsEzdZyOv5TbfUCIF_eBMppdAeoXWJIJILTEQDvL74otlvziBqxcp-U9QHpm-vPvkh3DHt04vZZHzGb4kU9n61FXpxCu3tlxvugzRf9DxiFMIRSeq38IOcZ2ZA3nstQ4z7UmK3-bu',
  communityAnanya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB4joPc9KbibV0unYnPFVZ7PuDmE5H7jbck-Rp_9trW4ucUHS6YLkBb1tv9-4VURkCm3gizP7UphkesZ7atGQzrQmjYCACXezUg-J1hhf59XAFJl_sOGJVW59gjmRStOHrzDwDeuJ-MAlmLUf64d1CbhagEMPW5X4wbi7-WRqUmyYSOEEgdywnsfkQphTfXvTCswRHVMPAkDaTNswwlreySNIXVWvuhwpodPryEt1fNpQzJCwuwnli',
  communityAnanyaPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbvLwnUgza7eWCcAg3eoK-WM_71cpcg6LZaeomPFcPeDIuJguhdqLSRBG3ztKAF8ONKExXyFVYlc1HAvZbFz24W_gdKRlAz98SquCf2nscBEjF5hYeLrP02xmE1cSGqluDQx5XsSyG38Uck7jBqh9BvXx1j6dhgnr6SjPca2Kvo8ThRbCnIif6Nyau61upqvWTALJokaSIUQN5PACci6pZvFyc4eq2pbhzLO3CuxEmU7NUpZmn-vS5',
  communityRohit: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJtKgx7WzJ98jqsQOXaJL2nPO4qqIBFoBUtAVq-flHkYOwsx864Xz6-mh0GN7oDj-8uZHVkQ91BCZi6tKIUIXXYJqmbEYP6LpPhRDKVyCB1XsRQPhOtS5ashoaBg91Qn7GYK_-VTyjTkfenVMuHromMbE7WNP79sWF0NzFeVatf9an1XrpsLzr9W5z9Tx8Ou1cym_nm6mV6811R5G5xtU4f2mIorlCdwYVRBggMkSr01AnCeObGtxp',
  communityRohitPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDycw4IP4i6AkTzotE2txZsj-xRp5Y0lNsL5mLk-Fn_9LquSX7p43HWQDICtiSQ2em60V8F3eEeFI5txE8VkICtF8U-izIk1dHWdMHh2d2KHZ5ehgpHEBKLTJJCwfLCFiQ6hRgR_k7PTn-GWW2vQHGODswwWUYGCvIHczr6Z1GVkFz5qT15mekuw9itcQtRnCveMrOdtF_fmRNWW6ik2v4C-vD67OOVJwj_TfFjjvHj0uzb_D7roOsz',
  communityKabir: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPJZdo-DdTw4BF1tNma4T9yMrg4NEgG3RXiEdYERi6SU1eyIIwr5T1SewlIAJVwcfq2zTjVKZp5aHD-WpgsCMVV95l_d506BmE8yZQuDtdDT93g9kzCgoYNVwydAn33G311oXIg7V20RI-KsdEbNSWWwRn6rzh1aaGiSantBNyECgxTmnrUdTkcfoH35DHxJWT8u_gXDbNvsz-2TEMfjZ7WYywZ2vOhorfjziqA1QWKOSRdwEb2r6c',
  communityKabirPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuaqqHk7WfJVj-JyAgTLaP2ZwRQEmThh_9SR4CTDXwlhdYN6f6rAiHwCx79TjQH4IuRJCrgGdSDuCKFmtLzfO98gGkWVWwf1QDgKUJ6jHWY_rgmtkRCOAq-cUcVhgfPufkHFkP2l8rwn_W8KEo8wPKquQeOXTGKX6IqikDE4K0eoqyTczsbX4XIMQqZb04niTwikicE3vTReBoVoK3uu_psRzI3Krt551noV5-iL4usqUkYiZQ5UKC',
  snapshotBazaar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeByJbG6k97Bi6r8Wjf4RV3yBsdwdGjoEbq-ipMfmOPELSeY-0HlgPZaSDgEeteuDWKLLBmRyc2my4kIqoXvTisk3enNfpRYLRV780w3rKr6KWt1ZLZ89886PKeRZJu9XpxwFh3AX3WKZbaTLEsvOzJXhIdg2xkfHALb_nwxsX82P6qbbSQ6gqIIfU4I--XK9NmFQdsKZEsgKRgQM9Copih4Qw5oh9e5_lB3_utexrzDqI1b1MOmTC',
  snapshotSnow: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANmUP5JkoOWG5wbtJlLP2CfVF8jLbC3uprBCKLB-eCnEWoWSU327HL7FogBqY8RQHG3JNuA5JEnW_X3wBaRNVtYwqWcaAwX6roDjbHwMYroN56x73thePh1Ehln3_U1bBthbE4SRqxAmZTgW-u5ek6rN2bOGYJAH_9mv1BLorRMqPG88ruEb0YMu756e9R7kJV6OTObrxlS46qGUwRVhZph41T1Tkkb0AMiszUZkdJ8MsFEYRlgVzz',
  snapshotCampfire: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYqd8Ny9lzjnLU3kD9wIe6pRUykOxcEjx3QxF6pYTiYWKEjpkFayxuyCnNouBR-1oWRNrsKftuIwFY4XsH-kw87VCXWA1lR65PHmFHeFuKo3uXOih8xA0LKlXpn19xXDAc4xcILFNYK3vz0P6oS-XNvwMHx4A2T4btPF7SJ0a1VrBCRzxQPVB051peLd1VFgTKvHiSQf2zaXyuGV6UKOG7ct_OqESrxRlBS5uM6qaOTd7Pu8kzqIjP',
};

export const DEPARTURE_BATCHES: Batch[] = [
  {
    id: 'batch-apr-12',
    date: '12 - 17 April',
    subtitle: 'Tulip bloom & fresh alpine snow',
    price: '₹18,499',
    rawPrice: 18499,
    status: 'Almost Full (3 Left)',
    seatsLeft: 3,
    statusType: 'limited',
  },
  {
    id: 'batch-apr-24',
    date: '24 - 29 April',
    subtitle: 'Lush spring awakenings in Pahalgam',
    price: '₹18,499',
    rawPrice: 18499,
    status: 'Open (8 Left)',
    seatsLeft: 8,
    statusType: 'open',
  },
  {
    id: 'batch-may-05',
    date: '05 - 10 May',
    subtitle: 'Golden summer breeze & Doodhpathri trails',
    price: '₹19,299',
    rawPrice: 19299,
    status: 'Open (12 Left)',
    seatsLeft: 12,
    statusType: 'open',
  },
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    day: 1,
    tag: 'Day 1 • Srinagar Arrival',
    title: 'Dal Lake Shikara & Heritage Houseboat',
    description:
      'Warm reception at Srinagar airport. Drift along the water corridors on a private Shikara ride into golden sunset, sip freshly brewed saffron Kehwa with local bakers, and settle into an authentic handcrafted cedarwood houseboat with an authentic royal Wazwan banquet.',
    image: ASSETS.day1Houseboat,
    badges: ['Shikara Sunset Cruise', 'Authentic Kehwa Sip', 'Wazwan Welcome Feast'],
    icon: 'directions_boat',
  },
  {
    day: 2,
    tag: 'Day 2 • Gulmarg High Country',
    title: 'Srinagar to Gulmarg & Gondola Peaks',
    description:
      "Ascend to the world's highest cable car ride in Gulmarg. Experience Phase 1 (Kongdoori) & Phase 2 (Apharwat Peak at 13,780 ft) surrounded by towering Himalayan glaciers. Cozy stop for Kashmiri spiced kahwa at an alpine timber cafe.",
    image: ASSETS.day2Gulmarg,
    badges: ['Gondola Phase 1 & 2', 'Apharwat Snowline', 'Alpine Cafe Halt'],
    icon: 'landscape',
  },
  {
    day: 3,
    tag: 'Day 3 • Valley of Shepherds',
    title: 'Pahalgam, Lidder River & Aru Valley',
    description:
      'Journey along the melodic turquoise waters of Lidder River to Pahalgam. Traverse the untouched serenity of Aru Valley, ride gentle mountain horses into Betaab Valley, and share stories around a cedarwood bonfire under starlit Himalayan skies.',
    image: ASSETS.day3Lidder,
    badges: ['Lidder Riverside Stroll', 'Betaab Meadow Trail', 'Bonfire Night & Folk Tunes'],
    icon: 'water',
  },
  {
    day: 4,
    tag: 'Day 4 • Hidden High Meadows',
    title: 'Baisaran "Mini Switzerland" & Pine Trek',
    description:
      'Trek up through dense deodar forests into the sprawling emerald bowl of Baisaran meadow. Relax over a curated meadow picnic with local saffron honey and artisan breads. Later, meet traditional master walnut-wood carvers in a village atelier.',
    badges: ['Baisaran Deodar Trek', 'Meadow Picnic', 'Walnut Wood Artisan Guild'],
    icon: 'forest',
  },
  {
    day: 5,
    tag: 'Day 5 • The Milk Valley',
    title: 'Doodhpathri & Pure Solitude',
    description:
      'An excursion to Kashmir’s best-kept quiet secret: Doodhpathri. Roam expansive rolling velvet slopes where frothing glacial streams crash over white stones, mimicking foaming milk. Pure, uncrowded serenity with nature journaling.',
    badges: ['Shaliganga Stream Walk', 'Offbeat Velvet Slopes', 'Qaafirana Circle Reflection'],
    icon: 'filter_vintage',
  },
  {
    day: 6,
    tag: 'Day 6 • Souvenirs & Goodbyes',
    title: 'Srinagar Old Souk & Departure',
    description:
      'Morning walk through old Srinagar’s spice souk: authentic Pampore saffron, crisp mamra almonds, and handloom pashmina textiles. Transfer back to Srinagar airport with warm memories and soul connections.',
    badges: ['Pampore Saffron Origin', 'Old City Heritage Walk', 'Airport Transfer'],
    icon: 'flight_takeoff',
  },
];

export const INCLUSIONS = [
  {
    icon: 'directions_car',
    title: 'All Ground Transportation',
    desc: 'Dedicated Innova / Scorpio 4x4 for airport pickups, drop, and inter-city drives.',
  },
  {
    icon: 'bed',
    title: 'Handpicked Soulful Stays (5 Nights)',
    desc: '1 Night Luxury Cedar Dal Lake Houseboat + 4 Nights 4-star boutique alpine cottages.',
  },
  {
    icon: 'restaurant',
    title: 'Meals: Breakfast & Gourmet Dinners',
    desc: 'Wholesome hot breakfasts and traditional dinners including royal Wazwan dining experience.',
  },
  {
    icon: 'hiking',
    title: 'Qaafirana Trip Captain & Local Guides',
    desc: 'Dedicated community storyteller, first-aid trained leader, plus local naturalist companions.',
  },
  {
    icon: 'confirmation_number',
    title: 'Gondola & Permit Concierge',
    desc: 'Pre-booked assistance for Gulmarg Gondola queue management, toll, and driver allowances.',
  },
];

export const EXCLUSIONS = [
  {
    icon: 'flight',
    title: 'Airfares to & from Srinagar',
    desc: 'Flights from your origin city to Sheikh ul-Alam Airport (SXR).',
  },
  {
    icon: 'lunch_dining',
    title: 'Afternoon Lunches',
    desc: 'Left flexible to let travelers explore regional cafes and roadside waza eateries.',
  },
  {
    icon: 'sports_esports',
    title: 'Personal Adventure Activities',
    desc: 'Skiing rentals, personal horse riding, and ATV rides in Pahalgam.',
  },
];

export const COMMUNITY_REVIEWS: ReviewStory[] = [
  {
    id: 'rev-1',
    name: 'Ananya S.',
    role: 'Solo Wanderer',
    city: 'Mumbai',
    rating: 5.0,
    title: '“My first solo trip to Kashmir felt like returning home”',
    quote:
      'I was terrified of traveling alone to the valley. But from the moment Captain Tariq received me in Srinagar, every bit of doubt melted. The 24/7 check-ins, local Kashmiri kehwa by the dock, and respectful homestays gave me complete peace of mind.',
    avatar: ASSETS.communityAnanya,
    photo: ASSETS.communityAnanyaPhoto,
    locationTag: 'Dal Lake Sunrise Shikara',
    verifiedBadge: '100% Solo Female Verified',
    seasonTag: 'Spring Expedition',
    category: 'solo',
  },
  {
    id: 'rev-2',
    name: 'Rohit & Simran',
    role: 'Anniversary Escape',
    city: 'Bengaluru',
    rating: 5.0,
    title: '“Our anniversary in Pahalgam was pure poetry”',
    quote:
      'Qaafirana arranged a private Wazwan candle-lit dinner on a classic cedar houseboat, followed by a cozy cabin with an authentic bukhari fireplace in Betaab Valley. Not a single tourist trap, just pure romance and silence.',
    avatar: ASSETS.communityRohit,
    photo: ASSETS.communityRohitPhoto,
    locationTag: 'Pahalgam Pine Villa',
    verifiedBadge: 'Couple Curated Journey',
    seasonTag: 'Autumn Retreat',
    category: 'couples',
  },
  {
    id: 'rev-3',
    name: 'Kabir D.',
    role: 'Batch #42 Wanderer',
    city: 'New Delhi',
    rating: 4.9,
    title: '“Met strangers who became family in Gulmarg”',
    quote:
      'I joined the November open batch alone and walked away with 11 lifelong friends. The spontaneous snowball fights, late-night Antakshari by the woodstove, and collective awe at Kongdoori will stay with me forever.',
    avatar: ASSETS.communityKabir,
    photo: ASSETS.communityKabirPhoto,
    locationTag: 'Apharwat Peak 13,780 FT',
    verifiedBadge: 'Tribe Batch #42',
    seasonTag: 'Snow Adventure',
    category: 'group',
  },
];

export const SNAPSHOTS: Snapshot[] = [
  {
    id: 'snap-1',
    location: 'Srinagar',
    caption: 'Floating flower bazaar',
    image: ASSETS.snapshotBazaar,
  },
  {
    id: 'snap-2',
    location: 'Gulmarg',
    caption: 'Peak snow showdown',
    image: ASSETS.snapshotSnow,
  },
  {
    id: 'snap-3',
    location: 'Yusmarg Campsite',
    caption: 'Starlight sessions & acoustic jam circles',
    image: ASSETS.snapshotCampfire,
    badge: 'Acoustic Night',
    spanCol: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What to pack for April/May weather?',
    icon: 'thermostat',
    answer:
      'Spring brings warm sunny afternoons (15°C - 20°C) and brisk alpine nights (5°C - 8°C). Pack smart layers: lightweight fleece jacket, breathable thermal innerwear, comfortable waterproof walking shoes, sunglasses for snow glare in Gulmarg, and a windbreaker for Dal Lake boat rides.',
  },
  {
    id: 'faq-2',
    question: 'How safe is Kashmir for solo female travelers?',
    icon: 'shield_person',
    answer:
      'Over 40% of our wanderers are solo women. Kashmiris are world-renowned for their hospitality (Mehman-nawazi). On every Qaafirana trip, you have a verified local trip captain, pre-screened boutique heritage stays, and dedicated 24x7 local support to ensure you explore effortlessly and safely.',
  },
  {
    id: 'faq-3',
    question: 'What is the booking & cancellation policy?',
    icon: 'policy',
    answer:
      'Reserve your slot with an advance token of only ₹3,000 to ₹4,999. Full refund guaranteed for cancellations made up to 15 days before batch departure. Free batch transfer allowed if weather disruptions or flight rescheduling occur.',
  },
];
