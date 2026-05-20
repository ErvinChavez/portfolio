import ProjectCard from "@/components/ProjectCard";

export default function Home() {

  const projects = [
            {
              name: "Chavez Tree Service",
              description: "Business operations and workflow management platform.",
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
                "Designed customer intake and operational workflow systems supporting service requests, job tracking, and business processes",
                "Developed secure administrative workflows with JWT authentication, role-based access control, and protected backend APIs",
                "Built automated customer communication systems for quote requests, review workflows, and internal business notifications",
                "Structured PostgreSQL database architecture using Sequelize ORM to support operational data management and workflow relationships",
                "Implemented customer review and feedback system with secure tokenized review flows and automated low-rating alerts",
                "Created media upload and image processing workflows for job photo management using Multer and Sharp",
                "Developed GraphQL and REST-based backend services powering frontend business operations and administrative functionality"
              ]
            },
            {
              name: "Park Auto Paint & Body Website",
              description: "Customer-facing business website focused on lead generation, mobile UX, and service visibility",
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
                "Developed customer-facing business website focused on lead generation, service visibility, and customer inquiries",
                "Designed mobile-first user experience with click-to-call, SMS quote flow, sticky CTA bar, and responsive navigation",
                "Built structured service presentation and contact flow to help customers understand services and request quotes quickly",
                "Created before-and-after gallery structure to showcase completed auto body and paint work",
                "Implemented reusable component-based layout using Next.js App Router, React, TypeScript, and Tailwind CSS",
                "Optimized page structure, responsiveness, and performance for fast mobile user experience"
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
          Technical Product Analyst / Full-Stack Developer
        </p>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          I build business systems, workflow solutions, and web applications that help real companies improve operations, customer experience, and lead generation.
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