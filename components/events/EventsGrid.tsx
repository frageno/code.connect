'use client'
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


interface Event {
    id: number;
    title: {
        rendered: string;
    },
    excerpt: {
        rendered: string;
    };
    date: string;
    link: string;
} 

const EventsGrid = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function getEventsData() {
            try {
                const perPage = 24;
                const response = await fetch(`https://central.wordcamp.org/wp-json/wp/v2/wordcamps?per_page=${perPage}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const data = await response.json();
                // console.log(data);
                // const filteredEvents = data.filter(event => event._venue_country_name.includes('Spain'));
                setEvents(data);

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

  return (
    <div className="grid grid-cols-4 gap-4">
      {events.length === 0 ? (
        <div className="col-span-full">No events available</div>
      ) : (
        events.map(event => (
          <Card className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-b-2 border-transparent hover:border-b-primary" key={event.id}>
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
          </Card>
        ))
      )}
    </div>
  )
}

export default EventsGrid