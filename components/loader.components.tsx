import { useTheme } from "next-themes";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        <PropagateLoader color="white" />
      </>
    );
  } else {
    return (
      <>
        <PropagateLoader />
      </>
    );
  }
};

export default Loader;
