import { HeroProps } from '../types/components';

export default function Hero({ headline, subtext, cta, backgroundImage = '/assets/hero-bg.jpg' }: HeroProps) {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/90 to-[#4A90E2]/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
          </h1>
          {subtext && (
            <p className="text-xl md:text-2xl text-white/90 mb-8">{subtext}</p>
          )}
          {cta && (
            <div className="flex flex-wrap gap-4">
              {cta.primary && (
                <a
                  href={cta.primary.href}
                  className="inline-block px-8 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  {cta.primary.text}
                </a>
              )}
              {cta.secondary && (
                <a
                  href={cta.secondary.href}
                  className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  {cta.secondary.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}