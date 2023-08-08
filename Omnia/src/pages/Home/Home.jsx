import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <div className="z-50 text-white mt-[100vh] max-w-[1700px] mx-auto" >
        <Services />
        <About />
        <LetsTalk />
        <Faq />
      </div>
    </div>
  );
}

export default Home;
