import { LayoutDashboard, Users, GraduationCap, Calendar, FileText, Settings, Plus, Search } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockAlumni } from "@/data/mockData";

const ManageAlumni = () => {
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Manage Alumni</h1>
                <p className="text-muted-foreground">
                  View and manage alumni accounts
                </p>
              </div>
              <Button className="gradient-hero">
                <Plus className="h-4 w-4 mr-2" />
                Add New Alumni
              </Button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search alumni..." className="pl-10" />
            </div>

            {/* Table */}
            <Card className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-semibold text-sm">Name</th>
                      <th className="pb-3 font-semibold text-sm">Email</th>
                      <th className="pb-3 font-semibold text-sm">Department</th>
                      <th className="pb-3 font-semibold text-sm">Batch</th>
                      <th className="pb-3 font-semibold text-sm">Company</th>
                      <th className="pb-3 font-semibold text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAlumni.map((alumni) => (
                      <tr key={alumni.id} className="border-b last:border-0">
                        <td className="py-3 text-sm">{alumni.name}</td>
                        <td className="py-3 text-sm text-muted-foreground">
                          {alumni.name.toLowerCase().replace(" ", ".")}@university.edu
                        </td>
                        <td className="py-3 text-sm">{alumni.department}</td>
                        <td className="py-3 text-sm">{alumni.batch}</td>
                        <td className="py-3 text-sm">{alumni.company}</td>
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

export default ManageAlumni;
