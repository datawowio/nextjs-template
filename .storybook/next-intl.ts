import en from "../src/locales/en/en.json";
import th from "../src/locales/th/th.json";

// noinspection ES6PreferShortImport
import { locales } from "../src/config/i18n";

const messagesByLocale: Record<string, unknown> = {
  en,
  th,
};

const nextIntl = {
  defaultLocale: locales[0],
  messagesByLocale,
};

export default nextIntl;
