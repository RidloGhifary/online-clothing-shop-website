"use client";

export default function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl font-bold text-black md:text-8xl">500</h1>
      <p className="text-gray-600">
        Something went wrong, we are still fixing it...
      </p>
    </div>
  );
}
