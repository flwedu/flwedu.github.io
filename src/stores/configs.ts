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
	toggleDarkMode: () => void;
	toggleLanguage: () => void;
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
				toggleDarkMode: () => {
					return set((state) => ({ darkMode: !state.darkMode }));
				},
				toggleLanguage: () =>
					set((state) => ({
						language: state.language === "pt-BR" ? "en-US" : "pt-BR",
					})),
			};
		},
		{
			name: "configs",
			storage: createJSONStorage(() => localStorage),
			version: 1,
		},
	),
);
