import { Alien } from "phosphor-react";

export function DarkModeButton() {
  const html = document.querySelector("html");

  function toggleDarkMode() {
    html?.classList.toggle("dark");
  }

  return (
    <div
      className="sticky bottom-2 self-end rounded-full w-9 bg-slate-900 dark:bg-slate-100"
      onClick={toggleDarkMode}
    >
      <Alien size={36} className="text-slate-100 dark:text-slate-900" />
    </div>
  );
}
