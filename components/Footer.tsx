import Image from "next/image";
import Link from "next/link";

import { GooglePlayButton } from "@/components/GooglePlayButton";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
  COMPANY_SUPPORT_EMAIL,
  COMPANY_WEBSITE_URL,
} from "@/lib/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-section">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="Quitify logo"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold text-foreground">Quitify</p>
          </div>
          <p className="mt-1 text-sm text-muted">
            Lifestyle habit tools for a more productive day.
          </p>
          <div className="mt-4">
            <GooglePlayButton />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/privacy"
            className="text-muted transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-muted transition-colors hover:text-primary"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/delete-account"
            className="text-muted transition-colors hover:text-primary"
          >
            Delete account
          </Link>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-6xl text-center text-xs leading-6 text-muted">
          © {year} Quitify. All rights reserved. App developed by{" "}
          <a
            href={COMPANY_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-2 transition-colors hover:text-primary"
          >
            {COMPANY_NAME}
          </a>
          .{" "}
          <a
            href={`mailto:${COMPANY_SUPPORT_EMAIL}`}
            className="underline decoration-border underline-offset-2 transition-colors hover:text-primary"
          >
            {COMPANY_SUPPORT_EMAIL}
          </a>
          {" · "}
          <a
            href={COMPANY_PHONE_HREF}
            className="underline decoration-border underline-offset-2 transition-colors hover:text-primary"
          >
            {COMPANY_PHONE}
          </a>
          {" · "}
          {COMPANY_ADDRESS}
        </p>
      </div>
    </footer>
  );
}
