import { useConfigsStore } from "@/stores/configs";
import { Moon, Settings, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

type ConfigurationsButtonProps = {
	className?: string;
};

export function ConfigurationsButton({ className }: ConfigurationsButtonProps) {
	const { i18n, t } = useTranslation();
	const { toggleDarkMode, toggleLanguage, darkMode } = useConfigsStore();

	function handleClickTranslate(language: "pt-BR" | "en-US") {
		i18n.changeLanguage(language);
		toggleLanguage(language);
	}

	function handleClickDarkMode(theme: "dark" | "light") {
		toggleDarkMode(theme);
	}

	const getFlag = (selectedLanguage: "pt-BR" | "en-US") => {
		if (selectedLanguage === "pt-BR") {
			return "🇧🇷";
		}
		return "🇺🇸";
	};

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className={className}>
				<Settings />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="dark:bg-gray-800 dark:text-white">
				<DropdownMenuItem className="dark:text-white dark:hover:bg-gray-700">
					{t("buttons.language")}
					<ToggleGroup
						type="single"
						aria-label="Language"
						value={i18n.language}
						variant="outline"
						onValueChange={(value) =>
							handleClickTranslate(value as "pt-BR" | "en-US")
						}
					>
						<ToggleGroupItem value="pt-BR">{getFlag("pt-BR")}</ToggleGroupItem>
						<ToggleGroupItem value="en-US">{getFlag("en-US")}</ToggleGroupItem>
					</ToggleGroup>
				</DropdownMenuItem>
				<DropdownMenuItem className="dark:text-white dark:hover:bg-gray-700">
					{t("buttons.changeTheme")}
					<ToggleGroup
						type="single"
						aria-label="Theme"
						variant="outline"
						value={darkMode ? "dark" : "light"}
						onValueChange={(value) =>
							handleClickDarkMode(value as "dark" | "light")
						}
					>
						<ToggleGroupItem
							value="dark"
							className="dark:text-white checked:bg-gray-700"
						>
							<Moon />
						</ToggleGroupItem>
						<ToggleGroupItem
							value="light"
							className="dark:text-white checked:bg-gray-700"
						>
							<Sun />
						</ToggleGroupItem>
					</ToggleGroup>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
