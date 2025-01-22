import CollectionList from "@/components/CollectionList";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero/>
        <CollectionList/>
      </main>
    </>
  );
}
