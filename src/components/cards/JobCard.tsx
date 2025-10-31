import { MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/data/mockData";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
            <p className="text-primary font-medium">{job.company}</p>
          </div>
          <Badge variant="secondary">{job.type}</Badge>
        </div>

        <p className="text-sm text-muted-foreground">{job.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Posted {job.postedDate}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline" className="flex-1">
            <Briefcase className="h-4 w-4 mr-2" />
            Request Referral
          </Button>
        </div>
      </div>
    </Card>
  );
};
