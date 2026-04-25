


export default function PageContainer({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          {children}
        </div>
      </div>
    );
  }