import { Alien } from "phosphor-react";
import useDarkModeContext from "../contexts/consumers/darkmode-consumer";
import useTextContext from "../contexts/consumers/text-context-consumer";

export default function DarkModeButton() {
  const { darkmode, toggleFn } = useDarkModeContext();
  const { text } = useTextContext();

  function getSpanText(darkmode: boolean) {
    return darkmode ? text.buttons.toLightMode : text.buttons.toDarkMode;
  }

  return (
    <div className="fixed bottom-[1.5rem] right-4">
      <button
        className="px-2 rounded-full h-16 bg-slate-900 dark:bg-slate-100 group flex items-center"
        onClick={toggleFn}
      >
        <Alien className="text-slate-100 dark:text-slate-900 w-12 h-12" />
        <span className="text-slate-100 dark:text-slate-900 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          {getSpanText(darkmode)}
        </span>
      </button>
    </div>
  );
}
