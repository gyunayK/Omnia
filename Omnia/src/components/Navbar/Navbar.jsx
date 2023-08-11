import { useState } from "react";
import useScrollCheck from "@/hooks/useScrollCheck";
import useActiveSection from "@/hooks/activeSection_ID";
import "./hamburgeStyle.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = useActiveSection(0.7);

  const isScrolled = useScrollCheck();

  const SCROLLED_COLOR = "black";
  const NOT_SCROLLED_COLOR = "white";

  const navIconStyles = {
    backgroundColor: isScrolled ? SCROLLED_COLOR : NOT_SCROLLED_COLOR,
  };

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="font-Tektur">
      <div>
        <div
          className={`hidden md:block fixed bg-logo bg-contain bg-no-repeat h-[150px] w-[150px] top-7 left-6 md:-top-8 md:left-20 2xl:left-64 max:left-[350px]   z-[200]`}
        ></div>

        <div
          id="nav-icon2"
          className={`p-7 fixed top-7 right-6 z-30 sm:block md:hidden scale-75 cursor-pointer ${
            isMenuOpen ? "open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
          <span style={navIconStyles}></span>
        </div>

        <div
          className={` ${
            isScrolled ? "bg-white text-black" : "bg-black text-white"
          } w-screen h-full fixed top-0 right-0 transition-transform duration-[200ms] ease-in-out transform overflow-hidden z-[12] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="text-3xl flex flex-col items-center justify-center space-y-4 h-full gap-8 ">
            <li
              className={`cursor-pointer `}
              onClick={() => scrollToSection("home")}
            >
              HOME{" "}
            </li>
            <li
              className={`cursor-pointer `}
              onClick={() => scrollToSection("services")}
            >
              SERVICES{" "}
            </li>
            <li
              className={`cursor-pointer `}
              onClick={() => scrollToSection("about")}
            >
              ABOUT{" "}
            </li>
            <li
              className={`cursor-pointer `}
              onClick={() => scrollToSection("letstalk")}
            >
              LETS&apos;S TALK{" "}
            </li>
          </ul>
        </div>
        <div
          className={`bg-black w-full z-[100] transition-all duration-200 ease-in-out top-0 ${
            isScrolled ? "h-[83px]" : "h-0"
          } md:fixed hidden md:block`}
        >
          <ul className="text-lg  text-white  flex gap-10 items-end justify-end p-8 fixed right-24 2xl:right-[250px] max:right-[350px] top-0 tracking-wider font-medium ">
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "home" && "text-white"
              }`}
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "services" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("services")}
            >
              SERVICES
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "about" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </li>
            <li
              className={`cursor-pointer border-transparent  border-b-2 hover:border-white ${
                activeSection === "letstalk" && "text-[#D16EFF]"
              }`}
              onClick={() => scrollToSection("letstalk")}
            >
              LET&apos;S TALK
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
