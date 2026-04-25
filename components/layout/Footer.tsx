export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">
        <div className="text-xs text-white/70 max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex items-center justify-center text-xs tracking-wide">
          © {new Date().getFullYear()} Losode. All rights reserved.
        </div>
      </footer>
    );
  }