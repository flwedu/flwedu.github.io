import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ConfigsStore = {
	darkMode: boolean;
	language: "pt-BR" | "en-US";
};

const initialState: ConfigsStore = {
	darkMode: false,
	language: "pt-BR",
};

type ConfigsStoreActions = {
	toggleDarkMode: (theme: "dark" | "light") => void;
	toggleLanguage: (language: "pt-BR" | "en-US") => void;
};

/**
 * Store for configurations
 * @returns ConfigsStore
 */
export const useConfigsStore = create<ConfigsStore & ConfigsStoreActions>()(
	persist(
		(set, get) => {
			return {
				...initialState,
				toggleDarkMode: (theme: "dark" | "light") => {
					return set(() => ({ darkMode: theme === "dark" }));
				},
				toggleLanguage: (language: "pt-BR" | "en-US") => {
					return set(() => ({ language }));
				},
			};
		},
		{
			name: "configs",
			storage: createJSONStorage(() => localStorage),
			version: 1,
		},
	),
);
