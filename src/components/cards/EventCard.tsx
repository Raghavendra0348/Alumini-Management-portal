import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Event } from "@/data/mockData";

interface EventCardProps {
  event: Event;
}

const typeColors = {
  workshop: "bg-primary/10 text-primary",
  meeting: "bg-secondary/10 text-secondary-foreground",
  hackathon: "bg-accent/10 text-accent-foreground",
  webinar: "bg-success/10 text-success-foreground",
};

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{event.title}</h3>
          <Badge className={typeColors[event.type]}>
            {event.type}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">{event.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        <Button className="w-full">Join Event</Button>
      </div>
    </Card>
  );
};
