export type NavItem = {
  label: string;
  href: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  techstack: string;
  href: string;
  image: string;
};

export type ContactAction = {
  label: string;
  value: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "Reactjs",
      "Next.js",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "ASP.Net",
      "C#",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "MS SQL Server",
    ],
  },
  {
    title: "Cloud & AI",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Claude AI",
      "OpenAI",
    ],
  },
];

export const stats: Stat[] = [
  { value: "2022", label: "Started at Fujitsu" },
  { value: "2018", label: "BSIT graduate" },
  { value: "7+", label: "Years in industry roles" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Application Systems Engineer",
    company: "Fujitsu Philippines",
    period: "March 2022 - October 2025",
    summary:
      "Developed scalable software solutions and ensured system reliability through comprehensive POS testing in a high-volume environment. Led a team in enhancing a legacy platform and built an AI-powered tool while training non-technical staff to improve overall productivity.",
  },

  {
    role: "AI Coding Talent",
    company: "Freelance (Upwork|Scale AI)",
    period: "November 2023 - February 2024",
    summary:
      "Designed and delivered AI and machine learning training programs, equipping learners with practical coding skills and core technical knowledge. Continuously updated curriculum based on industry trends to ensure relevance and empower students to apply AI/ML effectively.",
  },
  {
    role: "Data Analyst | Subject Matter Expert",
    company: "Accenture Inc.",
    period: "August 2018 - February 2022",
    summary:
      "Evaluated user-generated content against strict platform policies to ensure a safe and compliant online environment while maintaining high accuracy and attention to detail. Served as an SME and technical POC, coaching team members, leading guideline discussions, and resolving issues to improve overall team performance.",
  },
  {
    role: "BS Information Technology, Infrastructure Track",
    company: "Quezon City University",
    period: "2014 - 2018",
    summary:
      "Formal foundation in IT systems, infrastructure, and problem-solving that continues to support my development work.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Earnstrack",
    description:
      "A tracking and managing business earnings, featuring dashboard views, role-based navigation, login flows, responsive sidebar behavior, and frontend structure that mirrors the current React app.",
    techstack: "Reactjs/Vite | Asp.Net/C# | PostgreSQL | Supabase | Render",
    href: "https://maynardrt.github.io/Earnstrack-Demo/earnstrack-demo.html",
    image: "/images/earnstrack-mark.svg",
  },
  {
    title: "Pomotecnica",
    description:
      "A focused Pomodoro timer web app with work, short-break, and long-break modes, built for distraction-free time management with a clean interface and simple session controls.",
    techstack: "HTML5 | CSS3 | Vanilla JavaScript",
    href: "https://pomotecnica-io.vercel.app/",
    image: "/images/pomotecnica-mark.svg",
  },
  {
    title: "Twitter | X",
    description:
      "A social feed interface clone inspired by X.com, featuring a familiar posting composer, live character counting, theme switching, and a streamlined timeline-style layout.",
    techstack: "HTML5 | CSS3 | Vanilla JavaScript",
    href: "https://twitterx-old.vercel.app/",
    image: "/images/twitterx-mark.svg",
  },
  {
    title: "TinDog",
    description:
      "A playful product landing page for a dog-matching app concept, featuring bold marketing sections, testimonials, pricing cards, and mobile app call-to-action styling.",
    techstack: "HTML5 | CSS3 | Bootstrap",
    href: "https://tindog-web.vercel.app/",
    image: "/images/tindog-mark.svg",
  },
];

export const contactActions: ContactAction[] = [
  {
    label: "Send Email",
    value: "maynard.rt97@gmail.com",
    href: "mailto:maynard.rt97@gmail.com",
  },
  {
    label: "Call",
    value: "(+63) 905-271-8474",
    href: "tel:+639052718474",
  },
  {
    label: "View Location",
    value: "Quezon City, Metro Manila, Philippines",
    href: "https://maps.google.com/?q=Quezon+City,+Metro+Manila,+Philippines",
  },
];

export const heroSummary = {
  badge: "Building modern interfaces with practical engineering discipline",
  title:
    "Hi, I'm Maynard. A software developer with a strong eye for design and user experience.",
  description:
    "I'm a self-taught developer with a strong eye for innovative design and techniques geared toward better user experience. My background across systems engineering and data work helps me build with both polish and practical structure.",
};
