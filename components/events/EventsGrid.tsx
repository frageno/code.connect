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
                setEvents(data);
                console.log(data);
                setLoading(false);
            } catch (error: any) {
                console.error('Error fetching WordCamp data:', error);
                setError(error);
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
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title.rendered}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Event Date: {new Date(event.date).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

export default EventsGrid