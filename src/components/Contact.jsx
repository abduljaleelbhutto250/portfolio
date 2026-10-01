import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("Please fill all required fields.");
      return;
    }

    try {

      setStatus("Sending...");

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {

        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

      } else {

        setStatus(
          data.message || "Something went wrong."
        );

      }

    } catch (error) {

      console.log(error);

      setStatus(
        "Server is not connected. Please try again later."
      );

    }

  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold">
          Let's{" "}
          <span className="text-blue-500">
            Work Together
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Have a project, job opportunity or any
          question? Send me a message.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* CONTACT INFORMATION */}

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I am open to web development opportunities,
              internships, freelance projects and
              collaborations.
            </p>

            <div className="mt-8 space-y-5">

              <div>

                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-semibold">
                  Karachi, Pakistan
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Phone
                </p>

                <p className="mt-1 font-semibold">
                  03293098480
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Availability
                </p>

                <p className="mt-1 font-semibold text-green-400">
                  Open to Opportunities
                </p>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm text-slate-400">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500"
                ></textarea>

              </div>


              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-700"
              >
                Send Message
              </button>


              {status && (
                <p className="text-center text-sm text-blue-400">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;