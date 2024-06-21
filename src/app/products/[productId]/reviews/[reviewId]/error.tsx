"use client";
export default function ErrorBoundary({ error }: { error: Error }) {
  return <div>This is an error Page of reviewId{error?.message}</div>;
}
