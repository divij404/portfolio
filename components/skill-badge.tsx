interface SkillBadgeProps {
  name: string
  level?: "Beginner" | "Intermediate" | "Advanced"
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-black/50 border border-gray-800 hover:border-red-600 transition-colors">
      <span className="text-white">{name}</span>
      {level && (
        <span
          className={`ml-2 text-xs px-1.5 py-0.5 ${
            level === "Beginner" ? "text-blue-400" : level === "Intermediate" ? "text-green-400" : "text-purple-400"
          }`}
        >
          {level}
        </span>
      )}
    </div>
  )
}

