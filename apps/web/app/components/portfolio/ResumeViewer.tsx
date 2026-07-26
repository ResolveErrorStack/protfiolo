export default function ResumeViewer() {
  return (
    <div
      className="
        glass
        rounded-3xl
        p-6
        overflow-hidden
      "
    >

      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-cyan-400
          "
        >
          Resume Preview 📄
        </h2>


        <span
          className="
            text-sm
            text-green-400
          "
        >
          Updated
        </span>

      </div>


      {/* PDF Viewer */}
      <div
        className="
          w-full
          h-[700px]
          rounded-2xl
          overflow-hidden
          border
          border-white/10
          bg-white
        "
      >

        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          className="
            w-full
            h-full
          "
        />

      </div>


    </div>
  );
          }
