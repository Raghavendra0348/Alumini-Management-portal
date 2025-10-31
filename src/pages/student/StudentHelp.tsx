import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const StudentHelp = () => {
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
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Help & FAQ</h1>
              <p className="text-muted-foreground">
                Find answers to common questions
              </p>
            </div>

            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I connect with alumni?</AccordionTrigger>
                  <AccordionContent>
                    Visit the Alumni page from the sidebar, search for alumni by name or company, and use the "Connect on LinkedIn" button to reach out.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I apply for jobs and internships?</AccordionTrigger>
                  <AccordionContent>
                    Navigate to the Jobs & Internships page using the bottom bar. Browse available opportunities and click "Apply Now" or "Request Referral" to get started.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I join events?</AccordionTrigger>
                  <AccordionContent>
                    Go to the Events page to see upcoming workshops, hackathons, and webinars. Click "Join Event" to register for any event.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I create a post?</AccordionTrigger>
                  <AccordionContent>
                    Click the "+" button in the bottom navigation bar to open the post creation modal. Add a title and description, then publish.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I apply for scholarships?</AccordionTrigger>
                  <AccordionContent>
                    Visit the Scholarships page from the bottom bar. Review eligibility criteria and click "Apply Now" on any scholarship that matches your profile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentHelp;
