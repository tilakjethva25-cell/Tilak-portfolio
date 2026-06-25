function Experience() {
  const internshipSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive UI",
    "Debugging",
  ];

  const fresherSkills = [
    "Portfolio",
    "Projects",
    "Problem Solving",
    "UI Design",
    "AI Learning",
    "Growth",
  ];

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-purple-950
      text-white
      px-6
      md:px-10
      lg:px-24
      py-32
      "
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p
            className="
            text-cyan-400
            tracking-[8px]
            text-sm
            uppercase
            animate-bounce
            "
          >
            My Experience
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
            Experience{" "}
            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-400
              to-purple-400
              text-transparent
              bg-clip-text
              "
            >
              & Internship
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-10
          mt-24
          "
        >
          {/* Internship Card */}
          <div
            className="
            group
            bg-white/10
            backdrop-blur-2xl
            rounded-[30px]
            p-8
            md:p-10
            border
            border-white/10
            hover:border-cyan-400/40
            hover:scale-105
            duration-500
            shadow-xl
            hover:shadow-cyan-500/30
            "
          >
            <div className="text-6xl group-hover:rotate-12 duration-500">
              💼
            </div>

            <h2 className="text-3xl md:text-4xl mt-6 font-semibold">
              Web Development Internship
            </h2>

            <h4 className="mt-4 text-cyan-400">
              Frontend • React • UI Development
            </h4>

            <p className="mt-8 leading-8 text-gray-300">
              Completed practical training in modern web development focused on
              responsive websites, UI design and frontend architecture.

              <br />
              <br />

              Worked with reusable React components and improved real
              development workflow experience.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {internshipSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-5
                  py-3
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-300
                  hover:scale-110
                  duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Fresher Card */}
          <div
            className="
            group
            bg-white/10
            backdrop-blur-2xl
            rounded-[30px]
            p-8
            md:p-10
            border
            border-white/10
            hover:border-purple-400/40
            hover:scale-105
            duration-500
            shadow-xl
            hover:shadow-purple-500/30
            "
          >
            <div className="text-6xl group-hover:rotate-12 duration-500">
              🚀
            </div>

            <h2 className="text-3xl md:text-4xl mt-6 font-semibold">
              Fresher Developer Journey
            </h2>

            <h4 className="mt-4 text-purple-400">
              Learning • Building • Growing
            </h4>

            <p className="mt-8 leading-8 text-gray-300">
              Building personal and academic projects while continuously
              improving development skills.

              <br />
              <br />

              Focused on creating modern UI, learning frontend technologies and
              preparing for professional software opportunities.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {fresherSkills.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-5
                  py-3
                  rounded-full
                  bg-purple-500/10
                  border
                  border-purple-400/20
                  text-purple-300
                  hover:scale-110
                  duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;