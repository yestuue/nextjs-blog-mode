import { StatCard } from '../types/components';

export default function StatsCard({ value, label, description }: StatCard) {
  return (
    <div className="relative p-6 bg-white/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="space-y-2">
        <div className="text-3xl md:text-4xl font-bold text-[#28A745]">
          {value}
        </div>
        <div className="text-lg font-semibold text-[#2C3E50]">{label}</div>
        {description && (
          <div className="text-sm text-[#6C757D]">{description}</div>
        )}
      </div>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 to-transparent rounded-xl -z-10" />
    </div>
  );
}