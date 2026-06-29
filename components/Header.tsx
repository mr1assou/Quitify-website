"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={`absolute left-0 block h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
          open ? "top-[9px] rotate-45" : "top-0.5"
        }`}
      />
      <span
        className={`absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
          open ? "opacity-0 scale-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
          open ? "top-[9px] -rotate-45" : "top-[17px]"
        }`}
      />
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border/80 bg-background/95 shadow-sm shadow-primary/5 backdrop-blur-lg"
          : "border-b border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02] sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-section p-1.5 shadow-sm transition-shadow group-hover:shadow-md group-hover:shadow-primary/10 sm:h-10 sm:w-10">
            <Image
              src="/logo.webp"
              alt="Quitify logo"
              width={32}
              height={32}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Quitify
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-accent-soft hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-section transition-colors hover:bg-accent-soft md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu overlay"
            />

            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 right-0 top-full z-50 border-b border-border bg-background/98 px-4 py-4 shadow-lg shadow-primary/5 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent-soft"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
