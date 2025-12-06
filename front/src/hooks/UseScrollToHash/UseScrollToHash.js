import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [pathname, hash]);
}