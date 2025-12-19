export default function ProjectCard({ author, title, desc, img }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 shadow-lg rounded-xl overflow-hidden">
      <div className="p-8 text-left bg-white">
        <span className="text-white bg-gray-800 px-4 py-1 rounded-md text-sm">
          {author}
        </span>

        <h4 className="text-xl font-bold mt-4">{title}</h4>
        <p className="text-sm mt-2">{desc}</p>

        <div className="flex space-x-2 mt-4 text-sm">
          <span>⭐ React</span>
          <span>⭐ Tailwind</span>
          <span>⭐ Firebase</span>
        </div>

        <button className="mt-4 px-4 py-1 bg-blue-500 text-white rounded">
          View
        </button>
      </div>

      <img src={img} className="object-cover" />
    </div>
  );
}