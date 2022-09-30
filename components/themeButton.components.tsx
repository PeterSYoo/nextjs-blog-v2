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
          <>
            <BsSun />
          </>
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
          <>
            <BsMoonStars />
          </>
        </button>
      </>
    );
  }
};

export default ThemeButton;
