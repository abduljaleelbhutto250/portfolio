function Services() {
  const services = [
    {
      title: "Responsive Websites",
      description:
        "Modern websites that work properly on mobile, tablet and desktop.",
    },
    {
      title: "React Development",
      description:
        "Interactive and reusable web applications using React.js.",
    },
    {
      title: "Landing Pages",
      description:
        "Clean and professional landing pages for businesses and products.",
    },
    {
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs and backend services.",
    },
    {
      title: "UI Development",
      description:
        "Clean user interfaces using Tailwind CSS and modern design practices.",
    },
    {
      title: "Bug Fixing",
      description:
        "Finding and fixing common frontend and JavaScript problems.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          My{" "}
          <span className="text-blue-500">
            Services
          </span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-blue-500"
            >

              <h3 className="text-xl font-bold text-blue-400">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;