
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { toast } from "@/components/ui/sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const reservationSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please provide a valid phone number.",
  }),
  visitDate: z.string().min(1, {
    message: "Please select a visit date.",
  }),
  numberOfVisitors: z.string().min(1, {
    message: "Please enter number of visitors.",
  }),
  specialRequirements: z.string().optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

const Reserve = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      visitDate: "",
      numberOfVisitors: "1",
      specialRequirements: "",
    },
  });

  function onSubmit(values: ReservationValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast.success("Reservation submitted successfully! We'll contact you to confirm your booking.");
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-museum-navy text-white py-16">
          <div className="museum-container">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-museum-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Reserve a Visit</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Plan your visit to the British Muse by reserving your spot in advance. Fill out the form below to book your preferred date and time.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-gray-50">
          <div className="museum-container">
            <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold mb-6 text-museum-navy">Booking Information</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+44 123 456 7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="visitDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Visit Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} min={new Date().toISOString().split('T')[0]} />
                          </FormControl>
                          <FormDescription>
                            Select your preferred date to visit
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="numberOfVisitors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Visitors</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="20" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter the number of people in your group (max 20)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="specialRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requirements (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please let us know if you have any accessibility requirements or other special requests"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-museum-gold hover:bg-amber-600 text-white w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit Reservation"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="max-w-3xl mx-auto mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-serif font-bold text-lg mb-3 text-museum-navy">Important Information:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Reservations should be made at least 24 hours in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>You will receive a confirmation email with your booking details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Admission to the general collection is free, but some special exhibitions require paid tickets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>For large groups (more than 20 people), please contact us directly at groups@britishmuse.example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reserve;
