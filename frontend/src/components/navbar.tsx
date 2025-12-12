import Link from "next/link";
import {
  LayoutDashboard,
  ArrowRightLeft,
  Tag,
  Plus,
  Wallet,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wallet className="h-5 w-5" />
            </div>
            <span>Finanças</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/lancamentos"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRightLeft className="h-4 w-4" />
              Lançamentos
            </Link>
            <Link
              href="/categorias"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Tag className="h-4 w-4" />
              Categorias
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Novo</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" /> Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
