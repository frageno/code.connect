'use client'
import React from "react";
import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { fetchRSSFeed } from "../../lib/rss";
import EventsFilters from "./EventsFilters";



interface Event {
    _venue_country_name: string;
    id: number;
    title: { rendered: string; },
    excerpt: { rendered: string; };
    acf: { location: string; };
    date: string;
    link: string;
} 

interface RSSItem {
    title: string;
    link: string;
    pubDate: string;
    content: string;
  }

const EventsGrid = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [rssEvents, setRssEvents] = useState<RSSItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [locations, setLocations] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');


    useEffect(() => {
        async function getEventsData() {
            try {
                const perPage = 16;
                const response = await fetch(`https://central.wordcamp.org/wp-json/wp/v2/wordcamps?per_page=${perPage}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const data = await response.json();
                const uniqueLocations: string[] = Array.from(new Set(data.map(event => event._venue_country_name)));

                // console.log(data);
                setEvents(data);
                setLocations(uniqueLocations);

                // const rssFeed = await fetchRSSFeed('https://central.wordcamp.org/feed/');

            } catch (error: any) {
                console.error('Error fetching WordCamp data:', error);
                setError(error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
          }
        
          getEventsData();

    }, [])

  
    if (loading) {
        return (
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-full text-center">Loading events...</div>
          </div>
        );
    }

    // filter events by locations
    const filteredEvents = events.filter(event =>
        selectedLocation === '' || event._venue_country_name === selectedLocation
    )

  return (
    <div className="py-16 lg:py-24">
        <EventsFilters locations={locations} setSelectedLocation={setSelectedLocation}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-10 relative">
        {filteredEvents.length === 0 ? (
            <div className="col-span-full">No events available</div>
        ) : (
            filteredEvents.map(event => (
                <Card key={event.id} className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-b-2 border-transparent hover:border-b-primary">
                        <a href={event.link} target="_blank">
                            <CardHeader>
                                <Image src="/assets/images/wp.png" height={130} width={130} alt="wp" />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="events-title">{event.title.rendered}</CardTitle>
                                <p className="flex items-center pt-2 gap-x-2">
                                    <Image src="/assets/icons/calendar.svg" height={20} width={20} alt="wp" />
                                    {new Date(event.date).toLocaleDateString()}
                                </p>
                            </CardContent>
                        </a>
                    </Card>
            ))
        )}
        </div>
    </div>
  )
}

export default EventsGrid