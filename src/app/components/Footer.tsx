import Link from "next/link";
import { SiDiscord, SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">RandomHostName</h3>
            <p className="text-[#ececf399] text-sm max-w-xs">
              High-performance game servers deployed in minutes.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://"
                  className="text-[#ececf399] hover:text-blue-400 transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="https://"
                  className="text-[#ececf399] hover:text-blue-400 transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://discord.gg/randomhostdiscord"
                className="text-[#ececf399] hover:text-blue-400 transition-colors"
              >
                <SiDiscord className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/randomhostx"
                className="text-[#ececf399] hover:text-blue-400 transition-colors"
              >
                <SiX className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/randomhostgithub"
                className="text-[#ececf399] hover:text-blue-400 transition-colors"
              >
                <SiGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 text-center text-xs text-[#ececf399]">
          © {new Date().getFullYear()} RandomHostName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
