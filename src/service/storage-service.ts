export type Settings = {
  darkmode: boolean;
  language: "en" | "pt-br";
};

export class StorageService {
  constructor() {}

  save(settings: Settings) {
    const json = JSON.stringify(settings);
    localStorage.setItem("settings", json);
  }

  load() {
    const json = localStorage.getItem("settings");
    if (json) {
      const settings = JSON.parse(json) as Settings;
      return settings;
    }
    const settings: Settings = { darkmode: false, language: "pt-br" };
    return settings;
  }

  loadItem(name: keyof Settings) {
    return this.load()[name];
  }

  saveItem(name: keyof Settings, value: typeof name) {
    let settings = this.load();
    settings = { ...settings, [name]: value };
    this.save(settings);
  }
}
