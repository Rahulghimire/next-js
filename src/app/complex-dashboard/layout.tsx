export default function ProductDetailsLayout({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      {children}
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </div>
  ) : (
    login
  );
}
