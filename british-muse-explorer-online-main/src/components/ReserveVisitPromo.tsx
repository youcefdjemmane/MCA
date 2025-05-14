
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ReserveVisitPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-museum-navy to-indigo-900 text-white">
      <div className="museum-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-10">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-museum-gold" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Reserve Your Visit
              </h2>
            </div>
            <p className="text-lg text-gray-200 mb-6 max-w-xl">
              Plan ahead and make the most of your museum experience. Reserve your visit to upcoming 
              special exhibitions, guided tours, and more.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-museum-gold h-2 w-2 rounded-full"></span>
                <span>Skip the queues with timed entry tickets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-museum-gold h-2 w-2 rounded-full"></span>
                <span>Get priority access to special exhibitions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-museum-gold h-2 w-2 rounded-full"></span>
                <span>Reserve spots for guided tours and events</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
              <h3 className="text-xl font-serif font-bold mb-3">Ready to visit?</h3>
              <p className="mb-4 text-gray-600">
                Choose your date and time, and secure your spot today.
              </p>
              <Link to="/reserve">
                <Button size="lg" className="bg-museum-gold hover:bg-amber-600 text-white">
                  <Calendar className="mr-2" />
                  Reserve Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveVisitPromo;
