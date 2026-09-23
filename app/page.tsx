import { Splash } from "@/components/splash"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <header className="pt-[env(safe-area-inset-top)]">
        <div className="flex min-h-6 items-center justify-end px-6 sm:px-8" />
      </header>
      <main id="main" className="flex flex-1 flex-col">
        <Splash />
      </main>
    </div>
  )
}
