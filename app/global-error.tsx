'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
          <div>
            <h2 className="text-2xl font-semibold">Something went wrong</h2>
            <p className="mt-3 text-slate-400">The portfolio hit an unexpected error. Please refresh and try again.</p>
            <button
              onClick={() => reset()}
              className="mt-6 rounded-full bg-cyan-400 px-5 py-2 font-medium text-slate-950"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
