
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export interface CollectionItemProps {
  id: number;
  title: string;
  period: string;
  origin: string;
  imageUrl: string;
  description: string;
  category: "sculpture" | "painting" | "artifact" | "manuscript";
}

// Sample collection data
const collectionItems: CollectionItemProps[] = [
  {
    id: 1,
    title: "The Rosetta Stone",
    period: "196 BCE",
    origin: "Egypt",
    imageUrl: "https://source.unsplash.com/random/600x800/?rosetta,stone",
    description: "The key to deciphering Egyptian hieroglyphs, this stone features the same decree in three scripts.",
    category: "artifact"
  },
  {
    id: 2,
    title: "The Parthenon Sculptures",
    period: "447-432 BCE",
    origin: "Greece",
    imageUrl: "https://source.unsplash.com/random/600x800/?parthenon,sculpture",
    description: "Classical Greek marble sculptures that were originally part of the Parthenon temple in Athens.",
    category: "sculpture"
  },
  {
    id: 3,
    title: "Lewis Chessmen",
    period: "12th century CE",
    origin: "Norway",
    imageUrl: "https://source.unsplash.com/random/600x800/?chess,medieval",
    description: "Intricate chess pieces carved from walrus ivory, discovered on the Isle of Lewis in Scotland.",
    category: "artifact"
  },
  {
    id: 4,
    title: "Lindisfarne Gospels",
    period: "8th century CE",
    origin: "England",
    imageUrl: "https://source.unsplash.com/random/600x800/?manuscript,medieval",
    description: "An illuminated manuscript gospel book, created around 700 CE at a monastery off the coast of Northumberland.",
    category: "manuscript"
  },
  {
    id: 5,
    title: "Samurai Armor",
    period: "Edo period (1603-1868)",
    origin: "Japan",
    imageUrl: "https://source.unsplash.com/random/600x800/?samurai,armor",
    description: "Complete set of samurai armor including helmet, face guard, and body armor.",
    category: "artifact"
  },
  {
    id: 6,
    title: "The Mausoleum at Halicarnassus",
    period: "350 BCE",
    origin: "Turkey",
    imageUrl: "https://source.unsplash.com/random/600x800/?ruins,ancient",
    description: "Sculptures and architectural fragments from one of the Seven Wonders of the Ancient World.",
    category: "sculpture"
  },
  {
    id: 7,
    title: "The Standard of Ur",
    period: "2600-2400 BCE",
    origin: "Mesopotamia",
    imageUrl: "https://source.unsplash.com/random/600x800/?mesopotamia,ancient",
    description: "A wooden box with mosaic scenes of war and peace, discovered in a royal tomb at the ancient Sumerian city of Ur.",
    category: "artifact"
  },
  {
    id: 8,
    title: "Renaissance Portrait",
    period: "16th century CE",
    origin: "Italy",
    imageUrl: "https://source.unsplash.com/random/600x800/?renaissance,portrait",
    description: "An oil painting depicting a nobleman from the Italian Renaissance period.",
    category: "painting"
  }
];

const CollectionItem = ({ item }: { item: CollectionItemProps }) => {
  return (
    <Card className="overflow-hidden card-hover-effect">
      <div className="h-64">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2 h-14">{item.title}</CardTitle>
        <CardDescription>
          {item.period} • {item.origin}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{item.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const CollectionSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger an API call
    console.log("Searching for:", searchQuery);
  };
  
  const filterItems = () => {
    let filtered = collectionItems;
    
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    return filtered;
  };
  
  const filteredItems = filterItems();
  
  return (
    <div>
      {/* Search Section */}
      <div className="bg-museum-cream py-8 border-b">
        <div className="museum-container">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="flex gap-2">
              <Input 
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg py-6"
              />
              <Button type="submit" size="icon" className="aspect-square h-12">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Search by object name, artist, period, or location
            </p>
          </form>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="py-12">
        <div className="museum-container">
          {/* Category Filters */}
          <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveCategory}>
            <TabsList>
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="sculpture">Sculptures</TabsTrigger>
              <TabsTrigger value="painting">Paintings</TabsTrigger>
              <TabsTrigger value="artifact">Artifacts</TabsTrigger>
              <TabsTrigger value="manuscript">Manuscripts</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          {/* Results Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-serif font-medium mb-2">No items found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionSearch;
