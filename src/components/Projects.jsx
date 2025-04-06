function Projects() {
    const projects = [
      { title: 'UC Remittance App', description: 'A stablecoin-based payment system for international transfers.' },
      { title: 'AI Tutor', description: 'AI-powered personalized education assistant.' },
    ]
  
    return (
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-zinc-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Projects
  