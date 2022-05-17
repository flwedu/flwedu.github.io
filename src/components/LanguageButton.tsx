import useTextContext from "../contexts/consumers/text-context-consumer";
import brazilFlag from "../../static/brazil.svg";
import usFlag from "../../static/us.svg";

export default function LanguageButton() {
  const { toggleFn, language, text } = useTextContext();

  function handleClick() {
    toggleFn();
  }

  function getImageUrl(language: string) {
    return language == "pt-br" ? brazilFlag : usFlag;
  }

  return (
    <div className="fixed bottom-[6rem] right-4">
      <button
        className="px-2 rounded-full h-16 bg-slate-900 dark:bg-slate-100 group flex items-center"
        onClick={handleClick}
      >
        <img
          src={getImageUrl(language)}
          alt="Selected language country flag"
          className="w-12 object-cover rounded-full items-center"
        ></img>
        <span className="text-slate-100 dark:text-slate-900 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          {text.buttons.language}
        </span>
      </button>
    </div>
  );
}
