import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentProfile = () => {
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
            {/* Profile Header */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="h-24 w-24 rounded-full gradient-primary flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-2">John Doe</h1>
                  <p className="text-muted-foreground mb-1">Computer Science • Final Year</p>
                  <p className="text-sm text-muted-foreground">Class of 2025</p>
                  <Button className="mt-4">Edit Profile</Button>
                </div>
              </div>
            </Card>

            {/* Profile Content */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">No posts yet</p>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        🏆
                      </div>
                      <div>
                        <h3 className="font-semibold">Hackathon Winner</h3>
                        <p className="text-sm text-muted-foreground">Tech Innovation Challenge 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                        📚
                      </div>
                      <div>
                        <h3 className="font-semibold">Academic Excellence</h3>
                        <p className="text-sm text-muted-foreground">Dean's List 2023-2024</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="mt-6">
                <Card className="p-6 text-center">
                  <p className="text-muted-foreground">No events attended yet</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentProfile;
