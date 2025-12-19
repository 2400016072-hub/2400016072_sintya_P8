export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>

      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Nama" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Pesan" className="w-full border px-4 py-2 rounded"></textarea>

        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Kirim
        </button>
      </form>
    </div>
  );
}