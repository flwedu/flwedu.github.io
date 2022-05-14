import { Alien } from "phosphor-react";

export function DarkModeButton(props: { toggleDarkMode: () => void }) {
  return (
    <div
      className="sticky bottom-2 self-end rounded-full w-[48px] bg-slate-900 dark:bg-slate-100"
      onClick={props.toggleDarkMode}
    >
      <Alien size={48} className="text-slate-100 dark:text-slate-900" />
    </div>
  );
}
