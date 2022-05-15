import { Alien } from "phosphor-react";
import useDarkModeContext from "../contexts/consumers/darkmode-consumer";

export default function DarkModeButton() {
  const { toggleFn } = useDarkModeContext();

  return (
    <div
      className="sticky bottom-2 left-2 self-end rounded-full h-[4rem] w-[4rem] bg-slate-900 dark:bg-slate-100"
      onClick={toggleFn}
    >
      <Alien size="4rem" className="text-slate-100 dark:text-slate-900" />
    </div>
  );
}
