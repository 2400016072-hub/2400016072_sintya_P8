import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="container mx-auto py-16 px-6">

      <h2 className="text-blue-700 text-3xl font-bold text-center">
        Showcase Student Projects
      </h2>

      <div className="mt-10 flex justify-center">
        <ProjectCard
          author="Adrian Fathir"
          title="Creative Portfolio Platform"
          desc="Platform showcase untuk karya kreatif digital"
          img="https://images.unsplash.com/photo-1558403194-611308249627"
        />
      </div>

    </div>
  );
}