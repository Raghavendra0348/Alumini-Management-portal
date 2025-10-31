import { Briefcase, Plus, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomBarProps {
  onAddPost: () => void;
  onJobsClick: () => void;
  onScholarshipsClick: () => void;
}

export const BottomBar = ({
  onAddPost,
  onJobsClick,
  onScholarshipsClick,
}: BottomBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-auto z-50">
      <div className="md:rounded-full bg-card/95 backdrop-blur-lg border md:shadow-medium px-6 py-3">
        <div className="flex items-center gap-4 justify-center">
          <Button
            variant="ghost"
            size="lg"
            className="flex-col h-auto gap-1 md:flex-row md:gap-2"
            onClick={onJobsClick}
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-xs md:text-sm">Jobs</span>
          </Button>

          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-medium gradient-hero"
            onClick={onAddPost}
          >
            <Plus className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="flex-col h-auto gap-1 md:flex-row md:gap-2"
            onClick={onScholarshipsClick}
          >
            <GraduationCap className="h-5 w-5" />
            <span className="text-xs md:text-sm">Scholarships</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
