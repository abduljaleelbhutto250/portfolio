function Journey() {
  const journey = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "REST APIs",
    "Node.js & Express",
    "MySQL & MongoDB",
    "Next.js",
    "Full-Stack Projects",
  ];

  return (
    <section
      id="journey"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold">
          My Development{" "}
          <span className="text-blue-500">
            Journey
          </span>
        </h2>

        <div className="mt-12 space-y-4">

          {journey.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-5 rounded-xl border border-slate-800 bg-slate-950 p-5"
            >

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
                {index + 1}
              </span>

              <span className="text-lg font-semibold">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;