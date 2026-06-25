import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-black
      via-slate-950
      to-purple-950
      text-white
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      px-10
      lg:px-24
      "
    >
      {/* Background Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Left Content */}

      <div className="w-full lg:w-1/2 z-10">
        <p
          className="
          text-cyan-400
          tracking-[8px]
          mb-6
          uppercase
          animate-bounce
          "
        >
          ✦ React Developer • Frontend Engineer
        </p>

        <h1
          className="
          text-6xl
          md:text-7xl
          lg:text-8xl
          font-extrabold
          leading-tight
          "
        >
          Hi, I'm

          <span
            className="
            block
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-purple-400
            text-transparent
            bg-clip-text
            drop-shadow-lg
            "
          >
            Tilak
          </span>
        </h1>

        <h2
          className="
          mt-6
          text-3xl
          text-gray-300
          "
        >
          Creating Digital Experiences
        </h2>

        <p
          className="
          mt-8
          text-gray-400
          text-lg
          leading-9
          max-w-[650px]
          "
        >
          Passionate B.Tech CSE student focused on building
          futuristic web applications with React, Tailwind CSS,
          modern UI design and innovative user experiences.
        </p>

        <div
          className="
          flex
          gap-5
          mt-12
          flex-wrap
          "
        >
          <button
            onClick={() => navigate("/projects")}
            className="
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-110
            duration-300
            px-8
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            shadow-cyan-500/30
            "
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/about")}
            className="
            border
            border-cyan-400
            hover:bg-cyan-500
            hover:scale-110
            duration-300
            px-8
            py-4
            rounded-2xl
            font-semibold
            "
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Right Content */}

      <div
        className="
        w-full
        lg:w-1/2
        flex
        justify-center
        relative
        mt-20
        lg:mt-0
        z-10
        "
      >
        <div
          className="
          w-[380px]
          h-[420px]
          rounded-[40px]
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          flex
          flex-col
          justify-center
          items-center
          hover:scale-105
          hover:rotate-2
          duration-500
          shadow-2xl
          shadow-cyan-500/20
          "
        >
          <div
            className="
            w-36
            h-36
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            flex
            items-center
            justify-center
            text-5xl
            font-bold
            "
          >
            T
          </div>

          <h3
            className="
            mt-8
            text-5xl
            font-bold
            "
          >
            TILAK
          </h3>

          <p
            className="
            mt-4
            text-gray-300
            text-lg
            "
          >
            React Developer
          </p>

          <div className="flex gap-4 mt-8">
            <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300">
              React
            </span>

            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300">
              Tailwind
            </span>

            <span className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300">
              JS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;