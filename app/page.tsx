import Image from "next/image";

// templates
import HomeTemplate from '../templates/Home'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
      <HomeTemplate />
    </main>
  );
}
