type ChatMessageProps = {
  role: "user" | "ai";
  content: string;
};


export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {

  const isUser = role === "user";


  return (
    <div
      className={`
        flex
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >

      <div
        className={`
          max-w-[80%]
          px-5
          py-3
          rounded-2xl
          ${
            isUser
              ? `
                bg-cyan-400
                text-black
                rounded-br-none
              `
              : `
                bg-white/10
                text-gray-200
                border
                border-white/10
                rounded-bl-none
              `
          }
        `}
      >

        {/* Role */}
        <p
          className="
            text-xs
            mb-2
            opacity-70
          "
        >
          {isUser ? "You" : "RES AI"}
        </p>


        {/* Message */}
        <p
          className="
            leading-6
          "
        >
          {content}
        </p>


      </div>

    </div>
  );
}
