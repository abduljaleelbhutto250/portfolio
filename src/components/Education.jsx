function Education() {
  return (
    <section
      id="education"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold">
          Education &{" "}
          <span className="text-blue-500">
            Training
          </span>
        </h2>

        <div className="mt-12 space-y-6">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h3 className="text-xl font-bold">
              Intermediate / HSSC
            </h3>

            <p className="mt-2 text-slate-400">
              Higher Secondary Education
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h3 className="text-xl font-bold">
              Matriculation
            </h3>

            <p className="mt-2 text-slate-400">
              Science Group
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h3 className="text-xl font-bold">
              Web Development Training
            </h3>

            <p className="mt-2 text-slate-400">
              Web Development Training
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;