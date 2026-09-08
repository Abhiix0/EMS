import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-[#C5283D] font-bold">
        404 · PAGE NOT FOUND
      </span>
      <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white">
        This page could not be found.
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-400">
        The requested resource does not exist or has been moved.
      </p>
      <Link
        href="/home"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/5 text-sm font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
      >
        <ArrowLeft className="size-4" />
        <span>Return to Campus Home</span>
      </Link>
    </div>
  );
}
