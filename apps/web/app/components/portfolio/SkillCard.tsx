type SkillCardProps = {
  name: string;
  icon?: string;
  level: string;
  description?: string;
};


export default function SkillCard({
  name,
  icon,
  level,
  description,
}: SkillCardProps) {
  return (
    <div
      className="
        glass
        rounded-2xl
        p-6
        hover:scale-105
        transition
        duration-300
      "
    >

      {/* Icon */}
      <div
        className="
          text-4xl
          mb-4
        "
      >
        {icon ?? "💻"}
      </div>


      {/* Skill Name */}
      <h3
        className="
          text-xl
          font-bold
          text-cyan-400
        "
      >
        {name}
      </h3>


      {/* Level */}
      <p
        className="
          mt-2
          text-sm
          text-green-400
        "
      >
        ● {level}
      </p>


      {/* Description */}
      {description && (
        <p
          className="
            mt-4
            text-gray-400
            text-sm
            leading-6
          "
        >
          {description}
        </p>
      )}


    </div>
  );
}
