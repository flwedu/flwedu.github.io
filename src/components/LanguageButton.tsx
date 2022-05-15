import useTextContext from "../contexts/consumers/text-context-consumer";

export default function LanguageButton() {
  const { toggleFn, language } = useTextContext();

  function handleClick() {
    toggleFn();
  }

  return (
    <div
      className="fixed bottom-[6rem] right-4 rounded-full h-16 w-16 bg-slate-900 dark:bg-slate-100 flex justify-center items-center"
      onClick={handleClick}
    >
      <span className="text-5xl text-center items-center">
        {language == "en" ? "🇺🇸" : "🇧🇷"}
      </span>
    </div>
  );
}
