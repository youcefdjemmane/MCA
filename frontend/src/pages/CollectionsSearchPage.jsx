import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CollectionsSearchPage() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [period, setPeriod] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const query = new URLSearchParams();
      if (search) query.append('q', search);
      if (type) query.append('type', type);
      if (period) query.append('period', period);

      const res = await fetch(`/api/exhibits?${query.toString()}`);
      const data = await res.json();
      setResults(data);
    };

    fetchCollections();
  }, [search, type, period]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Search Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>Search</Label>
          <Input placeholder="Name or description..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <Label>Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="sculpture">Sculpture</SelectItem>
              <SelectItem value="weapon">Weapon</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Period</Label>
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger>
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ancient">Ancient</SelectItem>
              <SelectItem value="medieval">Medieval</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-xs mt-2">Type: {item.type} | Period: {item.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
