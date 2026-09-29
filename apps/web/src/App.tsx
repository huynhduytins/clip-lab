function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-8 text-slate-100">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">React + TypeScript</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white">Turborepo Starter</h1>
        <p className="mt-4 text-slate-300">
          Tailwind CSS and Biome are configured. Edit <code className="rounded bg-slate-800 px-2 py-1">apps/web/src/App.tsx</code> and start building.
        </p>
      </div>
    </main>
  )
}

export default App
