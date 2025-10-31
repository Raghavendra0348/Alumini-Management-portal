import { LayoutDashboard, Users, GraduationCap, Calendar, FileText, Settings, TrendingUp } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/cards/StatsCard";
import { mockStats } from "@/data/mockData";

const AdminReports = () => {
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
              <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Platform insights and statistics
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Users"
                value={mockStats.totalStudents + mockStats.totalAlumni}
                icon={Users}
                trend="+15% from last month"
                gradient="gradient-primary"
              />
              <StatsCard
                title="Active Students"
                value={mockStats.totalStudents}
                icon={Users}
                trend="+12% from last month"
                gradient="gradient-accent"
              />
              <StatsCard
                title="Active Alumni"
                value={mockStats.totalAlumni}
                icon={GraduationCap}
                trend="+8% from last month"
                gradient="gradient-primary"
              />
              <StatsCard
                title="Engagement Rate"
                value="68%"
                icon={TrendingUp}
                trend="+5% from last month"
                gradient="gradient-accent"
              />
            </div>

            {/* Chart Placeholders */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">User Growth</h3>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">Chart placeholder - Analytics data visualization</p>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
                <div className="h-48 flex items-center justify-center bg-muted/20 rounded-lg">
                  <p className="text-muted-foreground">Pie chart placeholder</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Event Attendance</h3>
                <div className="h-48 flex items-center justify-center bg-muted/20 rounded-lg">
                  <p className="text-muted-foreground">Bar chart placeholder</p>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminReports;
