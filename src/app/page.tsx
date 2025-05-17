import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center drop-shadow-lg py-8">
        Welcome to Our Music School
      </h1>
      <p className="mt-4 text-lg text-white text-center max-w-xl mx-auto bg-white/10 rounded-lg p-4 shadow-lg">
        Explore our courses and start your musical journey today!
      </p> */}

      <HeroSection />
    </main>
    
  );
}
