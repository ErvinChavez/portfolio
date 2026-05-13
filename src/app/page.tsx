import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  const projects = [
            {
              name: "Chavez Tree Service",
              description: "Lead generation + job workflow system.",
              image: "",
              live: "https://vercel.com/ervinchavezs-projects/chavez-tree-frontend",
              stack: [
                "Node.js",
                "Express",
                "GraphQL",
                "PostgreSQL",
                "Sequelize",
                "JWT Authentication",
                "bcryptjs",
                "Multer",
                "Sharp",
                "Resend API",
                "Helmet",
                "Rate Limiting"
              ],
              highlights: [
                "Built structured lead intake system",
                "Created service pages",
                "Designed job request workflow"
              ]
            },
            {
              name: "Auto Paint Site",
              description: "Business site with lead capture system.",
              image: "",
              live: "https://autopaintsite.vercel.app/",
              stack: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "React Icons",
                "Vercel"
              ],
              highlights: [
                "Built quote request system",
                "Designed conversion-focused layout",
                "Mobile-first UI"
              ]
            }
          ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-12">
      
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        
        <div className="w-28 h-28 mx-auto rounded-full bg-gray-800 mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold">
          Your Name
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Full-Stack Developer
        </p>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          I build web systems for real businesses.
        </p>

      </section>

      {/* PROJECTS TITLE */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

      </section>

    </main>
  );
}