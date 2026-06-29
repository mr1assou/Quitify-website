"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/95 shadow-sm shadow-primary/5 backdrop-blur-lg"
          : "border-b border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-section p-1.5 shadow-sm transition-shadow group-hover:shadow-md group-hover:shadow-primary/10">
            <Image
              src="/logo.webp"
              alt="Quitify logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Quitify
          </span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-muted transition-all hover:bg-accent-soft hover:text-foreground sm:px-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
