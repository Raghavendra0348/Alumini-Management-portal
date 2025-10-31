import { Home, User, Users, Calendar, MessageSquare, Settings } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { EventCard } from "@/components/cards/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockEvents } from "@/data/mockData";

const AlumniEvents = () => {
  const sidebarItems = [
    { label: "Home", href: "/alumni/dashboard", icon: Home },
    { label: "My Profile", href: "/alumni/profile", icon: User },
    { label: "Alumni Network", href: "/alumni/directory", icon: Users },
    { label: "Events", href: "/alumni/events", icon: Calendar },
    { label: "Messages", href: "/alumni/messages", icon: MessageSquare },
    { label: "Settings", href: "/alumni/settings", icon: Settings },
  ];

  const upcomingEvents = mockEvents.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = mockEvents.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Alumni Portal" logo="🎓" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Events</h1>
              <p className="text-muted-foreground">
                Attend alumni gatherings and networking opportunities
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

export default AlumniEvents;
