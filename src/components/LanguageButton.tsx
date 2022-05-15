import useTextContext from "../contexts/consumers/text-context-consumer";

export default function LanguageButton() {
  const { toggleFn, otherLanguage } = useTextContext();

  function handleClick() {
    toggleFn();
  }

  return (
    <button onClick={handleClick}>
      {otherLanguage == "en" ? "🇺🇸" : "🇧🇷"} {otherLanguage.toUpperCase()}
    </button>
  );
}
