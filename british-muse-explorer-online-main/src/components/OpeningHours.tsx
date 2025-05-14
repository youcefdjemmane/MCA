
import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OpeningHours = () => {
  return (
    <section className="bg-museum-cream py-12">
      <div className="museum-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-museum-navy mb-3">Opening Hours</h2>
          <p className="text-museum-slate max-w-2xl mx-auto">
            The British Muse welcomes visitors throughout the week. Entry is free, but some special exhibitions may require tickets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Weekdays Card */}
          <Card className="border-museum-navy/20 shadow-sm">
            <CardHeader className="bg-museum-navy/5 pb-3">
              <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-museum-gold" />
                <span>Weekdays</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 text-center">
              <p className="text-lg font-medium">Monday - Friday</p>
              <p className="text-museum-slate text-lg mt-1">10:00 - 17:30</p>
              <p className="text-sm text-museum-slate/80 mt-2">Last entry at 16:30</p>
            </CardContent>
          </Card>
          
          {/* Weekends Card */}
          <Card className="border-museum-navy/20 shadow-sm">
            <CardHeader className="bg-museum-navy/5 pb-3">
              <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-museum-gold" />
                <span>Weekends</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 text-center">
              <p className="text-lg font-medium">Saturday - Sunday</p>
              <p className="text-museum-slate text-lg mt-1">09:00 - 18:30</p>
              <p className="text-sm text-museum-slate/80 mt-2">Last entry at 17:30</p>
            </CardContent>
          </Card>
          
          {/* Special Days Card */}
          <Card className="border-museum-navy/20 shadow-sm">
            <CardHeader className="bg-museum-navy/5 pb-3">
              <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-museum-gold" />
                <span>Special Days</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 text-center">
              <p className="text-lg font-medium">Public Holidays</p>
              <p className="text-museum-slate text-lg mt-1">11:00 - 16:30</p>
              <p className="text-sm text-museum-slate/80 mt-2">Closed on Dec 24-26</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
