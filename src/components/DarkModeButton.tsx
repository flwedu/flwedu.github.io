import { Alien } from "phosphor-react";

export function DarkModeButton() {
  const html = document.querySelector("html");

  function toggleDarkMode() {
    html?.classList.toggle("dark");
  }

  return (
    <div
      className="absolute right-2 bottom-2 rounded-full bg-violet-500"
      onClick={toggleDarkMode}
    >
      <Alien size={36} />
    </div>
  );
}
