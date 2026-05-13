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
                "Built modern service website focused on lead generation and conversions",
                "Designed mobile-first UI optimized for customer inquiries",
                "Created structured quote and contact flow for service requests",
                "Implemented reusable component-based layout with Next.js App Router",
                "Optimized page structure for performance and fast loading UX"
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