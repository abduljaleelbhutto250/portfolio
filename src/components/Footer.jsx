function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-slate-400">
          © 2026 Abdul Jaleel. All rights reserved.
        </p>

        <div className="flex gap-5">

          <a
            href="#home"
            className="text-slate-400 hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="text-slate-400 hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-400 hover:text-blue-400"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;