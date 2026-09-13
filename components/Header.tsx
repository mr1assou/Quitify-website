"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type MouseEvent } from "react";

import { GooglePlayButton } from "@/components/GooglePlayButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

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

  // Next.js often skips hash scrolling after client navigations — handle it ourselves.
  useEffect(() => {
    if (pathname !== "/") return;

    const run = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };

    run();
    const t = window.setTimeout(run, 80);
    return () => window.clearTimeout(t);
  }, [pathname]);

  const onNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      setMenuOpen(false);

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      const path = href.slice(0, hashIndex) || "/";

      if (pathname !== path) return;

      event.preventDefault();
      window.history.pushState(null, "", href);
      scrollToHash(hash);
    },
    [pathname],
  );

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
              onClick={(event) => onNavClick(event, link.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-accent-soft hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <GooglePlayButton className="ml-2" />
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
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden"
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
                      onClick={(event) => onNavClick(event, link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="mt-2 px-1"
                >
                  <GooglePlayButton className="w-full" size="lg" />
                </motion.li>
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
