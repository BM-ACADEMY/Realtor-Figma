import { Link } from 'react-router';
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';
import { Property } from '../data/mockData';
import { formatIndianCurrencyCompact } from '../utils/indianFormat';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-4 py-2 rounded-full text-sm ${
              property.type === 'For Sale'
                ? 'bg-[#E63946] text-white'
                : 'bg-[#1A1A1A] text-white'
            }`}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <span
            className="text-3xl text-[#E63946]"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            {formatIndianCurrencyCompact(property.price)}
          </span>
          {property.type === 'For Rent' && (
            <span className="text-gray-500 text-sm">/month</span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-xl text-[#1A1A1A] mb-2 line-clamp-2"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-6 py-4 border-t border-gray-100">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-2 text-gray-600">
              <BedDouble className="w-5 h-5" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-2 text-gray-600">
              <Bath className="w-5 h-5" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize className="w-5 h-5" />
            <span className="text-sm">{property.area} sq.ft</span>
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/properties/${property.id}`}
          className="block w-full text-center bg-[#1A1A1A] text-white py-3 rounded-lg hover:bg-[#E63946] transition-colors mt-4"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}