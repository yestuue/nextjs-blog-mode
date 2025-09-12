"use client";
import "./contact.css";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("Contact");

    return (
        <div className="contact">
            <div className="contact-header">
                <div className="contact-text">
                    <h2>{t("contactUs")}</h2>
                    <div>
                        <span>{t("introLine1")}</span>
                        <span>{t("introLine2")}</span>
                        <span>{t("introLine3")}</span>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form action="submit">
                    <h2>{t("submitRequest")}</h2>
                    <div className="field">
                        <label htmlFor="name">{t("nameLabel")}</label>
                        <input type="text" name="name" id="name" placeholder={t("namePlaceholder")} />
                    </div>
                    <div className="field">
                        <label htmlFor="email">{t("emailLabel")}</label>
                        <input type="text" name="email" id="email" placeholder={t("emailPlaceholder")} />
                    </div>
                    <div className="field">
                        <label htmlFor="phone-number">{t("phoneLabel")}</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder={t("phonePlaceholder")} />
                    </div>
                    <div className="field">
                        <label htmlFor="message">{t("messageLabel")}</label>
                        <textarea name="message" id="message" placeholder={t("messagePlaceholder")} />
                    </div>
                    <div className="button">{t("submitButton")}</div>
                </form>
            </div>

            <div className="contact-boxs">
                <div className="box">
                    <div className="box-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                    </div>
                    <h2>{t("generalInquiries")}</h2>
                    <span>Email@email.com</span>
                </div>
                <div className="box">
                    <div className="box-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-people-carry" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg>
                    </div>
                    <h2>{t("partnershipMedia")}</h2>
                    <span>
                        <p>{t("salesEmail")}</p>
                        <p>{t("supportEmail")}</p>
                    </span>
                </div>
                <div className="box">
                    <div className="box-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-far-bell" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path></svg>
                    </div>
                    <h2>{t("generalInquiries")}</h2>
                    <span>Email@email.com</span>
                </div>
            </div>
        </div>
    )
}