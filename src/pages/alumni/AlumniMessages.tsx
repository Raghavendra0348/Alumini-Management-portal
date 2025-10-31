import { Home, User, Users, Calendar, MessageSquare, Settings, Search } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

const AlumniMessages = () => {
  const sidebarItems = [
    { label: "Home", href: "/alumni/dashboard", icon: Home },
    { label: "My Profile", href: "/alumni/profile", icon: User },
    { label: "Alumni Network", href: "/alumni/directory", icon: Users },
    { label: "Events", href: "/alumni/events", icon: Calendar },
    { label: "Messages", href: "/alumni/messages", icon: MessageSquare },
    { label: "Settings", href: "/alumni/settings", icon: Settings },
  ];

  const mockChats = [
    { id: 1, name: "John Doe", lastMessage: "Thanks for the career advice!", time: "2 hours ago", unread: true },
    { id: 2, name: "Emma Wilson", lastMessage: "Looking forward to the mentorship session", time: "5 hours ago", unread: false },
    { id: 3, name: "Mike Chen", lastMessage: "Could you review my resume?", time: "1 day ago", unread: false },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar items={sidebarItems} title="Alumni Portal" logo="🎓" />

      <div className="flex-1 flex flex-col">
        <TopBar />

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
              {/* Chat List */}
              <Card className="p-4 md:col-span-1 overflow-y-auto">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search messages..." className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  {mockChats.map((chat) => (
                    <div
                      key={chat.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted ${
                        chat.unread ? "bg-muted" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold">
                          {chat.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-sm truncate">{chat.name}</h4>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread && (
                          <div className="h-2 w-2 bg-primary rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Chat View */}
              <Card className="p-6 md:col-span-2 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p className="text-lg">Select a conversation to start messaging</p>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniMessages;
