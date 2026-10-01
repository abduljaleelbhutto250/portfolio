function WhyWorkWithMe() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold">
          Why{" "}
          <span className="text-blue-500">
            Work With Me?
          </span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">

            <div className="text-4xl">
              💻
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Modern Development
            </h3>

            <p className="mt-3 text-slate-400">
              I use modern technologies to build
              responsive web applications.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">

            <div className="text-4xl">
              📱
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Responsive Design
            </h3>

            <p className="mt-3 text-slate-400">
              Websites are designed to work across
              different screen sizes.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">

            <div className="text-4xl">
              🚀
            </div>

            <h3 className="mt-4 text-xl font-bold">
              Continuous Learning
            </h3>

            <p className="mt-3 text-slate-400">
              I continuously learn new technologies
              and improve my development skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyWorkWithMe;