import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full max-w-sm">
        <LoginForm className="w-full"/>
      </div>
    </div>
  );
}
