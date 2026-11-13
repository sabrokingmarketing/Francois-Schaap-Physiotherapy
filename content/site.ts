/**
 * ALL WEBSITE TEXT AND DETAILS LIVE IN THIS ONE FILE.
 *
 * To change a phone number, a sentence or a colour, edit it here and save.
 * Lines marked "TODO" are things we still need from you. The site works
 * without them, but it will be better (and more trusted) once they are filled in.
 */

// ---------------------------------------------------------------------------
// BUSINESS BASICS
// ---------------------------------------------------------------------------

export const site = {
  name: "Francois Schaap Physiotherapy",
  shortName: "FS Physiotherapy",
  // TODO: confirm the domain you want to use (the brief suggests fsphysio.co.za).
  url: "https://www.fsphysio.co.za",
  locale: "en_ZA",
  summary:
    "Personalised, evidence-based physiotherapy in Krugersdorp that finds the real cause of your pain and helps you recover from injury and get back to the activities you enjoy.",

  phone: {
    display: "011 660 5246",
    href: "tel:+27116605246",
    international: "+27 11 660 5246",
  },

  // TODO: add your WhatsApp number. Until then the WhatsApp button uses the
  // practice phone number (011 660 5246), which only works if that number is
  // set up on WhatsApp Business. Write it in international format: 27 + the
  // number without the first 0, e.g. 27821234567.
  whatsapp: {
    number: "27116605246",
    message: "Hi Francois, I would like to book a physiotherapy appointment.",
  },

  email: "Fsphysiotherapy@gmail.com",

  address: {
    street: "2 Wildebees Street",
    suburb: "Rant-en-Dal",
    city: "Krugersdorp",
    region: "Gauteng",
    countryCode: "ZA",
    // TODO: add the postal code if you want it shown.
  },

  // TODO: add your opening hours, e.g. [{ days: "Monday to Friday", times: "07:30 to 17:00" }].
  // While this list is empty, the site says "Phone us for appointment times".
  hours: [] as { days: string; times: string }[],

  // TODO: optional. Add your Facebook, Instagram or LinkedIn links.
  social: [] as { label: string; href: string }[],

  // TODO: optional. Your HPCSA registration number and practice number.
  registration: {
    hpcsaNumber: "",
    practiceNumber: "",
  },
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  site.whatsapp.message,
)}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.suburb}, ${site.address.city}`,
)}`;

export const fullAddress = `${site.address.street}, ${site.address.suburb}, ${site.address.city}`;

// ---------------------------------------------------------------------------
// BRAND
// TODO: send your logo. These colours were chosen to suit a calm, clinical
// practice. Once we have your logo, we can match them to it.
// The same colours are also set in app/globals.css (look for "BRAND COLOURS").
// ---------------------------------------------------------------------------

export const brand = {
  primary: "#06525c", // deep teal: buttons, links, key highlights
  secondary: "#06353c", // night teal: the one dark band on each page
  accent: "#0d7480", // lighter teal: small highlights
  background: "#f7f9f8", // paper white
  text: "#0f2a2e", // near-black teal for reading
} as const;

// TODO: send your logo (PNG or SVG). Put it in /public/images/logo.png and
// set this to "/images/logo.png". Until then a text logo is shown.
export const logoSrc: string | null = null;

// ---------------------------------------------------------------------------
// PHOTOS
// TODO: send real photos. Put them in /public/images and set the paths here,
// e.g. hero: "/images/hero.jpg". Until then the site shows a clean
// text-and-colour design in these spots. Photos to take:
//   hero   - Francois treating a patient (landscape)
//   about  - a friendly portrait of Francois (portrait)
//   rooms  - the treatment room and the front of the practice
//   work   - strapping, exercise rehab, the Bioflex laser (for a gallery)
// ---------------------------------------------------------------------------

export const photos = {
  hero: null as string | null,
  heroAlt: "Francois Schaap treating a patient at his practice in Rant-en-Dal, Krugersdorp",
  about: null as string | null,
  aboutAlt: "Francois Schaap, physiotherapist in Krugersdorp",
  gallery: [] as { src: string; alt: string }[],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Francois", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// HOME PAGE
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "Physiotherapy in Rant-en-Dal, Krugersdorp",
  headline: "Move Better, Feel Stronger, Live Without Pain",
  subline:
    "Personalised, evidence-based physiotherapy in Krugersdorp, built for lasting recovery.",
  firstVisit: {
    title: "Your First Session",
    length: "45 minutes",
    points: [
      "A full assessment to find the cause",
      "Your first treatment, the same day",
      "A plan built around you",
    ],
    followUp: "Follow-ups: 30 to 45 minutes",
  },
};

export const trust = [
  { value: "11+ years", label: "of clinical practice" },
  { value: "University of Pretoria", label: "Bachelor of Physiotherapy, 2014" },
  { value: "HPCSA registered", label: "Health Professions Council of South Africa" },
  { value: "Since 2022", label: "Physiotherapist for the Randfontein Rugby Club" },
];

export const reasons = [
  {
    title: "One-On-One Care",
    text: "Every consultation and treatment plan is built around you, your body and your goals.",
  },
  {
    title: "We Treat The Cause",
    text: "Evidence-based care that looks past the symptoms to find out why it hurts.",
  },
  {
    title: "Results That Last",
    text: "A focus on long-term recovery and prevention, in a professional and friendly practice.",
  },
];

/** The big statement on the home page. Words wrapped in *stars* turn teal. */
export const statement =
  "We look for the *cause* of your pain, not just the symptoms, and give you a plan so the problem does not keep coming back.";

export const audience = {
  title: "Who We Help",
  intro:
    "If you want to move freely again and you are ready to do your part, we can help.",
  groups: [
    "Active people and athletes of all levels who want to get back to training and matches",
    "People recovering from an injury or surgery",
    "People living with chronic or joint pain",
    "Sports teams that need treatment and match-day strapping",
  ],
};

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------

export type Service = { id: string; name: string; text: string; detail?: string };
export type ServiceGroup = {
  id: string;
  title: string;
  short: string;
  intro: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "pain-and-injury",
    title: "Pain And Injury Treatment",
    short: "Pain and injury",
    intro: "Relief from pain now, and treatment for what is causing it.",
    services: [
      {
        id: "sports-injuries",
        name: "Sports Injuries",
        text: "Treatment and rehab to get you back to your sport.",
      },
      {
        id: "neck-and-back-pain",
        name: "Neck And Back Pain",
        text: "Relief now, plus treatment for the cause of the pain.",
      },
      {
        id: "joint-and-muscle-injuries",
        name: "Joint And Muscle Injuries",
        text: "Hands-on care and exercises to help you recover.",
      },
      {
        id: "chronic-pain",
        name: "Chronic Pain Management",
        text: "A clear, long-term plan for pain that won't go away.",
      },
    ],
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation After Surgery And Injury",
    short: "Rehabilitation",
    intro: "Step-by-step rehab to rebuild movement, strength and confidence.",
    services: [
      {
        id: "post-operative",
        name: "Post-Operative Rehabilitation",
        text: "Guided, step-by-step recovery after surgery.",
      },
      {
        id: "orthopaedic",
        name: "Orthopaedic Rehabilitation",
        text: "Rebuilding movement and strength after bone and joint problems.",
      },
      {
        id: "exercise-rehabilitation",
        name: "Exercise Rehabilitation",
        text: "Exercises tailored to you, to restore strength and function.",
      },
    ],
  },
  {
    id: "specialised-care",
    title: "Specialised Care",
    short: "Specialised care",
    intro: "Physiotherapy support beyond muscles and joints.",
    services: [
      {
        id: "neurological",
        name: "Neurological Conditions",
        text: "Physiotherapy support for nerve-related conditions.",
      },
      {
        id: "respiratory",
        name: "Respiratory Conditions",
        text: "Physiotherapy support for breathing-related conditions.",
      },
      {
        id: "bioflex-laser",
        name: "Wound Management With Bioflex Laser Therapy",
        text: "A non-invasive treatment that uses low-intensity laser light to stimulate the body's natural healing.",
        // TODO: paste the "Read More" and "How It Works" text from your current website here.
      },
    ],
  },
  {
    id: "sport-strapping",
    title: "Sport Strapping",
    short: "Sport strapping",
    intro: "Support for your joints and muscles before you play.",
    services: [
      {
        id: "pre-match-strapping",
        name: "Pre-Match And Sporting Activity Strapping",
        text: "Support for joints and muscles before you play.",
        detail: "15 minutes",
      },
      {
        id: "team-strapping",
        name: "Bulk Strapping For Sports Teams",
        text: "Phone us for availability and to place an order.",
      },
    ],
  },
];

export const treatmentMethods = [
  "Hands-on manual therapy",
  "Therapeutic exercise prescription",
  "Dry needling (where appropriate)",
  "Movement and posture correction",
  "Injury prevention and self-management education",
  "Strength and conditioning guidance",
];

export const conditions = [
  "Lower back pain",
  "Neck pain and headaches",
  "Shoulder injuries",
  "Knee pain",
  "Hip pain",
  "Ankle sprains",
  "Tendon injuries",
  "Arthritis",
  "Sports-related injuries",
  "Muscle strains",
  "Neurological conditions",
  "Vertigo",
  "Recovery after orthopaedic surgery",
];

export const sessions = [
  { name: "First session", length: "45 minutes", text: "A full assessment and your first treatment." },
  { name: "Follow-up sessions", length: "30 to 45 minutes", text: "Treatment and progress checks." },
  { name: "Strapping only", length: "15 minutes", text: "Pre-match or sporting activity strapping." },
];

// TODO: add session prices in Rand (written like R650), e.g. [{ name: "First session", price: "R650" }].
// While this list is empty, the site says "Phone us for current prices".
export const prices: { name: string; price: string }[] = [];

// TODO: say whether you accept medical aid, claim directly, or whether
// patients pay and claim back themselves. Leave empty to hide it.
export const medicalAid = "";

// ---------------------------------------------------------------------------
// REVIEWS
// TODO: add 3 to 5 real patient reviews, word for word, with first names and
// the patient's permission. The reviews section stays hidden until you do.
// ---------------------------------------------------------------------------

export const reviews: { name: string; text: string }[] = [];

// TODO: optional. Client logos (e.g. Randfontein Rugby Club), only with
// permission. Put them in /public/images/clients and list them here.
export const clientLogos: { name: string; src: string }[] = [];

// ---------------------------------------------------------------------------
// ABOUT FRANCOIS
// ---------------------------------------------------------------------------

export const about = {
  headline: "Meet Francois Schaap",
  intro:
    "Francois is a physiotherapist with more than 11 years of clinical practice, helping people in Krugersdorp recover from injury, reduce pain and get back to what they enjoy.",
  experience:
    "He has worked in both private practice and hospital settings. His experience covers musculoskeletal conditions, sports injuries, post-operative rehabilitation, trauma and ICU management.",
  interests: [
    "Sports physiotherapy",
    "Joint replacement rehabilitation",
    "Orthopaedic injuries",
    "Exercise-based rehabilitation",
  ],
  rugby:
    "Since 2022, Francois has been the physiotherapist for the Randfontein Rugby Club.",
  qualifications: [
    { name: "Bachelor of Physiotherapy (BPhysT)", detail: "University of Pretoria, 2014" },
    { name: "Registered with the HPCSA", detail: "Health Professions Council of South Africa" },
    { name: "Sports Physiotherapy Certificate", detail: "" },
    { name: "Certified in Dry Needling", detail: "" },
  ],
  // TODO: please confirm the year you opened your own practice.
  practiceStarted: "",
};

// ---------------------------------------------------------------------------
// FAQ (answers use only facts from the brief)
// ---------------------------------------------------------------------------

export const faqs = [
  {
    q: "How long is the first session?",
    a: "Your first session is 45 minutes. It includes a full assessment and your first treatment.",
  },
  {
    q: "How long are follow-up sessions?",
    a: "Follow-up sessions are 30 to 45 minutes, depending on what you need.",
  },
  {
    q: "What does treatment include?",
    a: "Depending on your condition, treatment may include hands-on manual therapy, exercises, dry needling (where appropriate), movement and posture correction, education on preventing injury and managing it yourself, and strength and conditioning guidance.",
  },
  {
    q: "Do you offer dry needling?",
    a: "Yes. Francois is certified in dry needling and uses it where it is appropriate for your condition.",
  },
  {
    q: "Can you strap our sports team before a match?",
    a: "Yes. Pre-match strapping takes about 15 minutes per person. For bulk strapping for a team, phone us for availability and to place an order.",
  },
  {
    q: "What is Bioflex Laser Therapy?",
    a: "It is a non-invasive treatment that uses low-intensity laser light to stimulate the body's natural healing. We use it for wound management.",
  },
  {
    q: "How much does a session cost?",
    a: `Phone us on ${site.phone.display} for current session prices.`,
  },
];

// ---------------------------------------------------------------------------
// PAGE TITLES AND DESCRIPTIONS (for Google)
// ---------------------------------------------------------------------------

export const seo = {
  home: {
    title: "Physiotherapist In Krugersdorp | Francois Schaap Physiotherapy",
    description:
      "Personalised, evidence-based physiotherapy in Rant-en-Dal, Krugersdorp. Sports injuries, back and neck pain, post-surgery rehab, dry needling and sport strapping. Call 011 660 5246.",
  },
  services: {
    title: "Physiotherapy Services In Krugersdorp",
    description:
      "Sports injury treatment, neck and back pain, post-operative and orthopaedic rehab, chronic pain, Bioflex laser therapy and sport strapping in Krugersdorp.",
  },
  about: {
    title: "About Francois Schaap, Physiotherapist",
    description:
      "Francois Schaap has more than 11 years of clinical practice, a BPhysT from the University of Pretoria and HPCSA registration. Physiotherapist for the Randfontein Rugby Club since 2022.",
  },
  contact: {
    title: "Contact And Book A Physio In Krugersdorp",
    description:
      "Book physiotherapy in Rant-en-Dal, Krugersdorp. Call 011 660 5246, WhatsApp us or email Fsphysiotherapy@gmail.com. 2 Wildebees Street, Krugersdorp.",
  },
  privacy: {
    title: "Privacy Policy (POPIA)",
    description:
      "How Francois Schaap Physiotherapy collects, uses and protects your personal information under the Protection of Personal Information Act (POPIA).",
  },
};
