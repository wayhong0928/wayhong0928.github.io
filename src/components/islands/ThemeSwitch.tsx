import type { FC } from "react";

const ThemeSwitch: FC = () => {
  const toggle = () => {
    const el = document.documentElement;
    const isDark = el.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return (
    <button type="button" onClick={toggle} className="btn" aria-pressed="false" title="Toggle theme">
      🌓
    </button>
  );
};
export default ThemeSwitch;
