function About() {
  return (
    <section className=" py-10 md:py-20 text-white font-Archivo absolute w-full left-0"
    id="about"
    style={{
      backgroundImage:
        "linear-gradient(200deg, rgba(75,86,233,1) 0%, rgba(255,136,220,1) 100%",
    }}
  
    >
      <div className=" max-w-6xl mx-auto px-5 md:px-0">
        <div className="flex gap-36 items-center ">
          <div className="text-white flex flex-col gap-5 max-w-xl">
            <h1 className="text-md font-bold pt-10 text-white">
              HOW WE DO IT
            </h1>
            <h1 className="text-5xl pt-6 font-extrabold text-white">
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
          <div className="mt-16 overflow-hidden  hidden lg:block ">
            <img
              src="https://ik.imagekit.io/riviaa/Omnia/A_letter_tech_logo_2.png?updatedAt=1691831497528"
              alt="aboutUS"
              className="w-full h-full scale-x-110 object-contain object-center rounded-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
