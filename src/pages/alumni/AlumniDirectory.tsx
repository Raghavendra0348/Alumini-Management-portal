import { Home, User, Users, Calendar, MessageSquare, Settings, Search } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { AlumniCard } from "@/components/cards/AlumniCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockAlumni } from "@/data/mockData";
import { useState } from "react";

const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const sidebarItems = [
    { label: "Home", href: "/alumni/dashboard", icon: Home },
    { label: "My Profile", href: "/alumni/profile", icon: User },
    { label: "Alumni Network", href: "/alumni/directory", icon: Users },
    { label: "Events", href: "/alumni/events", icon: Calendar },
    { label: "Messages", href: "/alumni/messages", icon: MessageSquare },
    { label: "Settings", href: "/alumni/settings", icon: Settings },
  ];

  const filteredAlumni = mockAlumni.filter((alumni) => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDepartment === "all" || alumni.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Alumni Portal" logo="🎓" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Alumni Network</h1>
              <p className="text-muted-foreground">
                Connect with fellow alumni from your institution
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Information Technology">Information Technology</SelectItem>
                  <SelectItem value="Electronics">Electronics</SelectItem>
                  <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Alumni Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((alumni) => (
                <AlumniCard key={alumni.id} alumni={alumni} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniDirectory;
