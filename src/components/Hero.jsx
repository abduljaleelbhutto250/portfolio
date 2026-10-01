function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        <div>

          <p className="mb-4 text-lg text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Abdul Jaleel
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 md:text-3xl">
            Junior Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build responsive, modern and user-friendly
            websites using React, JavaScript, Tailwind CSS
            and modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              Contact Me
            </a>

          </div>

        </div>

        <div className="flex justify-center">

         <div className="relative flex h-80 w-80 items-center justify-center">

  {/* Ghoomta hua outer circle */}
  <div className="absolute inset-0 animate-spin rounded-full border-2 border-dashed border-blue-500/60"></div>

  {/* Ghoomta hua second circle */}
  <div className="absolute inset-5 animate-[spin_8s_linear_infinite_reverse] rounded-full border border-cyan-400/40"></div>

  {/* Floating dots */}
  <div className="absolute -right-2 top-10 h-4 w-4 animate-bounce rounded-full bg-blue-500"></div>

  <div className="absolute -bottom-1 left-12 h-3 w-3 animate-pulse rounded-full bg-cyan-400"></div>

  <div className="absolute -left-2 top-32 h-3 w-3 animate-ping rounded-full bg-blue-400"></div>

  {/* Profile Image */}
  <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-900 shadow-2xl shadow-blue-500/30">

    <img
      src="/abdul.png"
      alt="Abdul Jaleel"
      className="h-full w-full object-cover"
    />

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;