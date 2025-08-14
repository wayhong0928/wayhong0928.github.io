// src/components/islands/LangSwitcher.tsx
import type { FC } from "react";

const LangSwitcher: FC<{ locale: "zh" | "en" }> = ({ locale }) => {
  const onSwitch = () => {
    const path = window.location.pathname;

    if (locale === "zh") {
      // zh -> en
      const next = path === "/" ? "/en/" : path.replace(/^\/zh\b/, "/en");
      window.location.assign(next);
    } else {
      // en -> zh
      const next = path.replace(/^\/en\b/, "/zh");
      if (next === "/zh/" || next === "/zh") {
        window.location.assign("/");
        return;
      }
      window.location.assign(next);
    }
  };

  return (
    <button
      type="button"
      onClick={onSwitch}
      className="btn"
      aria-label="Switch language"
    >
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
};

export default LangSwitcher;
