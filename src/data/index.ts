export const whatsappNumber = "13075290637";
export const phoneNumber = "+1 307-529-0637";
export const phoneLink = "tel:+13075290637";
export const businessName = "Axle Motors Diesel and Auto Repair";
export const address = "101 Ave C #4, Cheyenne, WY 82007, United States";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Axle%20Motors%20Diesel%20and%20Auto%20Repair%20101%20Ave%20C%20%234%20Cheyenne%20WY%2082007";

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = encodeURIComponent(
    "Hi Axle Motors, I want to book an appointment.\nVehicle:\nProblem:\nPreferred date/time:\nLocation:\nUrgency:"
  );
  return `https://wa.me/${whatsappNumber}?text=${message ?? defaultMessage}`;
}

export const stats = [
  { value: "4.9", suffix: "★", label: "Google Rating" },
  { value: "154", suffix: "+", label: "Reviews" },
  { value: "24/7", suffix: "", label: "Open" },
  { value: "Fast", suffix: "", label: "Emergency Help" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Diagnostics & Engine",
    services: [
      { icon: "Search", title: "Engine Diagnostic", description: "Advanced computer diagnostics to pinpoint issues fast and accurately." },
      { icon: "Wrench", title: "Engine Repair", description: "Complete engine repair and rebuilding for all vehicle types." },
      { icon: "Gauge", title: "Engine Tuning", description: "Performance tuning and optimization for diesel and gas engines." },
      { icon: "ClipboardCheck", title: "General Maintenance", description: "Routine maintenance to keep your vehicle running at peak performance." },
      { icon: "ShieldCheck", title: "Vehicle Inspection", description: "Thorough multi-point inspections for safety and reliability." },
      { icon: "FileCheck", title: "Safety Inspection", description: "Official safety inspections to ensure your vehicle meets all standards." },
      { icon: "ClipboardList", title: "Prepurchase Advice", description: "Expert vehicle evaluations before you buy — avoid costly mistakes." },
    ],
  },
  {
    category: "Brakes, Battery & Electrical",
    services: [
      { icon: "Disc", title: "Brake Service & Repair", description: "Complete brake system inspection, repair, and maintenance." },
      { icon: "RotateCw", title: "Brake Replacement", description: "Full brake pad and rotor replacement with premium parts." },
      { icon: "Battery", title: "Battery Maintenance", description: "Battery testing, cleaning, and maintenance to prevent failures." },
      { icon: "BatteryCharging", title: "Battery Replacement", description: "Fast battery replacement with proper disposal of old units." },
      { icon: "Zap", title: "Electrical Repair", description: "Wiring, alternator, starter, and full electrical system diagnostics." },
      { icon: "Droplets", title: "Oil Change", description: "Full synthetic and conventional oil changes for all vehicles." },
    ],
  },
  {
    category: "Diesel, Trucks & Trailers",
    services: [
      { icon: "Fuel", title: "Diesel Repair", description: "Specialized diesel engine repair, maintenance, and performance work." },
      { icon: "Truck", title: "Heavy Duty Trucks", description: "Complete repair services for heavy-duty and commercial trucks." },
      { icon: "Container", title: "Flatbed Trailer", description: "Trailer repair, maintenance, and inspection for all trailer types." },
      { icon: "Link", title: "Receiver Hitch", description: "Hitch installation, repair, and custom towing solutions." },
      { icon: "Container", title: "Trailer Repair", description: "Axle, brake, lighting, and structural trailer repair services." },
      { icon: "Truck", title: "Towing Support", description: "Reliable towing and recovery for cars, trucks, and heavy vehicles." },
    ],
  },
  {
    category: "Drivetrain, Suspension & Body",
    services: [
      { icon: "Cog", title: "Transmission Repair", description: "Complete transmission diagnostics, repair, and fluid service." },
      { icon: "RefreshCw", title: "Transmission Replacement", description: "Full transmission replacement with quality rebuilt or new units." },
      { icon: "Car", title: "Steering & Suspension", description: "Steering and suspension repair for smooth, safe handling." },
      { icon: "ArrowUpDown", title: "Suspension Replacement", description: "Shock, strut, and spring replacement for all vehicle types." },
      { icon: "Wind", title: "Exhaust", description: "Exhaust system repair, replacement, and performance upgrades." },
      { icon: "Shield", title: "Bumper Replacement", description: "Front and rear bumper repair and replacement services." },
      { icon: "PaintBucket", title: "Body & Trim", description: "Vehicle body repair, trim replacement, and restoration." },
      { icon: "SprayCan", title: "Powder Coated Parts", description: "Custom powder coating for durable, professional-grade finishes." },
    ],
  },
];

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  highlight?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Road Trip Customer",
    text: "I was in a pinch on my road trip and these guys got me taken care of. Messaged late at night and they had an appointment for me at 8:30 the next morning. Thanks guys!",
    rating: 5,
    highlight: true,
  },
  {
    name: "Local Driver",
    text: "Axle sets a standard for quality honest work that's unmatched in this town. I won't take my vehicles anywhere else.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Fleet Owner",
    text: "Best diesel shop in Cheyenne. They handle our entire fleet — trucks, trailers, everything. Fast turnaround, fair pricing, and they stand behind their work every time.",
    rating: 5,
  },
  {
    name: "Long-Time Customer",
    text: "I've been coming here for years. From oil changes to major engine work, they've never let me down. Honest mechanics are hard to find — these guys are the real deal.",
    rating: 5,
  },
];

export const galleryImages = [
  {
    src: "/images/2023-05-28 (1).webp",
    alt: "Diesel engine repair work by Axle Motors in Cheyenne WY",
    label: "Diesel Repair",
  },
  {
    src: "/images/2023-05-28 (2).webp",
    alt: "Truck service and maintenance by Axle Motors",
    label: "Truck Service",
  },
  {
    src: "/images/2023-05-28.webp",
    alt: "Trailer repair work completed by Axle Motors",
    label: "Trailer Work",
  },
  {
    src: "/images/2025-11-20.webp",
    alt: "Vehicle diagnostics at Axle Motors Diesel and Auto Repair",
    label: "Diagnostics",
  },
  {
    src: "/images/2026-02-28.webp",
    alt: "Brake repair service at Axle Motors Cheyenne",
    label: "Brake Repair",
  },
  {
    src: "/images/unnamed.webp",
    alt: "Vehicle maintenance and repair by Axle Motors",
    label: "Maintenance",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Message or Call Us",
    description: "Reach out anytime — 24/7. Tell us what's going on with your vehicle.",
  },
  {
    step: "02",
    title: "Tell Us Your Problem",
    description: "Describe the issue. We'll give you an honest assessment and game plan.",
  },
  {
    step: "03",
    title: "Get Diagnosed",
    description: "We diagnose the problem with professional tools and years of experience.",
  },
  {
    step: "04",
    title: "Back on the Road",
    description: "We fix it right the first time and get you moving again — fast.",
  },
];

export const painPoints = [
  { icon: "AlertTriangle", text: "Engine warning light on during a road trip" },
  { icon: "BatteryWarning", text: "Battery dies at the worst possible moment" },
  { icon: "BrakeDisc", text: "Brakes grinding with a trailer attached" },
  { icon: "Truck", text: "Diesel truck won't start on a cold morning" },
  { icon: "Clock", text: "Stranded after hours with no help in sight" },
  { icon: "Wrench", text: "Check engine light right before a big trip" },
];

export const emergencyServices = [
  "24/7 Towing & Recovery",
  "Emergency Diesel Repair",
  "Roadside Diagnostics",
  "Trailer Breakdown Help",
  "Heavy Duty Truck Support",
  "Rapid-Response Mechanic",
];
