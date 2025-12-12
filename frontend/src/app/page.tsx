import { LoginForm } from "@/components/login-form";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}
