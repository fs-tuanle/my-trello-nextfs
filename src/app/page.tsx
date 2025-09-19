import Logo from "@/components/ui/Logo";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Plans", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Resources", href: "#" },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground font-primary font-normal">
      <div className="fixed top-0 left-0 right-0 z-10 w-full bg-white shadow-xl">
        <div className="mx-auto flex h-15 max-w-7xl items-center">
          <Logo />
          <nav className="ml-7">
            <ul className="flex space-x-6">
              {navigation.map((item) => (
                <li key={item.name} className="cursor-pointer">
                  <a
                    href={item.href}
                    className="text-tblue-600 hover:text-tblue-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-tblue-600 text-lg h-full ml-auto">
            <Link href={"/login"} className="px-6 cursor-pointer">
              Log in
            </Link>
            <Link href={"/register"}>
              <button className="px-6 bg-tblue-500 hover:bg-tblue-700 h-full text-white cursor-pointer">
                Get Trello for free
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-5xl font-bold">Welcome to Trello Clone!!</h1>
        <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      </div>
    </div>
  );
}
