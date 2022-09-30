import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        <button
          onClick={() => setTheme("light")}
          type="button"
          className="text-xl"
        >
          <div className="group">
            <BsSun />
            <span className="sidebar-tooltip-left-triangle group-hover:scale-100 ml-[40px] -mt-[25px] md:ml-[70px] md:-mt-[25px]"></span>
            <span className="sidebar-tooltip group-hover:scale-100 ml-[50px] -mt-[25px] md:ml-[80px] md:-mt-[25px]">
              Lights on
            </span>
          </div>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => setTheme("dark")}
          type="button"
          className="text-xl"
        >
          <div className="group">
            <BsMoonStars />
            <span className="sidebar-tooltip-left-triangle group-hover:scale-100 ml-[40px] -mt-[25px] md:ml-[70px] md:-mt-[25px]"></span>
            <span className="sidebar-tooltip group-hover:scale-100 ml-[50px] -mt-[25px] md:ml-[80px] md:-mt-[25px]">
              Lights off
            </span>
          </div>
        </button>
      </>
    );
  }
};

export default ThemeButton;
