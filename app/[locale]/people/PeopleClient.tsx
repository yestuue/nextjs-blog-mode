'use client';

import { useTranslations } from 'next-intl';
import { Person } from '../../../types/person';
import PersonCard from '../../../components/PersonCard';

interface ContentfulPerson {
  sys: {
    id: string;
  };
  fields: Person;
}

interface Props {
  people?: ContentfulPerson[];
}

const defaultPeople: Person[] = [
  {
    name: "Myron Golde",
    emoji: "🎧",
    location: "USA",
    status: "ready",
    youTube: "https://youtube.com/@myrongolde",
    instagram: "@myrongolde",
    description: "Crypto expert and educator"
  },
  {
    name: "Kenan Grace",
    emoji: "🎧",
    location: "USA",
    status: "ready",
    youTube: "https://youtube.com/@kenangrace",
    twitter: "@kenangrace",
    description: "Blockchain specialist and analyst"
  },
  {
    name: "Emmanuel Asuquo",
    emoji: "🎧",
    location: "United Kingdom",
    status: "ready",
    instagram: "@emmanuel_asuquo",
    website: "https://emmanuelasuquo.com",
    description: "Financial advisor and wealth strategist"
  },
  {
    name: "Erica Stanford",
    emoji: "💡",
    location: "United Kingdom",
    status: "ready",
    twitter: "@ericastanford",
    description: "Crypto scam investigator and educator"
  },
  {
    name: "Ian Balina",
    emoji: "📊",
    location: "USA",
    status: "ready",
    twitter: "@DiaryofaMadeMan",
    description: "Blockchain investor and researcher"
  },
  {
    name: "Layah Heilpern",
    emoji: "🎥",
    location: "Dubai",
    status: "ready",
    twitter: "@LayahHeilpern",
    description: "Crypto news anchor and analyst"
  }
];

export default function PeopleClient({ people = [] }: Props) {
  const t = useTranslations("People");

  // Use Contentful data if available, otherwise use default data
  const displayPeople = people?.length ? 
    people.map(p => ({ ...p.fields, id: p.sys.id })) : 
    defaultPeople.map((p, i) => ({ ...p, id: `default-${i}` }));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPeople.map((person) => (
              <PersonCard 
                key={person.id} 
                name={person.name}
                emoji={person.emoji}
                location={person.location}
                status={person.status}
                description={person.description}
                youTube={person.youTube}
                twitter={person.twitter}
                instagram={person.instagram}
                website={person.website}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );

export default function PeopleClient({ people = [] }: Props) {
  const t = useTranslations("People");

  // Use Contentful data if available, otherwise use default data
  const displayPeople = people?.length ? 
    people.map(p => ({ ...p.fields, id: p.sys.id })) : 
    defaultPeople;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPeople.map((person) => (
              <PersonCard 
                key={person.id || person.name} 
                name={person.name}
                emoji={person.emoji}
                location={person.location}
                status={person.status}
                description={person.description}
                youTube={person.youTube}
                twitter={person.twitter}
                instagram={person.instagram}
                website={person.website}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );

interface ContentfulPerson {
  sys: {
    id: string;
  };
  fields: Person;
}

interface Props {
  people?: ContentfulPerson[];
}

const defaultPeople: Person[] = [
  {
    name: "Myron Golde",
    emoji: "🎧",
    location: "USA",
    status: "ready",
    youTube: "https://youtube.com/@myrongolde",
    instagram: "@myrongolde",
    description: "Crypto expert and educator"
  },
  {
    name: "Kenan Grace",
    emoji: "🎧",
    location: "USA",
    status: "ready",
    youTube: "https://youtube.com/@kenangrace",
    twitter: "@kenangrace",
    description: "Blockchain specialist and analyst"
  },
  {
    name: "Emmanuel Asuquo",
    emoji: "🎧",
    location: "United Kingdom",
    status: "ready",
    instagram: "@emmanuel_asuquo",
    website: "https://emmanuelasuquo.com",
    description: "Financial advisor and wealth strategist"
  },
  {
    name: "Erica Stanford",
    emoji: "💡",
    location: "United Kingdom",
    status: "ready",
    twitter: "@ericastanford",
    description: "Crypto scam investigator and educator"
  },
  {
    name: "Ian Balina",
    emoji: "📊",
    location: "USA",
    status: "ready",
    twitter: "@DiaryofaMadeMan",
    description: "Blockchain investor and researcher"
  },
  {
    name: "Layah Heilpern",
    emoji: "🎥",
    location: "Dubai",
    status: "ready",
    twitter: "@LayahHeilpern",
    description: "Crypto news anchor and analyst"
  }
];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );
}

  ];

  // Use Contentful data if available, otherwise use default data
  const displayPeople = people?.length ? people.map(p => ({ ...p.fields, id: p.sys.id })) : defaultPeople;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPeople.map((person) => (
              <PersonCard key={person.id || person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );
    status: 'ready' as const
  }
];

export default function PeopleClient() {
  const t = useTranslations("People");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('directory')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t('directoryDesc')}
          </p>
        </div>
      </section>

      {/* People Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleData.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
            {t('readyTransform')}
          </h2>
          <p className="text-xl text-medium-gray mb-8">
            {t('contactUs')}
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            {t('getFreeQuote')}
          </a>
        </div>
      </section>
    </main>
  );

    const icons = ["🏐", "👑", "🏓", "🎧", "🍪", "🌹", "🐨", "🐶"];

    return (
        <div>
            <div className="people-image" />
            <div className="people">
                <div className="title">☎️{t("title")}</div>
                "use client";

                import { useTranslations, useLocale } from "next-intl";
                import Link from "next/link";
                import PersonCard from "@/components/PersonCard";
                import { Person } from "@/types/person";

                interface ContentfulPerson {
                  sys: {
                    id: string;
                  };
                  fields: Person;
                }

                interface Props {
                  people?: ContentfulPerson[];
                }

                type DisplayPerson = Person & { id: string };

                const defaultPeople: DisplayPerson[] = [
                  {
                    id: "default-1",
                    name: "Myron Golde",
                    emoji: "🎧",
                    location: "USA",
                    status: "ready",
                    youTube: "https://youtube.com/@myrongolde",
                    instagram: "@myrongolde",
                    description: "Crypto expert and educator"
                  },
                  {
                    id: "default-2",
                    name: "Kenan Grace",
                    emoji: "🎧",
                    location: "USA",
                    status: "ready",
                    youTube: "https://youtube.com/@kenangrace",
                    twitter: "@kenangrace",
                    description: "Blockchain specialist and analyst"
                  },
                  {
                    id: "default-3",
                    name: "Emmanuel Asuquo",
                    emoji: "🎧",
                    location: "United Kingdom",
                    status: "ready",
                    instagram: "@emmanuel_asuquo",
                    website: "https://emmanuelasuquo.com",
                    description: "Financial advisor and wealth strategist"
                  },
                  {
                    id: "default-4",
                    name: "Erica Stanford",
                    emoji: "💡",
                    location: "United Kingdom",
                    status: "ready",
                    twitter: "@ericastanford",
                    description: "Crypto scam investigator and educator"
                  },
                  {
                    id: "default-5",
                    name: "Ian Balina",
                    emoji: "📊",
                    location: "USA",
                    status: "ready",
                    twitter: "@DiaryofaMadeMan",
                    description: "Blockchain investor and researcher"
                  },
                  {
                    id: "default-6",
                    name: "Layah Heilpern",
                    emoji: "🎥",
                    location: "Dubai",
                    status: "ready",
                    twitter: "@LayahHeilpern",
                    description: "Crypto news anchor and analyst"
                  }
                ];

                export default function PeopleClient({ people = [] }: Props) {
                  const t = useTranslations("People");
                  const locale = useLocale();

                  const displayPeople: DisplayPerson[] =
                    people && people.length > 0
                      ? people.map((p) => ({ ...(p.fields as Person), id: p.sys.id }))
                      : defaultPeople;

                  return (
                    <main className="min-h-screen">
                      {/* Hero Section */}
                      <section className="bg-primary text-white py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            {t("directory")}
                          </h1>
                          <p className="text-xl md:text-2xl opacity-90">{t("directoryDesc")}</p>
                        </div>
                      </section>

                      {/* People Directory */}
                      <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayPeople.map((person) => (
                              <PersonCard
                                key={person.id}
                                name={person.name}
                                emoji={person.emoji}
                                location={person.location}
                                status={person.status}
                              />
                            ))}
                          </div>
                        </div>
                      </section>

                      {/* CTA Section */}
                      <section className="py-20 bg-light-gray">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-6">
                            {t("readyTransform")}
                          </h2>
                          <p className="text-xl text-medium-gray mb-8">{t("contactUs")}</p>
                          <Link href={`/${locale}/contact`} className="btn-primary">
                            {t("getFreeQuote")}
                          </Link>
                        </div>
                      </section>
                    </main>
                  );
                }
