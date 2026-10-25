/**
 * The Fitness Hub by AVM Fitness Group (Kurla East, Mumbai)
 * 
 * Integrated real gym content, address, timings, phone, and Instagram details
 * from @fitnesshubkurla with high-performance athletic UI.
 */

export const GYM_INFO = {
  name: "The Fitness Hub",
  subtitle: "By AVM Fitness Group",
  fullName: "The Fitness Hub by AVM Fitness Group",
  hubName: "The Fitness Hub",
  location: "Nehru Nagar, Kurla East, Mumbai",
  tagline: "Kurla East's Premier Strength & Transformation Club",
  shortDescription: "A high-energy, air-conditioned training facility in Nehru Nagar, Kurla East (Mumbai). Offering advanced strength equipment, certified personal coaching, cardio decks, and guaranteed fat-loss transformations.",
  
  contact: {
    building: "First Floor, Serene Shelter, Mass Building, B Wing",
    landmark: "Nehru Nagar, Near Kurla Railway Station (East)",
    area: "Kurla East",
    city: "Mumbai, Maharashtra",
    pincode: "400024",
    fullAddress: "First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla East, Mumbai, Maharashtra 400024",
    phone: "+91 81088 84757",
    whatsapp: "+91 81088 84757",
    whatsappLink: "https://wa.me/918108884757?text=Hello%20Fitness%20Hub%20Kurla%2C%20I%20would%20like%20to%20inquire%20about%20gym%20membership%20and%20book%20a%20free%20trial%20session.",
    email: "fitnesshubkurla@gmail.com",
    hoursWeekday: "Monday – Saturday: 6:00 AM – 11:30 PM",
    hoursSunday: "Sunday: 6:00 AM – 10:00 PM",
    hoursSummary: "Open 7 Days a Week • Extended 6:00 AM to 11:30 PM Timing"
  },

  socials: {
    instagram: "https://www.instagram.com/fitnesshubkurla",
    instagramHandle: "@fitnesshubkurla",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/918108884757"
  }
};

export const PROGRAMS = [
  {
    id: "strength",
    title: "Heavy Strength & Hypertrophy",
    category: "Strength",
    subtitle: "Free-weight mastery, Olympic barbells & heavy dumbbells",
    description: "Built for muscle hypertrophy and raw power. Full access to heavy dumbbell bays up to 45kg, power cages, incline/flat Olympic benches, leg presses, and multi-station cable machines.",
    badge: "Core Discipline",
    highlights: ["Olympic platforms & calibrated plates", "Heavy dumbbell bays (2.5kg – 45kg)", "Form correction by certified floor coaches"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    suitableFor: "Anyone aiming to build lean muscle, increase density, or master heavy compound lifts."
  },
  {
    id: "personal-training",
    title: "1-on-1 Certified Personal Coaching",
    category: "Coaching",
    subtitle: "Custom workout & nutrition roadmap for transformation",
    description: "Tailored coaching by certified fitness trainers in Kurla. Includes body composition tracking, customized workout schedules, nutrition planning, and weekly accountability checks.",
    badge: "Fast Results",
    highlights: ["Goal-specific diet and macro guidelines", "Dedicated 1-on-1 coach supervision during sets", "Rapid fat loss & muscle gain milestones"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    suitableFor: "Beginners needing guidance, busy executives, and those aiming for fast physical transformations."
  },
  {
    id: "fat-loss-conditioning",
    title: "Fat-Loss & HIIT Conditioning",
    category: "Conditioning",
    subtitle: "High-burn metabolic intervals & aerobic endurance",
    description: "High-intensity cardio circuits combining motorized treadmills, cross trainers, spin bikes, battle ropes, and kettlebells to boost stamina and accelerate fat burning.",
    badge: "High Burn",
    highlights: ["Commercial cardio deck with heart monitoring", "High-energy fat shred intervals", "Metabolic conditioning with zero joint strain"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    suitableFor: "Cardio enthusiasts, weight loss seekers, and cardiovascular fitness."
  },
  {
    id: "functional",
    title: "Cross-Training & Functional Agility",
    category: "Functional",
    subtitle: "Multi-joint core stability, plyometrics, and mobility",
    description: "Functional fitness protocols utilizing medicine balls, resistance bands, suspension straps, and plyo platforms to develop athletic movement and flexibility.",
    badge: "Athletic",
    highlights: ["Core strengthening & posture correction", "Dynamic agility and rotational power drills", "Joint flexibility & active recovery routines"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    suitableFor: "Individuals wanting mobility, injury prevention, and everyday functional agility."
  },
  {
    id: "group-classes",
    title: "Group Fitness & Abs Blast",
    category: "Community",
    subtitle: "High-morale team sessions & core conditioning",
    description: "Coach-led group sessions targeting abdominal definition, endurance circuits, and functional team challenges. High energy and great member camaraderie.",
    badge: "Community",
    highlights: ["Targeted 30-min abdominal & core blast", "Weekend group team challenges", "Supportive, motivating gym atmosphere"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80",
    suitableFor: "Lifters who thrive on team energy and group motivation."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "hours",
    tag: "Extended Timings",
    title: "Open 6:00 AM to 11:30 PM (7 Days a Week)",
    description: "Conveniently located in Nehru Nagar, Kurla East — just minutes from Kurla Station. Our extended 17.5-hour operational schedule accommodates early morning lifters and late evening commuters alike.",
    points: [
      "Open Monday to Saturday 6:00 AM – 11:30 PM",
      "Open Sunday 6:00 AM – 10:00 PM",
      "Zero rush: Train at your own preferred time window"
    ]
  },
  {
    id: "coaching",
    tag: "Certified Trainers",
    title: "Hands-On Guidance on Every Shift",
    description: "Certified trainers are always active on the gym floor to help you with correct form, proper dumbbell selection, and workout routine adjustments without high-pressure upselling.",
    points: [
      "Certified personal trainers with proven client transformations",
      "Complimentary movement screening & beginner orientation",
      "Supportive environment for male and female members"
    ]
  },
  {
    id: "hardware",
    tag: "Equipment & Floor",
    title: "Full Air-Conditioned Training Zone",
    description: "Beat the Mumbai heat and humidity with fully air-conditioned interiors, sanitized workout stations, rubberized drop flooring, and clean changing rooms with secure lockers.",
    points: [
      "Heavy dumbbell bays up to 45kg and Olympic barbells",
      "Modern cardio suite (treadmills, ellipticals, bikes)",
      "Daily sanitized equipment & hygienic changing amenities"
    ]
  },
  {
    id: "value",
    tag: "Value & Transparency",
    title: "Budget-Friendly Plans With Zero Hidden Traps",
    description: "Honest, straightforward pricing with monthly, quarterly, half-yearly, and annual options. Enjoy full gym access with no forced registration penalties or hidden fees.",
    points: [
      "Transparent fee structures with student and couple discounts",
      "Complimentary trial session before taking membership",
      "Direct WhatsApp desk (+91 81088 84757) for instant assistance"
    ]
  }
];

export const TRAINERS = [
  {
    id: "trainer-1",
    name: "Sameer Shaikh",
    role: "Head Fitness Coach & Transformation Specialist",
    specialty: "Hypertrophy, Barbell Lifts, Body Recomposition",
    bio: "Over 8 years of coaching experience in Mumbai. Has guided 300+ clients through dramatic physique transformations and strength milestones.",
    experience: "8+ Years Experience",
    certsPlaceholder: "Certified Fitness Coach (K11 / BFX)",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trainer-2",
    name: "Rohan Sawant",
    role: "Strength & Conditioning Coach",
    specialty: "Fat Loss Circuits, Functional Training, Core Power",
    bio: "Focuses on high-yield fat burning protocols, mobility drills, and cardiovascular endurance tailored to busy work schedules.",
    experience: "6+ Years Experience",
    certsPlaceholder: "Certified Strength Specialist",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trainer-3",
    name: "Ayesha Khan",
    role: "Female Fitness & Nutrition Coach",
    specialty: "Women's Fitness, Toning, Lifestyle & Diet Planning",
    bio: "Dedicated to helping women build strength, tone up, and adopt sustainable lifestyle habits in a comfortable, supportive environment.",
    experience: "5+ Years Experience",
    certsPlaceholder: "Certified Personal Trainer & Nutritionist",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trainer-4",
    name: "Imran Ansari",
    role: "Cardio & Group Training Instructor",
    specialty: "HIIT Circuits, Stamina Building, Functional Agility",
    bio: "Leads our high-octane cardio sessions and core conditioning classes with infectious energy and structured pacing.",
    experience: "5+ Years Experience",
    certsPlaceholder: "Certified Functional Trainer",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80"
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: "starter",
    name: "Monthly Gym Pass",
    badge: "Flexible Access",
    idealFor: "Ideal for lifters who prefer month-to-month flexibility without long commitments",
    pricingNote: "Full gym access with zero lock-in contracts",
    pricePlaceholder: "₹ Contact for Current Fee",
    period: "billed monthly",
    features: [
      "Full access to strength, free-weight & cardio zones",
      "Open access from 6:00 AM to 11:30 PM",
      "Complimentary locker and changing room amenities",
      "Initial gym floor walkthrough & safety orientation",
      "Clean, air-conditioned workout environment"
    ],
    highlighted: false,
    ctaText: "Inquire on WhatsApp"
  },
  {
    id: "performance",
    name: "Quarterly / Annual All-Access",
    badge: "Most Popular",
    idealFor: "Best value for regular gym-goers committed to serious physical transformation",
    pricingNote: "Includes diet guidance chart & progress check",
    pricePlaceholder: "₹ Best Value Package",
    period: "quarterly / half-yearly / annual",
    features: [
      "Everything included in Monthly Pass",
      "Free general diet chart & macro guidance",
      "Monthly body composition and fat-percentage checkup",
      "Access to all group fitness & abs sessions",
      "Special discounts on personal training add-ons"
    ],
    highlighted: true,
    ctaText: "Claim Package Offer"
  },
  {
    id: "elite",
    name: "1-on-1 Personal Training",
    badge: "Guaranteed Results",
    idealFor: "Dedicated individuals wanting direct coach accountability and faster results",
    pricingNote: "Custom sessions (12 / 24 / 36 sessions packages)",
    pricePlaceholder: "₹ Custom Quote",
    period: "dedicated certified coach",
    features: [
      "Dedicated 1-on-1 coach during your workout sessions",
      "Customized exercise programming for your specific body type",
      "Personalized nutrition & calorie tracking plan",
      "Weekly progress photos & weight tracking",
      "High accountability with direct coach WhatsApp support"
    ],
    highlighted: false,
    ctaText: "Book PT Consultation"
  }
];

export const SCHEDULE_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const SCHEDULE_CLASSES = {
  Monday: [
    { time: "06:30 - 07:30 AM", name: "Early Bird Barbell & Chest", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "08:30 - 09:30 AM", name: "Fat-Burn Cardio Blast", category: "Conditioning", coach: "Imran Ansari", level: "Intermediate", spots: "Open" },
    { time: "05:30 - 06:15 PM", name: "Evening Core & Abs Shred", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" },
    { time: "07:30 - 08:30 PM", name: "Peak Hour Heavy Back & Arms", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:30 - 10:30 PM", name: "Late Night Iron Pump", category: "Strength", coach: "Rohan Sawant", level: "All Levels", spots: "Open" }
  ],
  Tuesday: [
    { time: "06:30 - 07:30 AM", name: "Leg Day Foundation & Squats", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:00 - 10:00 AM", name: "Women's Toning & Conditioning", category: "Coaching", coach: "Ayesha Khan", level: "All Levels", spots: "Open" },
    { time: "06:00 - 07:00 PM", name: "HIIT Cross-Training Circuit", category: "Conditioning", coach: "Imran Ansari", level: "Intermediate", spots: "Open" },
    { time: "07:30 - 08:30 PM", name: "Shoulder & Trap Hypertrophy", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:30 - 10:30 PM", name: "Night Owl Calisthenics & Core", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" }
  ],
  Wednesday: [
    { time: "06:30 - 07:30 AM", name: "Deadlift & Pull Protocols", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "08:30 - 09:30 AM", name: "Cardio Cross-Trainer Intervals", category: "Conditioning", coach: "Imran Ansari", level: "All Levels", spots: "Open" },
    { time: "06:00 - 07:00 PM", name: "Functional Core Stability", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" },
    { time: "07:30 - 08:30 PM", name: "Biceps, Triceps & Forearms", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:30 - 10:30 PM", name: "Late Night Mobility & Recovery", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" }
  ],
  Thursday: [
    { time: "06:30 - 07:30 AM", name: "Chest & Triceps Push Circuit", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:00 - 10:00 AM", name: "Glutes & Lower Body Tone", category: "Coaching", coach: "Ayesha Khan", level: "All Levels", spots: "Open" },
    { time: "06:00 - 07:00 PM", name: "Battle Rope & Kettlebell HIIT", category: "Conditioning", coach: "Imran Ansari", level: "Intermediate", spots: "Open" },
    { time: "07:30 - 08:30 PM", name: "Heavy Barbell Shoulder Press", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:30 - 10:30 PM", name: "Late Night Open Gym Support", category: "Strength", coach: "Rohan Sawant", level: "All Levels", spots: "Open" }
  ],
  Friday: [
    { time: "06:30 - 07:30 AM", name: "Full Body Strength Complex", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "08:30 - 09:30 AM", name: "Endurance Treadmill & Sleds", category: "Conditioning", coach: "Imran Ansari", level: "All Levels", spots: "Open" },
    { time: "06:00 - 07:00 PM", name: "Friday Abs & Obliques Blast", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" },
    { time: "07:30 - 08:45 PM", name: "Friday Night Lights Pump Session", category: "Strength", coach: "Sameer & Rohan", level: "All Levels", spots: "Open" }
  ],
  Saturday: [
    { time: "07:00 - 08:15 AM", name: "Weekend Warrior Barbell Blitz", category: "Strength", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" },
    { time: "09:00 - 10:15 AM", name: "High-Energy Fat Shred Class", category: "Conditioning", coach: "Imran Ansari", level: "All Levels", spots: "Open" },
    { time: "06:00 - 07:15 PM", name: "Community Team Challenge", category: "Functional", coach: "Rohan Sawant", level: "All Levels", spots: "Open" }
  ],
  Sunday: [
    { time: "07:00 - 08:30 AM", name: "Sunday Stamina & Aerobic Run", category: "Conditioning", coach: "Imran Ansari", level: "All Levels", spots: "Open" },
    { time: "09:00 - 11:00 AM", name: "Open Gym Coach Drop-In", category: "Strength", coach: "Rohan Sawant", level: "Self-Paced", spots: "Open" },
    { time: "05:00 - 07:00 PM", name: "Active Recovery & Stretching", category: "Functional", coach: "Sameer Shaikh", level: "All Levels", spots: "Open" }
  ]
};

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Heavy Dumbbell & Free-Weight Bay",
    category: "Strength Zone",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80",
    description: "Wide selection of dumbbells up to 45kg with ergonomic grip and benches."
  },
  {
    id: "gal-2",
    title: "Olympic Barbell & Squat Stations",
    category: "Strength Zone",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
    description: "Reinforced power racks and calibrated steel plates for heavy compound lifts."
  },
  {
    id: "gal-3",
    title: "Motorized Treadmills & Cardio Deck",
    category: "Cardio",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    description: "Commercial-grade running decks, elliptical cross trainers, and spin bikes."
  },
  {
    id: "gal-4",
    title: "Cross-Training & Functional Turf",
    category: "Functional Area",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    description: "Battle ropes, medicine balls, kettlebells, and plyo platforms."
  },
  {
    id: "gal-5",
    title: "1-on-1 Personal Training Zone",
    category: "Coaching",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    description: "Dedicated bays for movement assessments and supervised transformation sets."
  },
  {
    id: "gal-6",
    title: "Air-Conditioned Floor & Changing Rooms",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
    description: "Hygienic changing areas, clean washrooms, and lockers."
  }
];

export const TESTIMONIALS_SAMPLE = [
  {
    id: "test-1",
    quote: "The best gym in Kurla East. The 6 AM to 11:30 PM timing is a lifesaver for people working corporate shifts. The trainers actually guide you on proper form rather than just ignoring you.",
    rolePlaceholder: "Kurla East Resident",
    tenurePlaceholder: "Member for 1 Year",
    focus: "Strength & Muscle Gain"
  },
  {
    id: "test-2",
    quote: "I joined The Fitness Hub for weight loss and lost 9kg in 3 months with their personal training and diet advice. The floor is clean, air-conditioned, and completely beginner-friendly.",
    rolePlaceholder: "Personal Training Client",
    tenurePlaceholder: "Member for 6 Months",
    focus: "Fat Loss Transformation"
  },
  {
    id: "test-3",
    quote: "Great equipment, plenty of dumbbells so you don't have to wait, and a respectful crowd. Easily accessible from Kurla Station and Nehru Nagar bridge.",
    rolePlaceholder: "Regular Lifter",
    tenurePlaceholder: "Member for 18 Months",
    focus: "Powerlifting & Hypertrophy"
  }
];

export const FAQS = [
  {
    q: "Where exactly is the gym located in Kurla East?",
    a: "We are located at First Floor, Serene Shelter, Mass Building, B Wing, Nehru Nagar, Kurla East, Mumbai - 400024. It is just a 3-5 minute walk from Kurla Railway Station (East) and easily accessible from SG Barve Marg."
  },
  {
    q: "What are the gym operating hours?",
    a: "We are open 7 days a week with extended hours: Monday to Saturday from 6:00 AM to 11:30 PM, and Sundays from 6:00 AM to 10:00 PM. You can train early in the morning before work or late at night."
  },
  {
    q: "How can I book a Free Trial or inquire on WhatsApp?",
    a: "You can send a direct WhatsApp message to our front desk at +91 81088 84757 or fill out the enquiry form on our Contact page. Our team will schedule your free trial session immediately."
  },
  {
    q: "Are certified personal trainers available for weight loss and muscle building?",
    a: "Yes! We have certified personal trainers specializing in fat loss, muscle hypertrophy, and posture correction. Personal training packages include customized workout routines and nutritional guidance."
  },
  {
    q: "Is the gym suitable for female beginners?",
    a: "Absolutely. We maintain a respectful, safe, and motivating environment for female lifters, with female coaching guidance available and zero intimidation."
  },
  {
    q: "What amenities are provided in the gym?",
    a: "Our facility is fully air-conditioned, with heavy dumbbell bays up to 45kg, power cages, motorized cardio machines, sanitized floor areas, changing rooms, and secure locker facilities."
  }
];
