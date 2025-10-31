import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const StudentSettings = () => {
  const navigate = useNavigate();

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
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account preferences
              </p>
            </div>

            {/* Notifications */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Event Reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified about upcoming events</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Job Alerts</p>
                    <p className="text-sm text-muted-foreground">New job postings from alumni</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>

            {/* Security */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sign-in & Security</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Note: We only provide email verification
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="student@university.edu" disabled />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Change Password (UI Only)</label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <Button variant="outline" className="w-full">
                  Update Password
                </Button>
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

export default StudentSettings;
