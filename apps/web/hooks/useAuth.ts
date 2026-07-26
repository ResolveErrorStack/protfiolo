export default function Loader() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
    >

      {/* Spinner */}
      <div
        className="
          w-16
          h-16
          rounded-full
          border-4
          border-cyan-400/30
          border-t-cyan-400
          animate-spin
        "
      />


      {/* Text */}
      <p
        className="
          text-cyan-400
          text-sm
          animate-pulse
        "
      >
        Loading...
      </p>


    </div>
  );
    }
