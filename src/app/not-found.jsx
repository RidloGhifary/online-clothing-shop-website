"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl font-bold text-black md:text-8xl">404</h1>
      <p className="text-gray-600">Oops something went wrong with this page</p>
      <button
        onClick={() => router.back()}
        className="cursor-pointer rounded-lg bg-black px-4 py-2 text-white transition hover:bg-black/80"
      >
        Back
      </button>
    </div>
  );
}
