// Mock data for the Alumni Management System

export interface Post {
  id: string;
  author: string;
  authorRole: string;
  date: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "workshop" | "meeting" | "hackathon" | "webinar";
  description: string;
  attendees: number;
}

export interface Alumni {
  id: string;
  name: string;
  batch: string;
  department: string;
  job: string;
  company: string;
  linkedin: string;
  photo: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
}

export interface Scholarship {
  id: string;
  title: string;
  eligibility: string;
  deadline: string;
  amount: string;
  description: string;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    authorRole: "Alumni, Class of 2018",
    date: "2 hours ago",
    title: "Internship Opportunity at Tech Corp",
    content: "Hey everyone! We're hiring summer interns at Tech Corp. Looking for passionate students in CS and IT. DM me for details!",
    likes: 24,
    comments: 8,
  },
  {
    id: "2",
    author: "Michael Chen",
    authorRole: "Student, Final Year",
    date: "5 hours ago",
    title: "Hackathon Winners Announced!",
    content: "Congratulations to team CodeCrafters for winning the Annual Tech Hackathon! Amazing projects this year.",
    likes: 45,
    comments: 12,
  },
  {
    id: "3",
    author: "Dr. Emily Roberts",
    authorRole: "Faculty Mentor",
    date: "1 day ago",
    title: "Research Paper Publication Tips",
    content: "Planning to publish your research? Join our workshop on academic writing this Friday at 3 PM in the library.",
    likes: 18,
    comments: 5,
  },
];

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Career Development Workshop",
    date: "2025-11-15",
    location: "Main Auditorium",
    type: "workshop",
    description: "Learn resume building, interview skills, and networking strategies from industry experts.",
    attendees: 120,
  },
  {
    id: "2",
    title: "Alumni Meetup 2025",
    date: "2025-11-20",
    location: "Campus Grounds",
    type: "meeting",
    description: "Annual alumni gathering with networking opportunities and campus tour.",
    attendees: 250,
  },
  {
    id: "3",
    title: "Tech Innovation Hackathon",
    date: "2025-12-01",
    location: "Computer Science Building",
    type: "hackathon",
    description: "24-hour coding challenge with prizes worth $10,000. Form teams of 4.",
    attendees: 80,
  },
  {
    id: "4",
    title: "Industry Insights Webinar",
    date: "2025-11-18",
    location: "Online",
    type: "webinar",
    description: "Leaders from top tech companies share insights on emerging technologies.",
    attendees: 300,
  },
];

export const mockAlumni: Alumni[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    batch: "2018",
    department: "Computer Science",
    job: "Senior Software Engineer",
    company: "Google",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "2",
    name: "Michael Chen",
    batch: "2019",
    department: "Information Technology",
    job: "Product Manager",
    company: "Microsoft",
    linkedin: "https://linkedin.com/in/michaelchen",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: "3",
    name: "Priya Sharma",
    batch: "2017",
    department: "Electronics",
    job: "Data Scientist",
    company: "Amazon",
    linkedin: "https://linkedin.com/in/priyasharma",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    id: "4",
    name: "David Wilson",
    batch: "2020",
    department: "Computer Science",
    job: "Full Stack Developer",
    company: "Meta",
    linkedin: "https://linkedin.com/in/davidwilson",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: "5",
    name: "Emma Rodriguez",
    batch: "2016",
    department: "Mechanical Engineering",
    job: "Engineering Manager",
    company: "Tesla",
    linkedin: "https://linkedin.com/in/emmarodriguez",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "6",
    name: "James Lee",
    batch: "2019",
    department: "Information Technology",
    job: "DevOps Engineer",
    company: "Netflix",
    linkedin: "https://linkedin.com/in/jameslee",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "Tech Corp",
    location: "San Francisco, CA",
    type: "Internship",
    postedDate: "2 days ago",
    description: "Looking for passionate CS students to join our summer internship program. Work on real projects with mentorship.",
  },
  {
    id: "2",
    title: "Data Analyst",
    company: "Analytics Inc",
    location: "Remote",
    type: "Full-time",
    postedDate: "1 week ago",
    description: "Join our data team to analyze trends and create insights for Fortune 500 clients.",
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "StartupHub",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "3 days ago",
    description: "Build beautiful user interfaces with React and modern web technologies.",
  },
];

export const mockScholarships: Scholarship[] = [
  {
    id: "1",
    title: "Merit-Based Excellence Scholarship",
    eligibility: "GPA above 3.5, All departments",
    deadline: "2025-12-15",
    amount: "$5,000",
    description: "Awarded to students demonstrating academic excellence and leadership potential.",
  },
  {
    id: "2",
    title: "Tech Innovation Grant",
    eligibility: "CS/IT students with research projects",
    deadline: "2025-11-30",
    amount: "$3,000",
    description: "Support innovative technology research and development projects.",
  },
  {
    id: "3",
    title: "Women in Engineering Award",
    eligibility: "Female students in Engineering",
    deadline: "2025-12-20",
    amount: "$4,000",
    description: "Encouraging women to pursue careers in engineering fields.",
  },
];

export const mockStats = {
  totalStudents: 1245,
  totalAlumni: 3890,
  totalEvents: 24,
  totalPosts: 156,
};
