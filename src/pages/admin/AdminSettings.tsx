import { LayoutDashboard, Users, GraduationCap, Calendar, FileText, Settings } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

const AdminSettings = () => {
  const navigate = useNavigate();

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
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Settings</h1>
              <p className="text-muted-foreground">
                Manage platform configuration
              </p>
            </div>

            {/* Platform Settings */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Platform Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">User Registrations</p>
                    <p className="text-sm text-muted-foreground">Allow new users to register</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Verification</p>
                    <p className="text-sm text-muted-foreground">Require email verification for new accounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Post Moderation</p>
                    <p className="text-sm text-muted-foreground">Approve posts before publishing</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Logout */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
              <Button
                variant="destructive"
                onClick={() => navigate("/")}
                className="w-full"
              >
                Logout
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
