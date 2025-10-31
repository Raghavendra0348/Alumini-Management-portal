import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { EventCard } from "@/components/cards/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockEvents } from "@/data/mockData";

const StudentEvents = () => {
  const sidebarItems = [
    { label: "Home", href: "/student/dashboard", icon: Home },
    { label: "Profile", href: "/student/profile", icon: User },
    { label: "Alumni", href: "/student/alumni", icon: Users },
    { label: "Events", href: "/student/events", icon: Calendar },
    { label: "Settings", href: "/student/settings", icon: Settings },
    { label: "Help", href: "/student/help", icon: HelpCircle },
  ];

  const upcomingEvents = mockEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = mockEvents.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Student Portal" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Events</h1>
              <p className="text-muted-foreground">
                Workshops, meetings, hackathons, and webinars
              </p>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentEvents;
