import {useState, useEffect} from "react"

export const useScrollTop = (thresehold=10)=>{
      const [scrolled, setScrolled] = useState(false);

      useEffect(()=>{
            const handleScroll = ()=>{
                  if (window.scrollY > thresehold){
                        setScrolled(true);
                  }
                  else{
                        setScrolled(false);
                  }
            }
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, [thresehold]);
      return scrolled;
}