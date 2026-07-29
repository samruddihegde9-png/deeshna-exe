export const profile = {
  name: "DEESHNA J SHETTY",
  title: "ACCA STUDENT · FINANCE & DATA",
  summary:
    "Motivated B.Com student pursuing ACCA and a Minor in FinTech, with a strong foundation in accounting, finance, auditing, and data analytics. Proficient in Excel, Power BI, R, and financial analysis, with an interest in leveraging data-driven insights to support business decision-making. A quick learner with excellent analytical, problem-solving, and communication skills, seeking opportunities to gain industry experience and contribute to organizational success.
",
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Aahwahan Foundation",
    role: "Mass Media Marketing Intern",
    period: "June 2025 – July 2025",
    points: [
      "Designed 15+ digital creatives and campaign posters while managing LinkedIn, Instagram, and YouTube content activities to enhance campaign engagement and outreach.",
      "Assisted in campaign planning, newsletter creation, and digital outreach initiatives by supporting content strategy and communication activities.",
      "Participated in school visits, volunteering programs, and student engagement initiatives, contributing to awareness campaigns and community interaction.",
    ],
  },
  {
    org: "RV University",
    role: "Hostel Ambassador",
    period: "July 2025 – October 2025",
    points: [
      "Coordinated hostel admissions and onboarding for students and parents.",
      "Managed parent communication, follow-ups, and accommodation inquiries.",
      "Maintained records and supported inaugural event coordination.",
    ],
  },
];

export type Work = {
  id: string;
  name: string;
  tagline: string;
  points: string[];
};

export const projects: Work[] = [
  {
    id: "research-conference",
    name: "International Research Conference 2025",
    tagline: "research presenter",
    points: [
      'Co-authored and presented the research paper: "Bridging the Gap: Challenges and Opportunities in Circular Economy Adoption for SMEs vs. Large Enterprises."',
      "Conducted sustainability and circular economy research analysis.",
    ],
  },
  {
    id: "analytica",
    name: "Analytica 3.0 & Capstone Project",
    tagline: "interactive analytics dashboard",
    points: [
      "Developed and presented an interactive analytics dashboard.",
      "Applied data visualization and business insight techniques collaboratively.",
    ],
  },
];

export const technicalSkills = [
  "Tableau",
  "Excel",
  "Power BI",
  "Google Forms",
  "Python",
  "Dashboard Development",
  "R Programming",
  "Canva",
];

export const softSkills = [
  "Communication Skills",
  "Problem Solving",
  "Presentation Skills",
  "Time Management",
  "Emotional Intelligence",
  "Leadership",
  "Team Collaboration",
  "Adaptability",
];

export const leadership = [
  "Head Volunteer — Orientation Programme",
  "SPC Coordinator — RV University",
  "Member — Rotaract Club (RV University)",
];

export const certifications = [
  "Business Analysis with Microsoft Excel",
  "Python & Pandas for Data Analysis",
  "Basics of Microsoft Power BI by uniathena",
  "Leveraging Generative AI for Business Infosys Spring Board",
  "R Programming for Beginners",
];

export const languages = ["English", "Hindi", "Kannada", "Tulu"];
