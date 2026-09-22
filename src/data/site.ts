export const site = {
  name: "ANANYA ARUN TUITION",
  tagline: "Strong Foundations. Better Results. 24+ Years of Teaching Excellence",
  phone: "7829446253",
  whatsapp: "9164833716",
  email: "ananyatuitions@gmail.com",
  area: "Global (Online) & Local",
};

export const whatsappLink = (
  text: string = "Hello! I'd like to book a free demo class.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Classes & Subjects", href: "/classes" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  { title: "Online Tuition", description: "International online tuition for students from UK, Australia, USA, Saudi Arabia, Malaysia, South Korea & more.", icon: "Monitor", accent: "violet", benefits: ["Live interactive classes", "Global reach", "Convenient from anywhere"] },
  { title: "Offline Tuition", description: "Dedicated teaching and consistent academic support in person.", icon: "House", accent: "cyan", benefits: ["Personal attention", "Better focus", "Immediate doubt clearing"] },
  { title: "Group Classes", description: "Interactive group sessions for peer learning and comprehensive subject support.", icon: "Users", accent: "blue", benefits: ["Collaborative learning", "Cost-effective", "Structured environment"] },
  { title: "Exam Preparation", description: "Expert coaching for ICSE, CBSE, State, IGCSE, IB, ISC, NIOS, and Cambridge International.", icon: "Target", accent: "orange", benefits: ["Topic-wise revision", "Practice strategies", "Progress-led preparation"] },
];

export const subjectGroups = [
  { level: "ICSE — Class 10", years: "Class 10", subjects: ["English", "Second Language", "History & Civics", "Geography", "Mathematics", "Physics", "Chemistry", "Biology", "Computer Applications/PE", "Economics", "Commercial Studies", "Environmental Science"] },
  { level: "CBSE — Class 10", years: "Class 10", subjects: ["English", "Kannada/Hindi", "Mathematics", "Science-PCB", "Social Science", "Computer Applications", "Artificial Intelligence"] },
  { level: "State Board — Class 10", years: "Class 10", subjects: ["English", "Kannada", "Mathematics", "Science", "Social Science", "Computer"] },
  { level: "PU Subjects", years: "Pre-University", subjects: ["Commerce", "Mathematics", "Accountancy", "Business Studies", "Economics", "Statistics", "Computer Applications", "Kannada", "English", "Physics", "Chemistry", "Biology", "Psychology", "Entrepreneurship", "Political science", "History", "Sociology", "Geography"] },
  { level: "Degree Commerce and Arts", years: "Degree (BCOM, BA, BBA)", subjects: ["Financial Accounting", "Basic Maths", "Management Accounting", "Corporate Accounting", "Cost Accounting", "Financial Management", "Business Economics", "Business Statistics", "Business Law", "Marketing Management", "Human Resource Management", "Income Tax", "Auditing", "Business Management", "Operations Management", "Organisational Behaviour", "Business Communication", "Entrepreneurship", "Strategic Management", "Banking & Insurance", "EnglishKannada", "Economics", "History", "Political Science", "Sociology", "Psychology", "Geography", "Journalism & Mass Communication", "Public Administration"] },
];

export const reasons = [
  ["24+ Years of Teaching Excellence", "Decades of experience in helping students reach their full potential.", "Users"],
  ["Expert Coaching", "Specialised in 10th ICSE, State, CBSE, PU Commerce and Degree Commerce & Arts.", "Focus"],
  ["International Reach", "Trusted by students from UK, Australia, USA, Saudi Arabia, Malaysia, South Korea & more.", "Monitor"],
  ["Comprehensive Subject Support", "Coaching across a wide range of subjects from school level to degree.", "BookOpen"],
  ["Consistent Academic Support", "Helping students learn with confidence and build strong foundations.", "Brain"],
];

export const testimonials = [];
