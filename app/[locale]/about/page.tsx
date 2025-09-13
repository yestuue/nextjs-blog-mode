'use client';

import Hero from '../../../components/Hero';
import { useTranslations } from 'next-intl';
import './about.css';

export default function Page() {
  const t = useTranslations('About');

  const teamMembers = [
    {
      name: 'Ashley Cole',
      role: 'Founder',
      bio: 'Digital transformation expert with a passion for economic empowerment.',
      image: '/assets/team-01.jpg',
    },
    {
      name: 'Juan Soto',
      role: 'Co-Founder',
      bio: 'Fintech expert with extensive experience in startup development.',
      image: '/assets/team-02.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline={`${t('aboutBlack')} ${t('wealthCrypto')}`}
        subtext={t('empoweringIntro')}
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-8 text-center">
            {t('ourMission')}
            <span className="block text-xl text-[#4A90E2] mt-2">{t('empoweringCommunity')}</span>
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-[#6C757D]">
            <p className="mb-6">{t('missionStatement')}</p>
            <p className="text-center text-xl text-[#4A90E2] font-semibold">{t('tagline')}</p>
          </div>
        </div>
        
        {/* Mission Description Section */}
        <div className="community-content mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#2C3E50]">{t("missionDesc")}</h2>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Learn, Grow, Connect Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <svg 
                aria-label="Growth icon" 
                className="w-8 h-8 mr-3 text-[#4A90E2]" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
              <h2 className="text-2xl font-semibold text-[#2C3E50]">{t("learnGrowConnect")}</h2>
            </div>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-8">{t("whatToExpect")}</h2>
          </div>

          {/* Three column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-16 h-16 text-[#4A90E2]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-label="Education icon"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{t("educational")}</h3>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">{t("content")}</h3>
              <p className="text-[#6C757D]">{t("educationalDesc")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-16 h-16 text-[#4A90E2]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-label="Top creators icon"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{t("topBlack")}</h3>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">{t("topCreators")}</h3>
              <p className="text-[#6C757D]">{t("topCreatorsDesc")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="mb-4 flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-16 h-16 text-[#4A90E2]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-label="News and events icon"
                >
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-4">{t("newsEvents")}</h3>
              <p className="text-[#6C757D]">{t("newsEventsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <svg 
                aria-label="Team icon" 
                className="w-8 h-8 mr-3 text-[#4A90E2]" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-5c-.8 0-1.5.7-1.5 1.5v1.08L9.24 8.16A1.5 1.5 0 0 0 7.5 9.5L10 22h2.1l-1.9-8.68L12 14v8h4z"/>
              </svg>
              <h2 className="text-2xl font-semibold text-[#2C3E50]">{t("theTeam")}</h2>
            </div>
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-8">{t("meetTeam")}</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12 text-lg text-[#6C757D] text-center">
            <p className="mb-6">{t("teamDescription")}</p>
            <p className="mb-6">{t("teamDesc2")}</p>
            <blockquote className="text-xl text-[#4A90E2] italic">{t("teamQuote")}</blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#4A90E2] to-[#2C3E50] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role}`}
                      className="w-32 h-32 rounded-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        if (img.parentElement) {
                          const placeholder = img.parentElement.querySelector('.placeholder-text') as HTMLElement;
                          if (!placeholder) {
                            const placeholderDiv = document.createElement('div');
                            placeholderDiv.className = 'placeholder-text text-white text-lg font-semibold';
                            placeholderDiv.textContent = member.name.split(' ').map(n => n[0]).join('');
                            img.parentElement.appendChild(placeholderDiv);
                          }
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-1">{member.name}</h3>
                  <p className="text-[#4A90E2] font-semibold mb-3">{member.role}</p>
                  <p className="text-[#6C757D] text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center">
                    <svg 
                      aria-label="LinkedIn profile" 
                      className="w-6 h-6 text-[#4A90E2] hover:text-[#2C3E50] cursor-pointer" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-[#4A90E2] to-[#2C3E50] rounded-lg flex items-center justify-center">
                <img 
                  src="/assets/community.jpg" 
                  alt="Community members collaborating and learning together" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    if (img.parentElement) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'text-white text-xl font-semibold text-center';
                      placeholder.textContent = 'Community Collaboration';
                      img.parentElement.appendChild(placeholder);
                    }
                  }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <svg 
                  aria-label="Community icon" 
                  className="w-8 h-8 mr-3 text-[#4A90E2]" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                </svg>
                <h2 className="text-2xl font-semibold text-[#2C3E50]">{t("givingBack")}</h2>
              </div>
              <h2 className="text-4xl font-bold text-[#2C3E50] mb-8">
                {t("community")} <br />
                {t("communityInvolvement")}
              </h2>
              <div className="max-w-3xl text-lg text-[#6C757D]">
                <p>{t("communityDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-[#4A90E2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              {t("blockchainLine1")} <br />
              {t("blockchainLine2")} <br />
              {t("blockchainLine3")} <br />
              {t("blockchainLine4")}
            </blockquote>
            <cite className="text-xl font-semibold">{t("blockchainQuoteAuthor")}</cite>
            <p className="text-lg mt-2 opacity-90">{t("author")}</p>
          </div>
        </div>
      </section>

      {/* Bridge/Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <svg 
                    aria-label="Goal icon" 
                    className="w-8 h-8 mr-3 text-[#4A90E2]" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h2 className="text-2xl font-semibold text-[#2C3E50]">{t("goal")}</h2>
                </div>
                <h2 className="text-4xl font-bold text-[#2C3E50] mb-6">
                  {t("bridgeLine1")} <br />
                  {t("bridgeLine2")}
                </h2>
                <div className="text-lg text-[#6C757D] mb-8">
                  <p className="mb-4">{t("bridgeDesc1")}</p>
                  <p>{t("bridgeDesc2")}</p>
                </div>

                <hr className="my-8 border-gray-300" />

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#6C757D]">{t("fact1")}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#6C757D]">{t("fact2")}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-[#6C757D]">{t("fact3")}</span>
                  </div>
                </div>
                <p className="text-lg text-[#6C757D] font-medium">{t("bridgeConclusion")}</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-96 bg-gradient-to-br from-[#4A90E2] to-[#2C3E50] rounded-lg flex items-center justify-center">
                  <img 
                    src="/assets/bridge-image.jpg"
                    alt="Bridge connecting communities to blockchain technology"
                    className="w-full h-96 object-cover rounded-lg"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      if (img.parentElement) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'text-white text-xl font-semibold text-center';
                        placeholder.textContent = 'Bridge to Digital Future';
                        img.parentElement.appendChild(placeholder);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}