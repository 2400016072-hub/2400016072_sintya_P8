export default function Hero() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 px-6">
      <div>
        <h2 className="text-blue-700 font-bold text-4xl leading-snug">
          RUANG EKSPRESI : Wadah kreatif & Kompetitif Mahasiswa
        </h2>

        <div className="space-x-2 mt-4 text-sm">
          <span className="inline-block bg-yellow-300 px-4 py-1 rounded-full">Informatika</span>
          <span className="inline-block bg-green-300 px-4 py-1 rounded-full">Sistem</span>
          <span className="inline-block bg-blue-300 px-4 py-1 rounded-full">Multimedia</span>
          <span className="inline-block bg-pink-300 px-4 py-1 rounded-full">Wirausaha</span>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1558403194-611308249627"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}