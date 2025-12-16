export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-900">
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
};
