"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { navItems, site } from "@/data/site";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-[13px] bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 text-white shadow-lg shadow-blue-500/20"><Sparkles size={19} /></span>
          <span className="text-[13px] font-extrabold tracking-[.14em] text-[#101b36]">TUTORS<br/><i className="font-semibold not-italic tracking-[.27em] text-blue-600">ACADEMY</i></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">{navItems.map(item => <Link key={item.href} href={item.href} className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600">{item.label}</Link>)}</nav>
        <div className="hidden lg:block"><Link href="/contact" className="group flex items-center gap-2 rounded-full bg-[#101b36] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-blue-600">Book a Free Demo <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></div>
        <button className="grid size-11 place-items-center rounded-full bg-slate-100 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700">{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="mt-4 flex justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">Book a Free Demo</Link></nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-[#101b36] text-white"><div className="container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
      <div><div className="mb-4 text-sm font-extrabold tracking-[.18em]">{site.name}</div><p className="max-w-xs text-sm leading-7 text-slate-300">{site.tagline}. Thoughtful support for learners and peace of mind for families.</p></div>
      <div><h3 className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Explore</h3><div className="grid gap-3 text-sm text-slate-300">{navItems.slice(1,6).map(item => <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>)}</div></div>
      <div><h3 className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Connect</h3><div className="grid gap-3 text-sm text-slate-300"><span>{site.phone}</span><span>{site.whatsapp}</span><span>{site.email}</span><span>{site.area}</span></div></div>
    </div><div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:justify-between"><span>© 2026 TUTORS ACADEMY. All Rights Reserved.</span><span>Google Business Profile · 4.9★ from 94 reviews</span></div></div></footer>
  </>;
}
