"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      This is an error Page of reviewId{error?.message}{" "}
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
