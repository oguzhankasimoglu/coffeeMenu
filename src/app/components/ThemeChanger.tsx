import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-1 gap-2 justify-center items-center m-2">
      <div className="text-black dark:text-white border border-black dark:border-white rounded-3xl p-2">
        {theme}
        {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
      </div>
      <div className="flex">
        <button
          className="text-black dark:text-white border border-black dark:border-white rounded-3xl p-2"
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
