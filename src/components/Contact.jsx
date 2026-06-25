function Contact() {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact Me
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Feel free to contact me for projects, internships, or collaborations.
        </p>

        <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400">📧 Email: youremail@gmail.com</p>
          <p className="text-gray-400 mt-2">📱 Phone: +91 7285862509</p>
          <p className="text-gray-400 mt-2">📍 Gujarat, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;