import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CollectionsPage() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({ type: '', period: '', room: '' });
  const [selected, setSelected] = useState(null);

  const fetchExhibits = async () => {
    try {
      const res = await axios.get('/api/exhibits', {
        params: { search, ...filters },
      });
      setResults(res.data);
    } catch (error) {
      console.error('Failed to fetch exhibits', error);
    }
  };

  useEffect(() => {
    fetchExhibits();
  }, [search, filters]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Collections</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="Art">Art</option>
          <option value="Sculpture">Sculpture</option>
          <option value="Weapon">Weapon</option>
        </select>
        <select
          className="select select-bordered"
          onChange={(e) => setFilters({ ...filters, period: e.target.value })}
        >
          <option value="">All Periods</option>
          <option value="Renaissance">Renaissance</option>
          <option value="Ancient">Ancient</option>
        </select>
        <select
          className="select select-bordered"
          onChange={(e) => setFilters({ ...filters, room: e.target.value })}
        >
          <option value="">All Rooms</option>
          <option value="Room 1">Room 1</option>
          <option value="Room 2">Room 2</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-xl cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <figure><img src={item.image_url} alt={item.name} /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.type} | {item.period}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-2">{selected.name}</h2>
            <p className="mb-2 text-sm text-gray-600">{selected.type} — {selected.period}</p>
            <p>{selected.description}</p>
            <div className="mt-4 text-right">
              <button className="btn btn-secondary" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
