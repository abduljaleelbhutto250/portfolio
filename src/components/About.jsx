function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold">
          About{" "}
          <span className="text-blue-500">
            Me
          </span>
        </h2>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <p className="text-lg leading-8 text-slate-300">
            My name is Abdul Jaleel and I am a Junior
            Web Developer from Karachi, Pakistan.
            I am passionate about building modern,
            responsive and user-friendly websites.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I started my web development journey with
            HTML, CSS and JavaScript and continued
            learning React, Tailwind CSS, APIs,
            Node.js, Express, MySQL and Next.js.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My goal is to become a professional
            Full-Stack Developer and work on
            real-world projects.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;