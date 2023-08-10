function Hero() {
  return (
    <section
      className="absolute w-full top-0"
      style={{
        background:
          "linear-gradient(to top, #93059D 0%, rgb(151,124,197) 100%)",
      }}
    >
      <div
        className="w-full h-[100dvh] bg-contain bg-no-repeat  bg-right-bottom  bg-hero  flex "
        id="home"
      >
        <div className="text-white flex flex-col self-center xs:pl-[5%] lg:pl-[15%] pb-2 z-10">
          <h2 className="mb-1 text-2xl text-special-purple">
            <span className="inline-block h-[2px] w-8 bg-[#e49dfc] mr-2 mb-1"></span>
            WE BUILD OUTSTANDING ONLYFANS CAREERS
          </h2>
          <h1 className="text-5xl md:text-6xl text-white font-Archivo font-extrabold">
            Empower to <br />
            Succeed
          </h1>

          <div className="flex items-center translate-y-20">
            <h3 className="text-sm md:text-lg tracking-widest mr-2">
              SCROLL DOWN
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
