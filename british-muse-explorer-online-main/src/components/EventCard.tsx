
import { CalendarDays } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface EventProps {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  category: string;
  shortDescription: string;
  isFeatured?: boolean;
}

const EventCard = ({ title, date, imageUrl, category, shortDescription, isFeatured }: EventProps) => {
  return (
    <Card className={`overflow-hidden card-hover-effect ${isFeatured ? 'border-museum-gold border-2' : ''}`}>
      <div className="relative h-52">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {isFeatured && (
          <Badge className="absolute top-3 right-3 bg-museum-gold hover:bg-museum-gold">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarDays className="h-4 w-4" />
          <time dateTime={date}>{date}</time>
        </div>
        <CardTitle className="line-clamp-2 h-14">{title}</CardTitle>
        <Badge variant="outline" className="w-fit">{category}</Badge>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="line-clamp-3">
          {shortDescription}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
