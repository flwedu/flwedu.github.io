import { Alien } from "phosphor-react";
import { useTranslation } from 'react-i18next'
import useDarkModeContext from "../contexts/consumers/darkmode-consumer";

export default function DarkModeButton() {
  const { darkMode, toggleFn } = useDarkModeContext();
  const {t} = useTranslation();

  function getSpanText(mode: boolean) {
    return mode ? t("buttons.toLightMode") : t("buttons.toDarkMode");
  }

  return (
    <div className="fixed bottom-[1.5rem] right-4">
      <button
        className="px-2 rounded-full h-16 bg-slate-900 dark:bg-slate-100 group flex items-center"
        onClick={toggleFn}
      >
        <Alien className="text-slate-100 dark:text-slate-900 w-12 h-12" />
        <span className="text-slate-100 dark:text-slate-900 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          {getSpanText(darkMode)}
        </span>
      </button>
    </div>
  );
}
