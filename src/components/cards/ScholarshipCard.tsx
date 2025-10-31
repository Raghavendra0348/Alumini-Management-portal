import { GraduationCap, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scholarship } from "@/data/mockData";

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export const ScholarshipCard = ({ scholarship }: ScholarshipCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-12 w-12 rounded-lg gradient-accent flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{scholarship.title}</h3>
            <p className="text-sm text-muted-foreground">{scholarship.eligibility}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{scholarship.description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-primary">
            <DollarSign className="h-4 w-4" />
            <span>{scholarship.amount}</span>
          </div>
        </div>

        <Button className="w-full">Apply Now</Button>
      </div>
    </Card>
  );
};
