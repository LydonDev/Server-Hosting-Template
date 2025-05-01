import {
  ArrowRightIcon,
  BoltIcon,
  ServerIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative isolate">
      <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-42 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
      </div>

      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-12 mt-16">
        <span className="text-gray-300 bg-zinc-800/70 px-3 py-1.5 rounded-md border border-zinc-700 text-sm flex items-center">
          🎉
          <span className="mx-2 h-3 w-px bg-zinc-700"></span>
          Newly Upgraded Hardware!
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center leading-tight max-w-5xl">
          <span className="relative inline-flex items-center">
            <span className="absolute inset-0 bg-blue-500/50 -rotate-1 transform origin-center scale-x-110 scale-y-115" />
            <span className="relative text-blue-400">High-Performance</span>
            <BoltIcon className="w-10 h-10 md:w-14 md:h-14 relative text-blue-400 ml-3" />
          </span>{" "}
          <br />
          Game Servers In
          <span className="ml-2 relative inline-block underline decoration-wavy decoration-blue-500">
            Minutes
          </span>
        </h1>

        <p className="text-[#ececf399] text-lg/7 md:text-xl/8 text-pretty sm:text-wrap text-center mb-6 max-w-2xl">
          Engineered for performance, built to last. RandomHostName uses
          top-of-the-line hardware to provide the best experience for your
          players.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="https://my.octant.sh"
            className="text-[#ececf399] hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 py-3 rounded-md text-base font-medium transition-colors flex items-center gap-2 group"
          >
            Get Started
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      <div className="container px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose RandomHostName?
          </h2>
          <p className="text-[#ececf399] max-w-2xl mx-auto">
            Our platform is designed to make game server deployment and
            management simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <ServerIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              High-Performance Hardware
            </h3>
            <p className="text-[#ececf399]">
              Powered by the latest AMD Ryzen 9 9950x CPUS and DDR5 RAM.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              DDoS Protection
            </h3>
            <p className="text-[#ececf399]">
              Advanced Path and Cloudflare enterprise protection.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <ClockIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Instant Deployment
            </h3>
            <p className="text-[#ececf399]">
              Get your server up and running in minutes with our inhouse billing
              dashboard.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <GlobeAltIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Global Network
            </h3>
            <p className="text-[#ececf399]">
              We offer servers around the globe to ensure your users always have
              the lowest ping.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <HandRaisedIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
            <p className="text-[#ececf399]">
              Our support team is here to help you with any issues you may have.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="bg-blue-600/20 p-3 rounded-lg w-fit mb-4">
              <HomeIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dashboard</h3>
            <p className="text-[#ececf399]">
              Our dashboard is designed to be fast and easy to use.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
