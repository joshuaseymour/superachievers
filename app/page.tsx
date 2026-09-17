export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="space-y-8 max-w-4xl">
          <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl">
            Superachievers
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-3xl">
              Multi Family Office Rewards
            </h2>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              Synchronously Co‑Create Our Super Puzzle
            </p>
            
            <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto sm:text-xl">
              Ensure you are set to always win with others via our multi family office.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
