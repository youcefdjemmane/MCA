import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '../../components/ui/input';
// import { Button } from '../../components/ui/button';
// import { Label } from '../../components/ui/label';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../components/ui/select';
// import { Textarea } from '../../components/ui/textarea';

export default function VisitReservationPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    visit_type_id: '',
    visit_date: '',
    time_slot: '',
    people_count: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to reserve visit:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Reserve a Visit</h2>
      {submitted ? (
        <div className="text-green-600 font-medium">Your visit has been successfully reserved!</div>
      ) : (
        <Card>
          <CardContent className="p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="full_name">Full Name</Label>
                <Input name="full_name" value={form.full_name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input name="phone" value={form.phone} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="visit_type_id">Visit Type</Label>
                <Select onValueChange={(value) => handleSelect('visit_type_id', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Personal</SelectItem>
                    <SelectItem value="2">Family</SelectItem>
                    <SelectItem value="3">Organized Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="visit_date">Visit Date</Label>
                <Input name="visit_date" type="date" value={form.visit_date} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="time_slot">Time Slot</Label>
                <Input name="time_slot" type="time" value={form.time_slot} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="people_count">Number of People</Label>
                <Input name="people_count" type="number" value={form.people_count} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" value={form.message} onChange={handleChange} />
              </div>
              <Button type="submit" className="w-full">Reserve</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
