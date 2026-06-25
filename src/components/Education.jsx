function Education() {
  const diplomaSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Database",
    "Programming",
  ];

  const degreeSkills = [
    "AI",
    "Data Science",
    "Python",
    "Machine Learning",
    "React",
    "Frontend",
  ];

  return (
    <section
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-purple-950
      to-slate-950
      text-white
      px-6
      md:px-10
      lg:px-24
      py-32
      relative
      overflow-hidden
      "
    >
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-[120px] animate-bounce"></div>

      <div className="relative z-10 text-center">
        <p
          className="
          text-pink-400
          tracking-[6px]
          text-sm
          animate-pulse
          "
        >
          ACADEMIC JOURNEY
        </p>

        <h1
          className="
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          mt-5
          "
        >
          My <span className="text-cyan-400">Education</span>
        </h1>
      </div>

      <div
        className="
        relative
        mt-20
        space-y-10
        z-10
        "
      >
        <div
          className="
          hidden
          xl:block
          absolute
          left-1/2
          top-0
          w-[2px]
          h-full
          bg-gradient-to-b
          from-pink-500
          via-cyan-500
          to-purple-500
          "
        ></div>

        {/* Diploma Card */}
        <div
          className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-pink-500/20
          rounded-[30px]
          p-8
          md:p-10
          xl:w-[46%]
          hover:scale-105
          hover:shadow-[0_0_50px_rgba(236,72,153,0.4)]
          transition-all
          duration-700
          animate-[fadeInUp_1s_ease]
          "
        >
          <p className="text-pink-400">2022 — 2025</p>

          <h2
            className="
            text-3xl
            md:text-4xl
            mt-5
            font-semibold
            "
          >
            Diploma in Computer Engineering
          </h2>

          <h4
            className="
            mt-4
            text-gray-300
            "
          >
            LJ Polytechnic
          </h4>

          <p
            className="
            mt-8
            leading-8
            text-gray-400
            "
          >
            Worked on academic projects while improving development and
            problem-solving skills.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-10
            "
          >
            {diplomaSkills.map((skill) => (
              <span
                key={skill}
                className="
                px-5
                py-3
                rounded-full
                bg-pink-500/10
                border
                border-pink-500/30
                text-pink-300
                text-sm
                hover:scale-110
                hover:bg-pink-500/20
                transition-all
                duration-300
                cursor-pointer
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Degree Card */}
        <div
          className="
          bg-white/10
          backdrop-blur-2xl
          border
          border-cyan-500/20
          rounded-[30px]
          p-8
          md:p-10
          xl:ml-auto
          xl:w-[46%]
          hover:scale-105
          hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]
          transition-all
          duration-700
          animate-[fadeInUp_1.5s_ease]
          "
        >
          <p className="text-cyan-400">Continuing</p>

          <h2
            className="
            text-3xl
            md:text-4xl
            mt-5
            font-semibold
            "
          >
            B.Tech — CSE
          </h2>

          <h4
            className="
            mt-4
            text-gray-300
            "
          >
            JG University
          </h4>

          <p
            className="
            mt-8
            leading-8
            text-gray-400
            "
          >
            Currently exploring Artificial Intelligence, Data Science and
            modern software technologies.
            <br />
            <br />
            Focused on building practical knowledge through projects,
            learning and industry-ready development.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-10
            "
          >
            {degreeSkills.map((skill) => (
              <span
                key={skill}
                className="
                px-5
                py-3
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
                text-sm
                hover:scale-110
                hover:bg-cyan-500/20
                transition-all
                duration-300
                cursor-pointer
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;