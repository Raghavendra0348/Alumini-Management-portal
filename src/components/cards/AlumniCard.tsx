import { Linkedin, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alumni } from "@/data/mockData";

interface AlumniCardProps {
  alumni: Alumni;
}

export const AlumniCard = ({ alumni }: AlumniCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src={alumni.photo}
          alt={alumni.name}
          className="h-20 w-20 rounded-full border-4 border-primary/20"
        />

        <div>
          <h3 className="font-semibold text-lg">{alumni.name}</h3>
          <p className="text-sm text-primary font-medium">{alumni.job}</p>
          <p className="text-sm text-muted-foreground">{alumni.company}</p>
        </div>

        <div className="w-full space-y-2 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>Batch {alumni.batch} • {alumni.department}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full" asChild>
          <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4 mr-2" />
            Connect on LinkedIn
          </a>
        </Button>
      </div>
    </Card>
  );
};
