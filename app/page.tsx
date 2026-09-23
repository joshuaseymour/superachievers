import { Splash } from "@/components/splash"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main id="main" className="flex flex-1 flex-col">
        <Splash />
      </main>
    </div>
  )
}
