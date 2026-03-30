import { useState, useMemo } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/mockData';
import { Slider } from '../components/ui/slider';
import { SlidersHorizontal } from 'lucide-react';
import { formatIndianCurrencyCompact } from '../utils/indianFormat';

export function PropertyListingPage() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    propertyType: '',
    priceRange: [0, 35000000], // ₹3.5 Cr max
    sortBy: 'latest',
  });

  const [showFilters, setShowFilters] = useState(true);

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by type (For Sale / For Rent)
    if (filters.type) {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter((p) => p.propertyType === filters.propertyType);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sort
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1
            className="text-4xl text-[#1A1A1A] mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Find Your Perfect Plot
          </h1>
          <p className="text-gray-600 text-lg">
            Browse {filteredProperties.length} verified plots available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-xl text-[#1A1A1A]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Location */}
                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., OMR, Adyar"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
                  />
                </div>

                {/* For Sale / For Rent */}
                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Listing Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
                  >
                    <option value="">All</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">Land Type</label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                    className="w-full h-12 px-4 bg-[#F5F5F5] rounded-lg border-none outline-none"
                  >
                    <option value="">All Plots</option>
                    <option value="Plot">Residential Plot</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm text-[#1A1A1A] mb-2">
                    Price Range: {formatIndianCurrencyCompact(filters.priceRange[0])} - {formatIndianCurrencyCompact(filters.priceRange[1])}
                  </label>
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    min={0}
                    max={35000000}
                    step={100000}
                    className="mt-4"
                  />
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() =>
                    setFilters({
                      location: '',
                      type: '',
                      propertyType: '',
                      priceRange: [0, 35000000],
                      sortBy: 'latest',
                    })
                  }
                  className="w-full h-12 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#E63946] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProperties.length}{' '}
                {filteredProperties.length === 1 ? 'property' : 'properties'}
              </p>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="h-12 px-4 bg-white rounded-lg border border-gray-200 outline-none"
              >
                <option value="latest">Latest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No properties found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}