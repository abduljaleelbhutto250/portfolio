function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="#home"
          className="text-2xl font-bold"
        >
          AJ
          <span className="text-blue-500">.</span>
        </a>

        <div className="hidden gap-6 md:flex">

          <a href="#home" className="hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a href="#services" className="hover:text-blue-400">
            Services
          </a>

          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#education" className="hover:text-blue-400">
            Education
          </a>

          <a href="#journey" className="hover:text-blue-400">
            Journey
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>

        </div>

        <a
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700"
        >
          Hire Me
        </a>

      </div>
    </nav>
  );
}

export default Navbar;