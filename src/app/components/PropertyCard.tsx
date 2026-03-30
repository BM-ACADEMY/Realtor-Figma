import { Link } from 'react-router';
import { MapPin, BedDouble, Bath, Maximize } from 'lucide-react';
import { Property } from '../data/mockData';
import { formatIndianCurrencyCompact } from '../utils/indianFormat';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50">
      {/* Image Section */}
      <Link to={`/properties/${property.id}`} className="relative aspect-[4/3] overflow-hidden block cursor-pointer bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Floating Price Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-[#E63946] backdrop-blur-md px-4 py-2 rounded-xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <span
              className="text-white text-xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              {formatIndianCurrencyCompact(property.price)}
            </span>
            {property.type === 'For Rent' && (
              <span className="text-white/80 text-xs ml-1 font-medium">/mo</span>
            )}
          </div>
        </div>

        {/* Listing Type Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm ${
              property.type === 'For Sale'
                ? 'bg-white/95 text-[#E63946]'
                : 'bg-black/80 text-white'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {property.type}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <Link to={`/properties/${property.id}`}>
          <h3
            className="text-lg text-[#1A1A1A] mb-1 line-clamp-2 font-bold group-hover:text-[#E63946] transition-colors cursor-pointer leading-tight min-h-[3.5rem]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 mb-4 h-5">
          <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
          <span className="text-xs truncate font-medium">{property.location}</span>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-0 border-t border-gray-100 pt-4 pb-1">
          {property.bedrooms > 0 && (
            <div className="flex flex-col items-center border-r border-gray-100 px-1">
              <div className="flex items-center gap-1.5 mb-1">
                <BedDouble className="w-4 h-4 text-[#E63946]" />
                <span className="text-sm font-bold text-[#1A1A1A]">{property.bedrooms}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-medium">Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className={`flex flex-col items-center px-1 ${property.bedrooms > 0 ? 'border-r border-gray-100' : ''}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <Bath className="w-4 h-4 text-[#E63946]" />
                <span className="text-sm font-bold text-[#1A1A1A]">{property.bathrooms}</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase font-medium">Baths</span>
            </div>
          )}
          <div className="flex flex-col items-center px-1">
            <div className="flex items-center gap-1.5 mb-1">
              <Maximize className="w-4 h-4 text-[#E63946]" />
              <span className="text-sm font-bold text-[#1A1A1A]">{property.area}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-medium">Sq.ft</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={`/properties/${property.id}`}
          className="mt-4 flex items-center justify-center p-3 rounded-xl border border-gray-200 text-sm font-bold text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 group/btn shadow-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
}