import { useState } from "react";
import { Home, User, Users, Settings, HelpCircle, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { BottomBar } from "@/components/layout/BottomBar";
import { PostCard } from "@/components/cards/PostCard";
import { PostModal } from "@/components/modals/PostModal";
import { mockPosts } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);
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

        <main className="flex-1 p-4 md:p-6 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
              <p className="text-muted-foreground">
                Stay connected with your alumni network and discover opportunities
              </p>
            </div>

            <div className="space-y-4">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>

        <BottomBar
          onAddPost={() => setShowPostModal(true)}
          onJobsClick={() => navigate("/student/jobs")}
          onScholarshipsClick={() => navigate("/student/scholarships")}
        />
      </div>

      <PostModal open={showPostModal} onClose={() => setShowPostModal(false)} />
    </div>
  );
};

export default StudentDashboard;
