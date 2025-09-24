"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import clsx from "clsx";
import { House, LayoutPanelTop, Trello } from "lucide-react";

const navSides = [
  { name: "Bảng", href: "/boards", icon: Trello, value: "boards" },
  {
    name: "Mẫu",
    href: "/boards/settings",
    icon: LayoutPanelTop,
    value: "templates",
  },
  { name: "Trang chủ", href: "/", icon: House, value: "home" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sellectedNav, setSelectedNav] = useState("boards");

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <Logo />
        <nav className="flex flex-col gap-2 mt-20 border-b border-b-gray-300">
          {navSides.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "p-2 rounded last:mb-2",
                  {
                    "bg-blue-300 text-blue-700 font-semibold":
                      sellectedNav === item.value,
                  },
                  { "hover:bg-gray-200": sellectedNav !== item.value }
                )}
                onClick={() => setSelectedNav(item.value)}
              >
                <div className="flex items-center gap-2">
                  <Icon size={20} />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>
        <div>
          <h2 className="text-sm mt-4 font-semibold text-gray-700">
            Các không gian làm việc
          </h2>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Trello Clone</h1>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/login");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
