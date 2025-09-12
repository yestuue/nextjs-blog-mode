// i18n.ts
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "fr"] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
    const localeValue = (locales.includes(locale as Locale) ? locale : "en") as Locale;

    try {
        return {
            locale: localeValue,
            messages: (await import(`./messages/${localeValue}.json`)).default,
            timeZone: "UTC"
        };
    } catch (error) {
        console.error(`Failed to load messages for locale: ${localeValue}`, error);
        // Fallback to English if message loading fails
        return {
            locale: "en",
            messages: (await import("./messages/en.json")).default,
            timeZone: "UTC"
        };
    }
});
