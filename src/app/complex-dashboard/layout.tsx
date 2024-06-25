export default function ProductDetailsLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </div>
  );
}
