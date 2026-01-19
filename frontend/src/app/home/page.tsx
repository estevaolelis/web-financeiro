import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Navbar/>
        <main className="flex flex-1 flex-col gap-4 p-4 md:p-8">
          <div className="grid gap-4"></div>
        </main>
      </div>
    </>
  );
}