function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          My{" "}
          <span className="text-blue-500">
            Skills
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700 bg-slate-950 p-5 text-center font-semibold transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;