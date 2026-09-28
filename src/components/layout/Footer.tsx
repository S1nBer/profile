export function Footer() {
  return (
    <footer className="border-t border-border-soft py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>© {new Date().getFullYear()} Андрей Герасименко · S1nBer</p>
        <p className="font-mono text-xs">Сделано на React + Three.js</p>
      </div>
    </footer>
  );
}
