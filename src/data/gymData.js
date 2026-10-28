/**
 * THE FITNESS HUB — KURLA
 * Official Verified Gym Data & Pricing Structure
 * Get Fit. Get Strong. Get Results.
 */

export const GYM_INFO = {
  name: "The Fitness Hub",
  hubName: "The Fitness Hub — Kurla",
  subtitle: "Kurla, Mumbai",
  fullName: "The Fitness Hub — Kurla",
  tagline: "Get Fit. Get Strong. Get Results.",
  motto: "Join today. Transform tomorrow.",
  location: "Nehru Nagar, Kurla, Mumbai",
  shortDescription: "Kurla's premier strength, hypertrophy, and transformation facility in Nehru Nagar. Offering 18-hour daily access (6 AM – 12 AM), dedicated Ladies Only hours (2 PM – 4 PM), heavy Olympic iron, commercial cardio, and certified 1-on-1 personal coaching.",

  contact: {
    building: "First Floor, Serene Shelter, Mass Building, B Wing",
    landmark: "Nehru Nagar, Kurla",
    area: "Kurla",
    city: "Mumbai, Maharashtra",
    pincode: "400024",
    fullAddress: "First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla, Mumbai – 400024",
    phone: "+91 81088 84757",
    phoneDisplay: "+91 81088 84757",
    phoneRaw: "8108884757",
    phoneHref: "tel:+918108884757",
    whatsapp: "+91 81088 84757",
    whatsappLink: "https://wa.me/918108884757?text=Hello%20The%20Fitness%20Hub%20Kurla%2C%20I%20would%20like%20to%20inquire%20about%20gym%20membership%20and%20personal%20training.",
    email: "fitnesshubkurla@gmail.com",
    
    // Official Timings
    hoursDaily: "Daily: 6:00 AM – 12:00 AM (Midnight)",
    hoursLadiesOnly: "Ladies Only Batch: 2:00 PM – 4:00 PM",
    hoursSunday: "Sunday: 6:00 PM – 10:00 PM",
    hoursSummary: "Open 7 Days • Daily 6 AM – 12 AM • Sunday 6 PM – 10 PM",
    
    // Verified Google Maps Link
    mapsUrl: "https://maps.app.goo.gl/3xaNj1CDWH3zzTfDA?g_st=ic"
  },

  socials: {
    instagram: "https://www.instagram.com/fitnesshubkurla/",
    instagramHandle: "@fitnesshubkurla",
    whatsapp: "https://wa.me/918108884757"
  }
};

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    caption: "Heavy free-weight training floor in full swing. Progressive overload daily.",
    likes: "248",
    tag: "#ChestDay"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    caption: "Form checks & 1-on-1 coach guidance. No ego lifting, strictly results.",
    likes: "312",
    tag: "#PersonalTraining"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    caption: "Dedicated Ladies Only batch active daily from 2:00 PM to 4:00 PM.",
    likes: "285",
    tag: "#LadiesFitness"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    caption: "Commercial cardio deck & endurance intervals building stamina that lasts.",
    likes: "420",
    tag: "#CardioFleet"
  },
  {
    id: "ig-5",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    caption: "Olympic power racks locked and loaded. Calibrated steel and Olympic bars ready.",
    likes: "367",
    tag: "#StrengthHub"
  },
  {
    id: "ig-6",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    caption: "Late night energy at Nehru Nagar, Kurla. Train uninterrupted until 12:00 AM Midnight.",
    likes: "518",
    tag: "#KurlaFitness"
  }
];

/**
 * STANDARD GYM ACCESS MEMBERSHIPS (GST INCLUDED)
 * Includes full gym access and general trainer guidance on floor.
 */
export const STANDARD_MEMBERSHIPS = [
  {
    id: "month-1",
    duration: "1 Month",
    price: "₹3,500",
    priceNumeric: 3500,
    period: "Monthly Pass",
    badge: "Flexible Starter",
    taxNote: "GST Included",
    description: "Full gym floor access with general trainer guidance. Ideal for month-to-month commitment.",
    features: [
      "Full access to strength, free-weight & cardio zones",
      "Open 6:00 AM – 12:00 AM daily (Sunday 6 PM – 10 PM)",
      "Access to Ladies Only Batch (2:00 PM – 4:00 PM)",
      "General trainer floor guidance & posture tips",
      "Sanitized AC training environment & lockers",
      "Clean washroom and purified water amenities"
    ],
    highlighted: false,
    ctaText: "Choose 1 Month Pass"
  },
  {
    id: "month-3",
    duration: "3 Months",
    price: "₹6,000",
    priceNumeric: 6000,
    period: "Quarterly Pass (₹2,000/mo)",
    badge: "Great Value",
    taxNote: "GST Included",
    description: "Solid 90-day physical transformation runway. Save over 42% compared to monthly renewal.",
    features: [
      "Everything included in 1 Month Pass",
      "Initial fitness assessment & workout routine check",
      "Full access across all operational hours & batches",
      "Access to Ladies Only Batch (2 PM – 4 PM)",
      "General trainer floor spotting & guidance",
      "Free locker usage during workout sessions"
    ],
    highlighted: false,
    ctaText: "Choose 3 Months Pass"
  },
  {
    id: "month-6",
    duration: "6 Months",
    price: "₹8,000",
    priceNumeric: 8000,
    period: "Half-Yearly Pass (₹1,333/mo)",
    badge: "Popular Choice",
    taxNote: "GST Included",
    description: "Sustained muscle building & fat loss consistency with exceptional monthly cost efficiency.",
    features: [
      "Everything included in 3 Months Pass",
      "Mid-term physique progress check-in",
      "Unrestricted gym access 7 days a week",
      "Access to Ladies Only Batch (2 PM – 4 PM)",
      "Continuous form correction by on-duty floor trainers",
      "Locker & changing room amenities included"
    ],
    highlighted: true,
    ctaText: "Choose 6 Months Pass"
  },
  {
    id: "annual",
    duration: "Annual",
    price: "₹12,000",
    priceNumeric: 12000,
    period: "12 Months All-Access (₹1,000/mo)",
    badge: "Best Overall Value",
    taxNote: "GST Included",
    description: "Our premier individual package. Unlimited year-round lifting for just ₹1,000 per month.",
    features: [
      "Unlimited 365-day access to all gym equipment",
      "Lowest monthly breakdown (only ₹1,000/month)",
      "Full access to daily 6 AM – 12 AM + Ladies Batch",
      "Ongoing trainer guidance & routine revisions",
      "Complimentary locker & changing amenities",
      "Highest priority support at reception desk"
    ],
    highlighted: false,
    ctaText: "Choose Annual Pass"
  },
  {
    id: "annual-couples",
    duration: "Annual (Couples)",
    price: "₹10,000",
    priceNumeric: 10000,
    period: "Per Person • Annual Duo Package",
    badge: "Duo Special",
    taxNote: "GST Included",
    description: "Train together and save. Exclusive package rate for couples and workout partners enrolling together.",
    features: [
      "Discounted rate of ₹10,000 per person for full year",
      "Unlimited 12-month access for both members",
      "Train together anytime during operational hours",
      "Ladies Only Batch access (2 PM – 4 PM)",
      "General floor guidance for both lifters",
      "Lockers, AC comfort, and premium equipment access"
    ],
    highlighted: false,
    ctaText: "Claim Couple Package"
  }
];

/**
 * PERSONAL TRAINING (ALTERNATE DAYS)
 * All Personal trainer plans are monthly.
 */
export const PERSONAL_TRAINING_PLANS = [
  {
    id: "pt-gold",
    tier: "Gold",
    price: "₹6,000",
    period: "Monthly • Alternate Days",
    badge: "Form & Foundation",
    focus: "Basic Training & Form Correction",
    description: "Designed for beginners who want direct trainer supervision to master correct lifting form, prevent injury, and establish strong workout habits.",
    features: [
      "Personal trainer coaching on alternate days (3 days/week)",
      "Fundamental movement screening & posture audit",
      "Hands-on exercise form correction on every rep",
      "Safe introduction to free weights, barbells & machines",
      "Direct injury prevention and joint-safe cues",
      "Monthly progress tracking & check-in"
    ],
    highlighted: false,
    color: "#eab308"
  },
  {
    id: "pt-diamond",
    tier: "Diamond",
    price: "₹8,000",
    period: "Monthly • Alternate Days",
    badge: "Most Popular PT",
    focus: "Personalized Workout & Progress Tracking",
    description: "Structured personalized workout program tailored specifically to your physique goals with rigorous milestone measurements and body recomposition tracking.",
    features: [
      "Personal trainer coaching on alternate days (3 days/week)",
      "Custom-tailored progressive workout routine",
      "Weekly body composition & measurement tracking",
      "Targeted fat loss or muscle hypertrophy protocols",
      "Bi-weekly program progression & intensity adjustments",
      "Nutritional recommendations & macro guidance"
    ],
    highlighted: true,
    color: "#38bdf8"
  },
  {
    id: "pt-platinum",
    tier: "Platinum",
    price: "₹11,000",
    period: "Monthly • Alternate Days",
    badge: "Elite Transformation",
    focus: "Advanced Training & Goal-Oriented Workouts",
    description: "Our highest level of personalized coaching. Advanced periodization, high-intensity push, meticulous technique refinement, and complete accountability for rapid physical transformation.",
    features: [
      "Senior personal trainer coaching on alternate days",
      "Advanced periodization & progressive overload scheme",
      "Comprehensive body recomposition & performance milestones",
      "Detailed nutrition planning & meal timetable advice",
      "Continuous direct coach accountability & WhatsApp access",
      "Rapid, elite-level aesthetic & strength transformation"
    ],
    highlighted: false,
    color: "#f43f5e"
  }
];

export const TIMETABLE_SUMMARY = [
  {
    label: "Daily General Access",
    hours: "6:00 AM – 12:00 AM (Midnight)",
    days: "Monday through Saturday",
    note: "18 hours open daily for early bird lifters, shift workers & late-night iron lovers"
  },
  {
    label: "Ladies Only Batch",
    hours: "2:00 PM – 4:00 PM",
    days: "Daily (Mon – Sat)",
    note: "Dedicated private women-only hours with comfortable, empowering environment"
  },
  {
    label: "Sunday Evening Session",
    hours: "6:00 PM – 10:00 PM",
    days: "Sundays",
    note: "Focused evening session to reset and prepare for the upcoming week"
  }
];

export const TRAINING_ZONES = [
  {
    id: "free-weights",
    title: "Free Weights & Dumbbells",
    tag: "Strength Bay",
    description: "Complete array of heavy free weights, Olympic barbells, flat/incline/decline benches, and power cages for progressive compound lifting.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    features: ["Heavy dumbbells with non-slip grips", "Reinforced Olympic squat cages", "Flat, incline & decline press stations"]
  },
  {
    id: "machines",
    title: "Resistance & Cables",
    tag: "Hypertrophy",
    description: "Multi-station dual adjustable cable crossover systems, seated cable rows, lat pull-downs, chest press, and targeted lower-body machines.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
    features: ["Dual adjustable pulley cable systems", "Biomechanical chest & shoulder press", "Leg press, hack squat & leg extension"]
  },
  {
    id: "cardio",
    title: "Cardio Fleet",
    tag: "Conditioning",
    description: "Commercial motorized treadmills with responsive cushioning, elliptical cross-trainers, and spin bikes to shred fat and boost stamina.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    features: ["Motorized running decks with incline", "Low-impact elliptical trainers", "High-cadence spin bicycles"]
  },
  {
    id: "ladies",
    title: "Dedicated Ladies Only Batch",
    tag: "2:00 PM – 4:00 PM",
    description: "Daily dedicated women-only window (2 PM – 4 PM) offering an empowering, private, and fully supportive space for female fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    features: ["Private 2-hour daily batch exclusively for women", "Comfortable, respectful and welcoming environment", "Full access to strength, cardio and floor guidance"]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "hours",
    tag: "18 Hours Daily",
    title: "Open Daily 6:00 AM – 12:00 AM (Midnight)",
    description: "Conveniently located in Nehru Nagar, Kurla. Our 18-hour daily schedule gives you unmatched freedom to train before work, during the afternoon, or late at night.",
    points: [
      "Daily open 6:00 AM until 12:00 AM Midnight",
      "Dedicated Ladies Only batch daily from 2:00 PM – 4:00 PM",
      "Sunday evening sessions from 6:00 PM – 10:00 PM"
    ]
  },
  {
    id: "coaching",
    tag: "Certified Trainers",
    title: "General Guidance + Alternate-Day Personal Training",
    description: "Every standard membership includes floor guidance and spotting. Want dedicated 1-on-1 coaching? Choose Gold, Diamond, or Platinum monthly personal training.",
    points: [
      "Floor instructors always on shift to check form and spot lifts",
      "Structured Gold (₹6k), Diamond (₹8k), Platinum (₹11k) 1-on-1 PT",
      "Safe, injury-preventative progression protocols"
    ]
  },
  {
    id: "hardware",
    tag: "Clean & Air Conditioned",
    title: "100% Climate-Controlled Training Floor",
    description: "Beat Mumbai's humidity with powerful air conditioning, clean rubberized shock-absorbing flooring, sanitized equipment stations, and private lockers.",
    points: [
      "Olympic power cages, heavy dumbbells, and multi-cable stations",
      "Commercial cardio deck (motorized treadmills, cross trainers)",
      "Daily sanitized machines, clean washrooms, and drinking water"
    ]
  },
  {
    id: "value",
    tag: "Clear Pricing",
    title: "Transparent Rates with GST Included",
    description: "Straightforward membership pricing with zero surprise admission fees. Monthly (₹3,500), Quarterly (₹6,000), Half-Yearly (₹8,000), Annual (₹12,000), and Couple options.",
    points: [
      "GST included in all published prices — what you see is what you pay",
      "Annual pass breaks down to only ₹1,000 per month",
      "Annual Couple Pass for only ₹10,000 per person"
    ]
  }
];

export const TRAINERS = [
  {
    id: "trainer-1",
    name: "Sameer Shaikh",
    role: "Head Fitness Coach & Transformation Specialist",
    specialty: "Hypertrophy, Barbell Lifts, Body Recomposition",
    bio: "Over 8 years of premier coaching experience in Mumbai. Has guided 300+ clients through dramatic physique transformations, powerlifting milestones, and sustainable lifestyle changes.",
    experience: "8+ Years Experience",
    certs: "Certified Master Trainer • K11 Sports Sciences",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    quote: "True transformation isn't just dropping weight; it's building lifelong physical strength and unshakable discipline."
  },
  {
    id: "trainer-2",
    name: "Rohan Sawant",
    role: "Strength & Conditioning Specialist",
    specialty: "Fat Loss Circuits, Functional Training, Core Power",
    bio: "Focuses on high-yield metabolic conditioning, biomechanical correction, and functional agility designed to keep busy working professionals injury-free and energized.",
    experience: "6+ Years Experience",
    certs: "Certified Strength Specialist • BFX Academy",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    quote: "Move with intent, lift with precision, and the physical results will naturally follow."
  },
  {
    id: "trainer-3",
    name: "Ayesha Khan",
    role: "Women's Fitness & Nutrition Coach",
    specialty: "Female Toning, Posture Rehab, Diet & Macro Planning",
    bio: "Leads our daily Ladies Only batch (2 PM – 4 PM). Dedicated to helping female lifters feel confident, strong, and empowered on the gym floor.",
    experience: "5+ Years Experience",
    certs: "Certified Personal Trainer & Sports Nutritionist",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    quote: "Strength training empowers women. I make sure every beginner feels welcomed, respected, and motivated."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Faizan Sayed",
    role: "Kurla Resident",
    tenure: "Member for 1 Year",
    rating: 5,
    result: "Gained 6kg Lean Muscle",
    quote: "The 6:00 AM to 12:00 AM timing is unbelievable for anyone working late shifts. The floor coaches actually guide you with your form without constantly nagging you to buy extras. The best gym in Nehru Nagar Kurla.",
    focus: "Strength & Hypertrophy"
  },
  {
    id: "test-2",
    name: "Pooja Sharma",
    role: "Ladies Batch Member",
    tenure: "Member for 8 Months",
    rating: 5,
    result: "Lost 11kg & Fixed Posture",
    quote: "The 2:00 PM to 4:00 PM Ladies Only batch is so peaceful, respectful, and motivating. Coach Ayesha pays attention to every movement. In 8 months, I lost 11 kilos and feel stronger than ever.",
    focus: "Ladies Only & PT Diamond"
  },
  {
    id: "test-3",
    name: "Aditya Kulkarni",
    role: "Annual Member",
    tenure: "Member for 2 Years",
    rating: 5,
    result: "160kg Deadlift PR",
    quote: "Annual membership at ₹12,000 with GST is incredible value for an AC gym in Kurla. Proper Olympic barbells, heavy dumbbells, and power racks that can take serious weight.",
    focus: "Powerlifting & Hypertrophy"
  }
];

export const FAQS = [
  {
    q: "What are the exact operating timings of The Fitness Hub Kurla?",
    a: "We are open 7 days a week: Daily from 6:00 AM to 12:00 AM (Midnight), with a special Ladies Only Batch daily from 2:00 PM to 4:00 PM, and Sundays from 6:00 PM to 10:00 PM."
  },
  {
    q: "What are the standard membership charges?",
    a: "Our standard gym access rates (GST included) are: 1 Month for ₹3,500, 3 Months for ₹6,000, 6 Months for ₹8,000, Annual for ₹12,000 (just ₹1,000/mo), and an Annual Couples Package at ₹10,000 per person."
  },
  {
    q: "How does Personal Training work and what are the plans?",
    a: "All personal training plans are monthly and conducted on alternate days (3 days a week) under dedicated 1-on-1 coach supervision: Gold (₹6,000/mo for basic training & form correction), Diamond (₹8,000/mo for personalized workout & progress tracking), and Platinum (₹11,000/mo for advanced training with detailed guidance & goal-oriented workouts)."
  },
  {
    q: "Is there a dedicated Ladies Only batch?",
    a: "Yes! Every day from 2:00 PM to 4:00 PM, our training floor is reserved exclusively for women, providing a private, secure, and supportive atmosphere guided by certified female trainers."
  },
  {
    q: "Where exactly is The Fitness Hub located in Kurla?",
    a: "We are located at First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla, Mumbai – 400024. Just 3 minutes walking from Kurla Railway Station (East). You can find us directly on Google Maps at https://maps.app.goo.gl/3xaNj1CDWH3zzTfDA?g_st=ic"
  },
  {
    q: "How can I book a facility visit or start my membership?",
    a: "You can click 'Book Free Club Visit' on our website or directly message or call our reception desk at +91 81088 84757. We'll be happy to show you around the training floor."
  }
];
