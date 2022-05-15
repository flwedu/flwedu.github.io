import { Alien } from "phosphor-react";
import useDarkModeContext from "../contexts/consumers/darkmode-consumer";

export default function DarkModeButton() {
  const { toggleFn } = useDarkModeContext();

  return (
    <div
      className="fixed bottom-[1.5rem] right-4 rounded-full h-16 w-16 bg-slate-900 dark:bg-slate-100"
      onClick={toggleFn}
    >
      <Alien size={64} className="text-slate-100 dark:text-slate-900" />
    </div>
  );
}
