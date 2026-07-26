type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "danger";
};


export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {

  const styles = {
    default: `
      text-cyan-300
      bg-cyan-400/10
      border-cyan-400/30
    `,

    success: `
      text-green-400
      bg-green-400/10
      border-green-400/30
    `,

    danger: `
      text-red-400
      bg-red-400/10
      border-red-400/30
    `,
  };


  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-sm
        border
        ${styles[variant]}
      `}
    >
      {children}
    </span>
  );
}
