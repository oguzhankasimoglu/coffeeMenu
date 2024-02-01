import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-1">
      <div className="text-black dark:text-white border rounded-3xl">
        {theme}
        {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
      </div>
      <div className="">
        <button
          className="text-black dark:text-white border rounded-3xl"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};
