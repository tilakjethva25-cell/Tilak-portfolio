

function About() {
  const cards = [
    {
      icon: "🎓",
      title: "Education",
      value: "B.Tech CSE",
    },
    {
      icon: "💼",
      title: "Experience",
      value: "Web Development",
    },
    {
      icon: "🚀",
      title: "Projects",
      value: "Portfolio & React Apps",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0f172a] to-[#050816] text-white px-6 md:px-10 lg:px-24 py-32 flex flex-col lg:flex-row items-center justify-between gap-20">

      {/* Left Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[40%] flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 flex items-center justify-center text-[100px] md:text-[140px] font-bold shadow-[0_0_120px_rgba(59,130,246,.5)] border-4 border-white/10"
        >
          T
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[60%]"
      >
        <p className="text-cyan-400 tracking-[6px] text-sm font-semibold">
          ABOUT ME
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
          Turning Ideas Into
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Modern Experiences
          </span>
        </h1>

        <p className="mt-10 text-gray-400 leading-8 md:leading-10 text-base md:text-lg">
          Hello, I'm Tilak — a passionate B.Tech student specializing in
          Computer Science and Engineering with a strong interest in Frontend
          Development, React, UI Design, and modern web technologies.

          <br />
          <br />

          My journey started with HTML, CSS, and JavaScript and expanded into
          React, Tailwind CSS, responsive design, and innovative digital
          solutions.

          <br />
          <br />

          I continuously improve through hands-on projects, learning, and
          practical development. My goal is to build impactful products that
          solve real-world problems.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20 duration-500"
            >
              <h3 className="text-cyan-400 text-2xl font-semibold">
                {card.icon} {card.title}
              </h3>

              <p className="mt-5 text-gray-300">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;