export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-zinc-800">
      <div className="container mx-auto max-w-4xl text-center text-zinc-400 text-sm">
        © {new Date().getFullYear()} nukuvv. All rights reserved.
      </div>
    </footer>
  );
}
