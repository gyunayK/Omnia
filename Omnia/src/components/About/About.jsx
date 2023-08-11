function About() {
  return (
    <section className="bg-[#f1f1f1] py-20 text-black font-Archivo absolute w-full left-0"
    id="about"
  
    >
      <div className="p-5 max-w-6xl mx-auto">
        <div className="flex gap-36 items-center ">
          <div className="text-black flex flex-col gap-5 max-w-xl">
            <h1 className="text-md font-bold pt-10 text-[#01AEEF]">
              HOW WE DO IT
            </h1>
            <h1 className="text-5xl pt-6 font-extrabold text-black">
              About us
            </h1>
            <p className="text-[20px]">
              At Omnia, we are your dedicated partner in maximizing your
              potential on OnlyFans.
            </p>
            <p className="text-[20px]">
              With a wealth of experience in the adult content industry, we
              offer a range of specialized services tailored to your success.
              From crafting compelling profiles and creating captivating content
              to strategic marketing, audience engagement, and comprehensive
              analytics, we&apos;re committed to propelling your journey to new
              heights. Let us handle the intricacies while you focus on what you
              do best – creating amazing content and building your unique brand.
              Join Omnia and unlock the full spectrum of possibilities on
              OnlyFans.
            </p>
          </div>
          <div className="mt-16 w-fit hidden md:block">
            <img
              src="https://ik.imagekit.io/riviaa/Omnia/1a948d4141e3570dc27abff171bc8d8d.jpg?updatedAt=1691623348753"
              alt="aboutUS"
              className="w-full h-[400px] object-contain object-center rounded-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
