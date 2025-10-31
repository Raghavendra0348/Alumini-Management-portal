import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { JobCard } from "@/components/cards/JobCard";
import { mockJobs } from "@/data/mockData";

const StudentJobs = () => {
  const sidebarItems = [
    { label: "Home", href: "/student/dashboard", icon: Home },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Alumni", href: "/student/alumni", icon: Users },
    { label: "Events", href: "/student/events", icon: Calendar },
    { label: "Settings", href: "/student/settings", icon: Settings },
    { label: "Help", href: "/student/help", icon: HelpCircle },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Student Portal" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Jobs & Internships</h1>
              <p className="text-muted-foreground">
                Discover opportunities shared by alumni
              </p>
            </div>

            <div className="space-y-4">
              {mockJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentJobs;
