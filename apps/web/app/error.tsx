"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        {/* Error Icon */}
        <div className="mx-auto mb-8 w-24 h-24 rounded-full border border-red-500 flex items-center justify-center">
          <span className="text-5xl text-red-500">
            !
          </span>
        </div>


        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Something went wrong
        </h1>


        {/* Message */}
        <p className="text-gray-400 mb-8">
          ResolveErrorStack encountered an unexpected error.
          Please try again.
        </p>


        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="
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
          Try Again
        </button>


        {/* Developer Info */}
        <p className="mt-6 text-sm text-gray-600">
          Error ID: {error.digest ?? "unknown"}
        </p>

      </div>

    </main>
  );
        }
