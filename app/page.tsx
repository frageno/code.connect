import EventsGrid from "@/components/events/EventsGrid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Hero />
      <EventsGrid />
    </div>
  );
}
