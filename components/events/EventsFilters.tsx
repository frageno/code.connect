import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  interface EventsFiltersProps {
    locations: string[];
    setSelectedLocation: (location: string) => void;
  }
  

const EventsFilters: React.FC<EventsFiltersProps> = ({ locations, setSelectedLocation }) => {
  const [location, setLocation] = useState<string>('');


  return (
    <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between mb-6 relative z-50">
        <h2 className="text-2xl lg:text-4xl font-semibold headline-circle relative">Upcoming Events</h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center gap-4">    
            <Select onValueChange={(value) => { setSelectedLocation(value); }}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Location: " />
                </SelectTrigger>
                <SelectContent>
                    {locations.map((location, index) => (
                        <SelectItem className="cursor-pointer" key={index} value={location}>{location}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="cursor-pointer" value="date">Date</SelectItem>
                    <SelectItem value="dark">Alphabetic</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
  )
}

export default EventsFilters