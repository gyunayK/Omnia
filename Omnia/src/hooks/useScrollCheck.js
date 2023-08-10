import { useState, useEffect } from "react";

const useScrollCheck = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   
      const checkScroll = () => {
        if (window.scrollY > window.innerHeight * 0.9) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };


    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return isScrolled;
};

export default useScrollCheck;