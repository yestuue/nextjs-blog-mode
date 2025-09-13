'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import StatsCard from '@/components/StatsCard';
import "./home.css";

interface Stat {
  value: string;
  label: string;
  description?: string;
}

export default function Page() {
  const t = useTranslations('homePage');
  const params = useParams(); // Fixed: Get params properly
  const locale = params?.locale as string; // Type assertion for locale
     
  const stats: Stat[] = [ // Fixed: Added explicit type annotation
    {
      value: '2%',
      label: 'of crypto investors identify as Black',
    },
    {
      value: '$10T+',
      label: 'racial wealth gap in the U.S.',
    },
    {
      value: '86%',
      label: 'of Black Americans prioritize financial independence',
      description: 'Yet lack access to trusted resources',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline={t('empoweringBlack')}
        subtext={t('joinUs')}
        cta={{
          primary: {
            text: t('startLearning'),
            href: `/${locale}/blogs`,
          },
          secondary: {
            text: t('subscribeNow'),
            href: '#newsletter',
          },
        }}
      />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C3E50] text-center mb-6">
            {t('welcomeBlackWealth')}
          </h2>
          <div className="text-lg text-[#6C757D] text-center max-w-3xl mx-auto">
            <p className="mb-4">{t('trustedSpace')}</p>
            <p className="mb-4">{t('ourMission1')}</p>
            <p className="mb-4">{t('ourMission2')}</p>
            <p>{t('ourMission3')}</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-[#2C3E50] italic mb-4">
            &quot;{t('wealthQuote1')} {t('wealthQuote2')}&quot;
          </blockquote>
          <cite className="text-xl text-[#6C757D]">- Chris Rock</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A90E2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('readyToTransform')}</h2>
          <p className="text-xl mb-8">{t('contactUs')}</p>
          <a
            href={`/${locale}/contact`} // Fixed: Use locale for proper routing
            className="inline-block px-8 py-4 bg-white text-[#4A90E2] rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );
}