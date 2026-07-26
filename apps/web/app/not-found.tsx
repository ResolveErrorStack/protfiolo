import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        {/* 404 Animation */}
        <h1 className="
          text-8xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          bg-clip-text
          text-transparent
          animate-pulse
        ">
          404
        </h1>


        <h2 className="text-3xl font-bold mt-6">
          Page Not Found
        </h2>


        <p className="text-gray-400 mt-4 max-w-md">
          The page you are looking for does not exist
          or has been moved.
        </p>


        {/* Back Home Button */}
        <Link
          href="/"
          className="
            inline-block
            mt-8
            px-8
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-red-500
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >
          Return Home
        </Link>


        {/* Brand */}
        <p className="mt-10 text-sm text-gray-600">
          ResolveErrorStack 🚀
        </p>

      </div>

    </main>
  );
}
