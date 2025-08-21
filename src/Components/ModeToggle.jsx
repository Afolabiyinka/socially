import { IconButton } from "@material-tailwind/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../Contexts/ThemeContext";

const ModeToggle = ({ icon }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-1 items-center rounded-lg p-1">
      <IconButton
        variant="ghost"
        color="primary"
        id={icon}
        isCircular
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun color="black" size={30} />
        ) : (
          <Moon color="white" size={30} />
        )}
      </IconButton>
    </div>
  );
};

export default ModeToggle;
