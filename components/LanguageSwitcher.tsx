'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Locale, locales } from '@/i18n';
import './LanguageSwitcher.css';

type Props = {
  currentLocale: Locale;
};

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'French'
};

const FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  fr: '🇫🇷'
};

export default function LanguageSwitcher({ currentLocale }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale;
        const newPath = segments.join('/') || '/';
        router.push(newPath);
        setOpen(false);
    };

    // ✅ Close menu on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const t = useTranslations('LanguageSwitcher');

    return (
        <div className="lang-switcher" ref={dropdownRef}>
            <button 
                className="lang-trigger" 
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-haspopup="listbox"
                aria-label={t('switchLanguage')}
            >
                🌐 {LANGUAGE_NAMES[currentLocale]}
                <span className={`arrow ${open ? 'open' : ''}`} />
            </button>

            <ul 
                className={`lang-menu ${open ? 'show' : ''}`}
                role="listbox"
                aria-label={t('languages')}
                tabIndex={-1}
            >
                {locales.map((locale) => (
                    <li
                        key={locale}
                        role="option"
                        aria-selected={currentLocale === locale}
                        onClick={() => changeLanguage(locale)}
                        className={currentLocale === locale ? 'active' : ''}
                    >
                        {FLAGS[locale]} {LANGUAGE_NAMES[locale]}
                    </li>
                ))}
            </ul>
        </div>
    );
}
