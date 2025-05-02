import { useConfigsStore } from "@/stores/configs";
import { Alien } from "phosphor-react";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function DarkModeButton() {
	const { darkMode, toggleDarkMode } = useConfigsStore();
	const { t } = useTranslation();

	const getSpanText = useCallback(
		(mode: boolean) => {
			return mode ? t("buttons.toLightMode") : t("buttons.toDarkMode");
		},
		[t],
	);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div className="fixed bottom-[1.5rem] right-4">
			<button
				type="button"
				className="px-2 rounded-full h-16 bg-slate-900 dark:bg-slate-100 group flex items-center"
				onClick={toggleDarkMode}
			>
				<Alien className="text-slate-100 dark:text-slate-900 w-12 h-12" />
				<span className="text-slate-100 dark:text-slate-900 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
					{getSpanText(darkMode)}
				</span>
			</button>
		</div>
	);
}
