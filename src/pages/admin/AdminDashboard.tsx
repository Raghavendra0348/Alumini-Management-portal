import { LayoutDashboard, Users, GraduationCap, Calendar, FileText, Settings, LogOut } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { StatsCard } from "@/components/cards/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockStats, mockAlumni } from "@/data/mockData";

const AdminDashboard = () => {
  const sidebarItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Manage Students", href: "/admin/students", icon: Users },
    { label: "Manage Alumni", href: "/admin/alumni", icon: GraduationCap },
    { label: "Manage Events", href: "/admin/events", icon: Calendar },
    { label: "Reports", href: "/admin/reports", icon: FileText },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Admin Portal" logo="⚙️" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage users, events, and platform analytics
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Students"
                value={mockStats.totalStudents}
                icon={Users}
                trend="+12% from last month"
                gradient="gradient-primary"
              />
              <StatsCard
                title="Total Alumni"
                value={mockStats.totalAlumni}
                icon={GraduationCap}
                trend="+8% from last month"
                gradient="gradient-accent"
              />
              <StatsCard
                title="Events"
                value={mockStats.totalEvents}
                icon={Calendar}
                trend="4 upcoming"
                gradient="gradient-primary"
              />
              <StatsCard
                title="Posts"
                value={mockStats.totalPosts}
                icon={FileText}
                trend="+24 this week"
                gradient="gradient-accent"
              />
            </div>

            {/* Recent Users Table */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Alumni</h3>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-semibold text-sm">Name</th>
                      <th className="pb-3 font-semibold text-sm">Email</th>
                      <th className="pb-3 font-semibold text-sm">Department</th>
                      <th className="pb-3 font-semibold text-sm">Batch</th>
                      <th className="pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAlumni.slice(0, 5).map((alumni) => (
                      <tr key={alumni.id} className="border-b last:border-0">
                        <td className="py-3 text-sm">{alumni.name}</td>
                        <td className="py-3 text-sm text-muted-foreground">
                          {alumni.name.toLowerCase().replace(" ", ".")}@university.edu
                        </td>
                        <td className="py-3 text-sm">{alumni.department}</td>
                        <td className="py-3 text-sm">{alumni.batch}</td>
                        <td className="py-3">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Remove
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
