import { TeamMember } from '../types/components';

export default function TeamMemberCard({ name, role, bio, image }: TeamMember) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {image && (
        <div className="relative h-64 w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2C3E50] mb-1">{name}</h3>
        <p className="text-[#4A90E2] mb-4">{role}</p>
        <p className="text-[#6C757D]">{bio}</p>
      </div>
    </div>
  );
}