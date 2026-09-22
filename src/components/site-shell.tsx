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
          <span className="text-[13px] font-extrabold tracking-[.14em] text-[#101b36]">ANANYA ARUN<br/><i className="font-semibold not-italic tracking-[.27em] text-blue-600">TUITION</i></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">{navItems.map(item => <Link key={item.href} href={item.href} className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600">{item.label}</Link>)}</nav>
        <div className="hidden lg:block"><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full bg-[#101b36] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-blue-600">Book a Free Demo <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></div>
        <button className="grid size-11 place-items-center rounded-full bg-slate-100 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 lg:hidden">{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700">{item.label}</Link>)}<a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-4 flex justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">Book a Free Demo</a></nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-[#101b36] text-white"><div className="container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
      <div><div className="mb-4 text-sm font-extrabold tracking-[.18em]">{site.name}</div><p className="max-w-xs text-sm leading-7 text-slate-300">{site.tagline}. Thoughtful support for learners and peace of mind for families.</p></div>
      <div><h3 className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Explore</h3><div className="grid gap-3 text-sm text-slate-300">{navItems.slice(1,6).map(item => <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>)}</div></div>
      <div><h3 className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Connect</h3><div className="grid gap-3 text-sm text-slate-300"><span>{site.phone}</span><span>{site.whatsapp}</span><span>{site.email}</span><span>{site.area}</span></div></div>
    </div><div className="border-t border-white/10"><div className="container flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:justify-between"><span>© 2026 {site.name}. All Rights Reserved.</span><span>Google Business Profile · 4.9★ from 94 reviews</span></div></div></footer>
    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.004-3.639 2.961-6.592 6.602-6.592 1.76 0 3.426.687 4.674 1.935a6.6 6.6 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.602 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    </a>
  </>;
}
