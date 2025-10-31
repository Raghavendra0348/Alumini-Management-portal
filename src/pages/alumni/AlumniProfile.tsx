import { Home, User, Users, Calendar, MessageSquare, Settings } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AlumniProfile = () => {
  const sidebarItems = [
    { label: "Home", href: "/alumni/dashboard", icon: Home },
    { label: "My Profile", href: "/alumni/profile", icon: User },
    { label: "Alumni Network", href: "/alumni/directory", icon: Users },
    { label: "Events", href: "/alumni/events", icon: Calendar },
    { label: "Messages", href: "/alumni/messages", icon: MessageSquare },
    { label: "Settings", href: "/alumni/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Alumni Portal" logo="🎓" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alumni"
                  alt="Profile"
                  className="h-24 w-24 rounded-full border-4 border-primary/20"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold">Sarah Johnson</h1>
                    <Badge className="w-fit">Mentor</Badge>
                  </div>
                  <p className="text-primary font-medium mb-1">Senior Software Engineer at Google</p>
                  <p className="text-sm text-muted-foreground mb-1">Computer Science • Class of 2018</p>
                  <Button className="mt-4">Edit Profile</Button>
                </div>
              </div>
            </Card>

            {/* Mentorship Info */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Mentorship</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Currently Mentoring</p>
                    <p className="text-sm text-muted-foreground">3 students</p>
                  </div>
                  <Button variant="outline">View Mentees</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Areas of Expertise</p>
                    <p className="text-sm text-muted-foreground">Software Development, Career Guidance, Interview Prep</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Details */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Current Role:</span>
                  <span className="ml-2 text-muted-foreground">Senior Software Engineer</span>
                </div>
                <div>
                  <span className="font-medium">Company:</span>
                  <span className="ml-2 text-muted-foreground">Google</span>
                </div>
                <div>
                  <span className="font-medium">Location:</span>
                  <span className="ml-2 text-muted-foreground">San Francisco, CA</span>
                </div>
                <div>
                  <span className="font-medium">LinkedIn:</span>
                  <a href="#" className="ml-2 text-primary hover:underline">linkedin.com/in/sarahjohnson</a>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniProfile;
