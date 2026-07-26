export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      <div className="flex flex-col items-center gap-8">

        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-cyan-400 animate-spin border-t-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-cyan-400">
              RES
            </span>
          </div>
        </div>


        {/* Loading Text */}
        <div className="text-center">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
            ResolveErrorStack
          </h1>

          <p className="mt-3 text-gray-400 animate-pulse">
            Initializing Developer Experience...
          </p>

        </div>


        {/* Loading Dots */}
        <div className="flex gap-2">

          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />

          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:200ms]" />

          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:400ms]" />

        </div>

      </div>

    </main>
  );
}
