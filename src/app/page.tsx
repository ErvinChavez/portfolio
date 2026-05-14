import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  const projects = [
            {
              name: "Chavez Tree Service",
              description: "Lead generation + job workflow system.",
              image: "/chavezpage.png",
              live: "https://chavez-tree-frontend.vercel.app/",
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
                "Built full backend API for job intake and service requests (Express + Node.js)",
                "Implemented customer review system for collecting and storing client feedback",
                "Designed authentication system with JWT + bcrypt security flow",
                "Created file upload system for job images using Multer + Sharp",
                "Integrated email notifications for client and admin workflows (Resend API)",
                "Structured PostgreSQL database using Sequelize ORM for business operations"
              ]
            },
            {
              name: "Auto Paint Site",
              description: "Business site with lead capture system.",
              image: "/autoshop.png",
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
                "Built modern service website focused on lead generation and conversions",
                "Designed mobile-first UI optimized for customer inquiries",
                "Created structured quote and contact flow for service requests",
                "Implemented reusable component-based layout with Next.js App Router",
                "Optimized page structure for performance and fast loading UX"
              ]
            }
          ];

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-14 lg:px-24 py-16">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center">
        
        <img 
          src="/SoloErvin.png"
          alt="Profile Picture"
          className="w-44 h-44 md:w-60 md:h-60 mx-auto rounded-full object-cover mb-8 border-2 border-zinc-800 shadow-2xl" 
        />

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Ervin Chavez
        </h1>

        <p className="text-gray-400 mt-4 text-xl md:text-2xl">
          Full-Stack Developer
        </p>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          I build web systems for real businesses.
        </p>

      </section>

      {/* PROJECTS TITLE */}
      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
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