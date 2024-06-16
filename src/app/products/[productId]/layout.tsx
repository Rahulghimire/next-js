export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div>Feature products</div>
        {/* carousel here */}
      </body>
    </html>
  );
}
