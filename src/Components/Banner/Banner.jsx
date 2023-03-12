import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Banner.css";

const Banner = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/", 2);
  const [isContactPage, setIsContactPage] = useState(
    pathname.includes("/contact-us")
  );

  useEffect(() => {
    if (pathname.includes("/contact-us") || pathname.includes("/video-call")) {
      setIsContactPage(true);
    } else {
      setIsContactPage(false);
    }
  }, [pathname]);

  function isRegisterPage() {
    if (pathname.includes("/login") || pathname.includes("/signup"))
      return true;
    else return false;
  }

  if (!isContactPage) {
    return (
      <div
        className="Banner-container main-bg-inverse"
        id={`${isRegisterPage() && "removeTopBorder"}`}
      >
        <div>
          <p>Home / {path}</p>
          <h1 className="Banner-heading">{pathname === "/" ? "Home" : path}</h1>
        </div>
      </div>
    );
  } else return null;
};

export default Banner;
