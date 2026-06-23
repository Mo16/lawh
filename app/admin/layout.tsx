import Link from "next/link";
import { Sidebar } from "@/components/admin/Sidebar";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata = { title: "Admin — LA Water Heaters" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="flex items-center justify-between border-b bg-white px-6 py-3">
        <Link href="/admin" className="font-bold">Content Admin</Link>
        <div className="flex items-center gap-4">
          <Link href="/" target="_blank" className="text-sm text-blue-600 hover:underline">View site ↗</Link>
          <LogoutButton />
        </div>
      </header>
      <div className="mx-auto flex max-w-6xl">
        <aside className="w-60 shrink-0 border-r bg-white">
          <Sidebar />
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
