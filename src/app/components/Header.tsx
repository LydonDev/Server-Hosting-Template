import Link from "next/link";
import { SiDiscord } from "react-icons/si";

export default function Header() {
  return (
    <header className="bg-opacity-50 border-b border-zinc-800 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">RandomHostName</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <Link href="https://discord.gg/randomhostdiscord">
            <SiDiscord className="w-6 h-6 cursor-pointer text-[#ececf399]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
